import React, { Component } from 'react';
import Playlists from './components/Playlists';
import MainView from './components/MainView';
import queryString from 'query-string';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      displayName: '',
      playlists: null,
      tracks: null,
      activePlaylist: "",
      activePlaylistIndex: null,
      activeAlbumImage: null,
      activeTrack: null
    };
  }

  componentDidMount() {
    let accessToken = this.getAccessToken();

    this.fetchMe(accessToken);
    this.fetchPlaylists(accessToken);
  }//end of componentDidMount

  /* Receives data from Spotify's "Me" endpoint */
  fetchMe(accessToken) {
    /* Fetch the user's data (using Me endpoint)*/
    fetch('https://api.spotify.com/v1/me', {
      headers: {'Authorization': 'Bearer ' + accessToken}
    }).then(response => response.json())
      .then(data => {
        this.setState({
        displayName: data.display_name
      });
      console.log(`Hey, ${data.display_name}`);
    })
  }

  /* Receives data from Spotify's playlists endpoint */
  fetchPlaylists(accessToken) {
    fetch('https://api.spotify.com/v1/me/playlists', {
      headers: {'Authorization': 'Bearer ' + accessToken}
    }).then(response => response.json())
      .then(playlistData => {
        console.log('From fetchPlaylists(): Data from playlists: ');
        console.log(playlistData);
        this.setState({
          playlists: playlistData
        });
      })
  }// end of fetchPlaylists

  getAccessToken(){
    /* Retrive access token after user logs in (contained in URL) */
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;

    return accessToken;
  }

  /* Retrieves a playlist's tracks after the playlist is chosen.  */
  getTracks() {
    console.log('getTracks() triggered')

    let accessToken = this.getAccessToken();

    /* Wait 100ms for activePlaylist state to update */
    setTimeout(() => {
      let theTrackId = 'https://api.spotify.com/v1/playlists/' + this.state.activePlaylist + '/tracks';

      fetch(theTrackId, {
        headers: {'Authorization': 'Bearer ' + accessToken}
      }).then(response => response.json())
        .then(trackData => {
          console.log('From getTracks(): Tracks data: ');
          console.log(trackData);

          this.setState({tracks: trackData});
      })
    }, 100);

    /*let myTrackId = this.state.playlists.items[0].id;
    console.log('From getTracks(): Your playlist id: ' + myTrackId);*/
  }

  /* Attached to the playlists in the Playlists component. Keeps
  track of the playlist id the user wants to see.*/
  setActivePlaylist(playlist, index) {
    this.setState({activePlaylist: playlist.id, activePlaylistIndex: index, test: index});

    /* Called after the active playlist is setState */
    this.getTracks();
  }

  logPlaylistData() {
    console.log(`From logPlaylistData(): ${this.state.playlists}`);
  }

  render() {

    return (
      <div className="App">
        {
          this.state.playlists
          ?
          <Playlists
            activePlaylist={ this.state.activePlaylist }
            activePlaylistIndex={ this.state.activePlaylistIndex }
            setActivePlaylist={ (playlist, index) => this.setActivePlaylist(playlist, index) }
            playlists={ this.state.playlists }
          />
          :
          <h4>Loading...</h4>
        }
        <MainView
          tracks={ this.state.tracks }
        />
      </div>
    );
  }
}

export default App;
