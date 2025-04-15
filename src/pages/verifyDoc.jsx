import React, { useRef, useEffect, useState } from "react";
import jsQR from "jsqr";
import "./verifyDoc.css";
import { FiUpload } from "react-icons/fi";

const VerifyDoc = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [result, setResult] = useState(null);
  const [scanning, setScanning] = useState(false);
  const [stream, setStream] = useState(null);
  const [redirecting, setRedirecting] = useState(false);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [stream]);

  const isValidURL = (str) => {
    try {
      new URL(str);
      return true;
    } catch (_) {
      return false;
    }
  };

  const handleNewScan = (data) => {
    setResult(data);

    if (isValidURL(data)) {
      setRedirecting(true);
      let timeLeft = 5;
      const timer = setInterval(() => {
        setCountdown(timeLeft);
        if (timeLeft === 0) {
          clearInterval(timer);
          window.location.href = data;
        }
        timeLeft--;
      }, 1000);
    }
  };

  const startScanner = async () => {
    if (!videoRef.current) {
      console.error("Video element not found");
      alert("Error: Video element not found. Please retry.");
      return;
    }

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let tickInterval;

    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment", zoom: { ideal: 2 } },
      });

      setStream(mediaStream);

      if (video) {
        video.srcObject = mediaStream;
        video.setAttribute("playsinline", true);
        video.play();
        setScanning(true);
      } else {
        console.error("videoRef.current is null");
      }

      tickInterval = setInterval(() => {
        if (video.readyState === video.HAVE_ENOUGH_DATA) {
          canvas.height = video.videoHeight;
          canvas.width = video.videoWidth;
          context.drawImage(video, 0, 0, canvas.width, canvas.height);
          const imageData = context.getImageData(
            0,
            0,
            canvas.width,
            canvas.height
          );
          const code = jsQR(imageData.data, imageData.width, imageData.height);
          if (code) {
            handleNewScan(code.data);
            setScanning(false);
            clearInterval(tickInterval);
          }
        }
      }, 200);
    } catch (err) {
      console.error("Camera access error:", err);
      alert("Camera access error: " + err.message);
    }
  };

  const stopScanner = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
    setScanning(false);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target.result;
      img.onload = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0, canvas.width, canvas.height);

        const imageData = context.getImageData(
          0,
          0,
          canvas.width,
          canvas.height
        );
        const code = jsQR(imageData.data, imageData.width, imageData.height);

        if (code) {
          handleNewScan(code.data);
        } else {
          alert("No QR code detected");
        }
      };
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="scannerPageContainer">
      <div className="scannerContainer">
        <h1 className="title">QR Code Scanner</h1>
        <p className="instructions">
          Scan a QR code or upload an image. If it's a URL, you’ll be redirected
          in 5 seconds.
        </p>

        <div
          className="scanner-box"
          onClick={() => document.getElementById("fileInput").click()}
        >
          {!scanning && (
            <>
              <span className="upload-icon">
                <FiUpload size={40} />
              </span>
              <span className="upload-text">Click here to upload</span>
            </>
          )}
          <canvas className="scanner-canvas" ref={canvasRef} />
        </div>

        <input className="upload-input"
          id="fileInput"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageUpload}
        />
      </div>

      {/* Hidden Video Element for Camera Stream */}
      <video className="ScanningVideo" ref={videoRef} style={{ display: "none" }} playsInline autoPlay />

      <div className="scannerButtons">
        <button className="scan-button" onClick={startScanner}>
          {scanning ? "Scanning..." : "Scan"}
        </button>

        {scanning && (
          <button className="stop-button scan-button" onClick={stopScanner}>
            Stop
          </button>
        )}
      </div>
      {redirecting && (
        <div className="redirect-box">
          <p>Redirecting in {countdown} seconds...</p>
          <p className="redirect-url">{result}</p>
        </div>
      )}

      {result && !isValidURL(result) && (
        <div className="result-box">
          <p className="result-label">QR Code Data:</p>
          <p className="result-text">{result}</p>
        </div>
      )}
    </div>
  );
};

export default VerifyDoc;
