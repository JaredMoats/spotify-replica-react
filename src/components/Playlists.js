import React, { Component } from 'react';
import '../css/playlists.css';

class Playlists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activePlaylist: null
    };
  }

  render() {
    const {playlists} = this.props;

    return(
      <div className='playlists'>
        <h4 id='playlist-label'>Playlists</h4>
        {this.props.playlists
          ?
          (this.props.playlists.items.map((playlist, index)=>
            <a
              href="#"
              onClick={() => this.props.setActivePlaylist(playlist, index)}
            >
              <h4
              key={playlist.id}
              className={this.props.activePlaylistIndex === index ? "active" : ""}
              >
                {playlist.name}
              </h4>
            </a>
          ))
          :
          (<h4>Loading playlists...</h4>)
        }
      </div>
    );
  }
}

export default Playlists;
