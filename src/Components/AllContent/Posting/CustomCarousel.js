import React from "react";
import { useState } from "react";
import "./CustomCarousel.css";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

function CustomCarousel({ images }) {

    //This for finalAddPost section
  const [curr, setCurr] = useState(0);

  //images slideshow
  const prev = () => {
    setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));
  };
  const next = () => {
    setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));
  };

  return (
    <div>
      <div className="image">
        <div className="carousel-container">
          <div
            className="carousel-inner"
            style={{ transform: `translateX(-${curr * 100}%)` }}
          >
            {images.map((file, index) => {
              if (file.metadata.contentType.startsWith("image/")) {
                return <img src={file.url} alt={`Image ${index}`} />;
              } else if (file.metadata.contentType.startsWith("video/")) {
                return (
                  <video key={index} controls autoPlay>
                    <source src={file.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>

        <div className="carousel-controls">
          <button onClick={prev} className="carousel-button">
            <ChevronLeft style={{ fontSize: 30 }} />
          </button>
          <button onClick={next} className="carousel-button">
            <ChevronRight style={{ fontSize: 30 }} />
          </button>
        </div>
        <div className="carousel-indicators">
          <div className="carousel-indicators-inner">
            {images.map((_, i) => (
              <div
                key={i} // Add a unique key prop based on the index i
                className={`carousel-indicator ${
                  curr === i ? "carousel-indicator-active" : ""
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomCarousel;
