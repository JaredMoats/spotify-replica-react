export function fetchMe() {
  /* Fetch the user's data (using Me endpoint)*/
  /*fetch('https://api.spotify.com/v1/me', {
    headers: {'Authorization': 'Bearer ' + accessToken}
  }).then(response => response.json())
    .then(data => {
      this.setState({
      displayName: data.display_name
    });
    console.log(`Hey, ${data.display_name}`);
  })*/
  console.log(`Fetch Me Successfully Triggered`);
}
