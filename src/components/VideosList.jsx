import React, { Component } from "react";
import VideoItem from "./VideoItem";

class VideosList extends Component {
  handleSelectedVideo = (selectedVideo) => {
    this.props.onVideoSelect(selectedVideo);
  };

  render() {
    return (
      <div className="ui relaxed divided list">
        {this.props.videos.map((v) => (
          <VideoItem
            key={v.id.videoId}
            video={v}
            onVideoSelect={this.handleSelectedVideo}
          />
        ))}
      </div>
    );
  }
}

export default VideosList;
