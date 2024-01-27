import React, { useRef, useState } from "react";

const VideoThumbnailComponent = ({ posterImage, videoSource }) => {
  const videoThumbnailRef = useRef(null);
  const [isVideoHovered, setIsVideoHovered] = useState(false);

  const handleVideoThumbnailHover = () => {
    setIsVideoHovered(true);
    if (videoThumbnailRef.current) {
      videoThumbnailRef.current.play().catch((error) => {
        console.error("Error playing video:", error);
      });
    }
  };

  const handleVideoThumbnailLeave = () => {
    if (videoThumbnailRef.current) {
      // Pause the video and reset currentTime
      videoThumbnailRef.current.pause();
      videoThumbnailRef.current.currentTime = 0;
      setIsVideoHovered(false);
    }
  };

  return (
    <div
      className="thumbnail-container"
      style={{
        width: "480px",
        height: "270px",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={handleVideoThumbnailHover}
      onMouseLeave={handleVideoThumbnailLeave}
    >
      <video
        ref={videoThumbnailRef}
        className={`thumbnail-video ${isVideoHovered ? "active" : ""}`}
        poster={posterImage}
        preload="metadata"
        muted
        loop
        autoPlay={isVideoHovered}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0",
          left: "0",
          opacity: isVideoHovered ? "1" : "0",
          transition: "opacity 0.5s ease", // Adjusted the transition duration
        }}
      >
        {videoSource && <source src={videoSource} type="video/mp4" />}
        Your browser does not support the video tag.
      </video>
      <img
        className={`img-responsive transition-opacity duration-600 ${
          isVideoHovered ? "opacity-0" : "opacity-100"
        }`}
        src={posterImage}
        alt="Video Thumbnail"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0",
          left: "0",
        }}
      />
    </div>
  );
};

export default VideoThumbnailComponent;
