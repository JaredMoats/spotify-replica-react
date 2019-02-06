import React, { Component } from 'react';
import '.././css/Songs.css'

class Songs extends Component {
  constructor(props) {
    super(props);
  }

  parseDate(string) {
    let newString = string.slice(0, 10);
    return (<p>{newString}</p>);
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
              <li key={index} className="song-items">
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
            (<h4>Loading....</h4>)
          }
        </ul>
      </div>
    );
  }
}

export default Songs;
