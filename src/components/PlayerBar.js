import React, { Component } from 'react';
import '../css/PlayerBar.css';

class PlayerBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playHover: false,
      pauseHover: false
    };
  }

    render() {
      return(
        <div className="player-bar-container">
          <div className="buttons-container">
            <div className="player-bar-styles backward-forward">
              <i className="fas fa-step-backward"></i>
            </div>
              {
                this.props.songIsPlaying
                ?
                (
                  <div className="player-bar-styles play-pause">
                    <i className="far fa-pause-circle"></i>
                  </div>
                )
                :
                (
                  <div className="player-bar-styles play-pause">
                    <i className="far fa-play-circle"></i>
                  </div>
                )
              }
              <div className="player-bar-styles backward-forward">
                <i className="fas fa-step-forward"></i>
              </div>
          </div>
          <div className="volume-slider-container">
            <input id="volume-slider" type="range" min="0" max="100" step="1" />
          </div>
        </div>
      );
    }
}

export default PlayerBar;
