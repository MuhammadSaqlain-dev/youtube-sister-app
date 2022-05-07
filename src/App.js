import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import youtube from "./apis/youtube";
import VideosList from "./components/VideosList";
import FeatureVideo from "./components/FeatureVideo";

class App extends Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.handleWhenSubmit("Rockets");
  }

  handleWhenSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  handleSelectedVideo = (v) => {
    this.setState({ selectedVideo: v });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar runWhenSubmit={this.handleWhenSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <FeatureVideo video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideosList
                videos={this.state.videos}
                onVideoSelect={this.handleSelectedVideo}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
