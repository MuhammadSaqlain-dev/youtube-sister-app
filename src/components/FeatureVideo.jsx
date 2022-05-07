import React from "react";

const FeatureVideo = ({ video }) => {
  if (!video) return;
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe
          title="Embed Video"
          src={videoSrc}
          width="800"
          height="430"
        ></iframe>
      </div>
      <div className="ui segment">
        <div className="ui content">
          <div className="ui header">{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
        </div>
      </div>
    </div>
  );
};

export default FeatureVideo;
