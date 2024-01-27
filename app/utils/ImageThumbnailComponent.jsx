// ImageThumbnailComponent.jsx
import React from "react";

const ImageThumbnailComponent = ({ src, onClick }) => (
  <div className="thumbnail-container">
    <img
      src={src}
      className="img-responsive my-2 cursor-pointer hover-zoom"
      alt="Thumbnail"
      onClick={onClick}
    />
  </div>
);

export default ImageThumbnailComponent;
