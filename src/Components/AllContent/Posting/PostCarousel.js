import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ReactPlayer from "react-player";
import "./PostCarousel.css";

function PostCarousel({ images }) {
  return (
    <div>
      <Carousel interval={null}>
        {images.map((file, index) => (
          <Carousel.Item key={index}>
            {file.metadata.contentType.startsWith("image/") ? (
              // If the file is an image with JPEG, JPG, or PNG type
              <img
                src={file.url}
                alt={`Image ${index}`}
                style={{ height: "700px", width: "100%" }}
              />
            ) : file.metadata.contentType.startsWith("video/") ? (
              // If the file is a video with MP4 or MOV type
              <ReactPlayer
                url={file.url}
                controls={true}
                height="700px"
                width="100%"
                className="video-player"
              />
            ) : null}
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default PostCarousel;
