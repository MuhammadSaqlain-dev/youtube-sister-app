import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.runWhenSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label>YoutubeAPI</label>
            <input
              type="text"
              placeholder="Search"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.currentTarget.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
