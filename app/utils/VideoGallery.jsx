// VideoGallery.jsx
import React from "react";
import VideoThumbnailComponent from "./VideoThumbnailComponent";

const VideoGallery = ({ videoData }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {videoData.map((video, idx) => (
        <VideoThumbnailComponent
          key={video.id}
          posterImage={video.posterImage}
          videoSource={video.videoSource}
        />
      ))}
    </div>
  );
};

export default VideoGallery;
