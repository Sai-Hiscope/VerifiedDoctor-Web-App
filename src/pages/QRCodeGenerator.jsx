import React, { useEffect, useRef, useState } from "react";
import QRCodeStyling from "qr-code-styling";
import "./QRCodeGenerator.css";

// Initial QR config — empty at first
const qrCode = new QRCodeStyling({
  width: 250,
  height: 250,
  type: "svg",
  data: "",
  image: "src/assets/Images/commonImg/VDrlogoBg.png",
  dotsOptions: {
    color: "#000",
    type: "rounded",
  },
  backgroundOptions: {
    color: "#ffffff",
  },
  imageOptions: {
    crossOrigin: "anonymous",
    margin: 4,
  },
});

const QRCodeGenerator = () => {
  const [inputData, setInputData] = useState("");
  const [isGenerated, setIsGenerated] = useState(false);
  const qrRef = useRef(null);

  useEffect(() => {
    if (isGenerated && qrRef.current) {
      qrRef.current.innerHTML = ""; // Clear previous QR
      qrCode.append(qrRef.current);
    }
  }, [isGenerated]);

  const handleGenerate = () => {
    if (!inputData.trim()) return alert("Please enter something to generate!");
    qrCode.update({ data: inputData });
    setIsGenerated(true);
  };

  const handleDownload = () => {
    if (isGenerated) {
      qrCode.download({ name: "MyQRCode", extension: "png" });
    } else {
      alert("Generate the QR code first!");
    }
  };

  return (
    <div className="qr-container">
      <h2>QR Code Generator</h2>
      <input
        type="text"
        placeholder="Enter text or URL"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
      />
      <div className="btn-group">
        <button onClick={handleGenerate}>Generate</button>
        <button onClick={handleDownload}>Download QR</button>
      </div>
      {isGenerated && <div ref={qrRef} className="qr-output" />}
    </div>
  );
};

export default QRCodeGenerator;
