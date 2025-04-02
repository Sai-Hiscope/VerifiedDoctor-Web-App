import React, { useState, useEffect, useRef } from "react";
import cardsData from "../data/cardsData";
import "./cardsSlider.css";

const CardsSlider = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      if (
        scrollRef.current.scrollLeft + scrollRef.current.offsetWidth >=
        scrollRef.current.scrollWidth
      ) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const autoScroll = setInterval(() => {
      scrollRight();
    }, 3000); // Scrolls every 3 seconds

    return () => clearInterval(autoScroll);
  }, []);

  return (
    <div className="expert-slider-section">
      <h1 className="section-title">
        Get Expert Medical Care Online or In-Clinic for Any Health Need
      </h1>

      <div className="slider-container" ref={scrollRef}>
        {cardsData.map((item, index) => (
          <div className="slide-item" key={index}>
            <div className="slide-title">{item.title}</div>
            <img src={item.img} alt={item.title} />
            <div className="slide-description">{item.description}</div>
            <div className="slide-buttons">
              <button className="online-button">Online</button>
              <button className="clinic-button">Clinic</button>
            </div>
          </div>
        ))}
      </div>

      <div className="slider-navigation">
        <button onClick={scrollLeft}>&#10094;</button>
        <button onClick={scrollRight}>&#10095;</button>
      </div>
    </div>
  );
};

export default CardsSlider;
