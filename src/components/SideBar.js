import React, { Component } from 'react';
import Playlists from './Playlists';
import '../css/SideBar.css';

class SideBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="sidebar">
        <a href="#"><h4>Browse</h4></a>
        <Playlists
          activePlaylist={ this.props.activePlaylist }
          activePlaylistIndex={ this.props.activePlaylistIndex }
          getTracks={ () => this.getTracks() }
          setActivePlaylist={ (playlist, index) => this.props.setActivePlaylist(playlist, index) }
          playlists={ this.props.playlists }
        />
      </div>
    );
  }
}

export default SideBar;
