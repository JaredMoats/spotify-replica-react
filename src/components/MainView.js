import React, { Component } from 'react';
import Songs from './Songs';
import PlayerBar from './PlayerBar';
import '../css/MainView.css';

class MainView extends Component {
  render() {
    return(
      <div className="main-view">
        <Songs
          tracks={ this.props.tracks }
        />
        <PlayerBar
          songIsPlaying={ this.props.songIsPlaying }
        />
      </div>
    );
  }
}

export default MainView;
