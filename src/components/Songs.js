import React, { Component } from 'react';
import '.././css/Songs.css'

class Songs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hoverSongIndex: null
    };
  }

  /* Removes unnecessary characters on date
    retrieved from the Spotify API*/
  parseDate(string) {
    let newString = string.slice(0, 10);
    return (<p>{newString}</p>);
  }

  /* Set state to keep track of which song is being hovered over.
    Determines which song the play icon should be displayed next to.*/
  onSongHover(index) {
    console.log(`You hovered over song: ${index}`);
    this.setState({ hoverSongIndex: index });
  }

  /* Sets hoverSongIndex to null when the user stops hovering over a song. */
  onSongHoverExit(index) {
    this.setState({ hoverSongIndex: null });
  }

  /* Conditional rendering of the play icon. Only renders when
     hoverSongIndex matches the index of the song being hovered
     over. */
  playIconOnHover(index) {
    if(this.state.hoverSongIndex === index) {
      return(
        <div className="songs-js-play-icon">
          <i className="far fa-play-circle"></i>
        </div>
      );
    }
  }

  render(){
    return(
      <div className="song-root-container">
        <ul className="song-headers">
          <li>Title</li>
          <li>Artist</li>
          <li>Date Added</li>
        </ul>
        <ul className="song-list">
          {
            this.props.tracks
            ?
            (this.props.tracks.items.map((trackData, index) =>
              <li
                key={index}
                className="song-items"
                onMouseEnter={ () => this.onSongHover(index) }
                onMouseLeave={ () => this.onSongHoverExit(index) }
              >
                { this.playIconOnHover(index) }
                <div className="song-title">
                  <p>{trackData.track.name}</p>
                </div>
                <div className="artist-name">
                  <p>{trackData.track.artists[0].name}</p>
                </div>
                <div className="date-added">
                  {this.parseDate(trackData.added_at)}
                </div>
              </li>
          ))
            :
            (<h4 className="loading">Loading....</h4>)
          }
        </ul>
      </div>
    );
  }
}

export default Songs;
