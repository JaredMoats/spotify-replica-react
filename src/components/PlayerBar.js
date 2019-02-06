import React, { Component } from 'react';
import '../css/PlayerBar.css';

class PlayerBar extends Component {
    render() {
      return(
        <div className="player-bar-container">
          <span className="backward"></span>
          <span className="play"></span>
          <span className="forward"></span>
        </div>
      );
    }
}

export default PlayerBar;
