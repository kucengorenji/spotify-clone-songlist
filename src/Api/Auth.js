export const authSpotify = () => {
    const API_ENDPOINT = "https://accounts.spotify.com/authorize";
    const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
    const REDIRECT_URI = process.env.REACT_APP_BASE_URL;
    const SCOPE = 'playlist-modify-private';
    return window.location = `${API_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=token&show_dialog=true`;
  };
  
export const SpotifyAccessToken = () => {
    const urlSearchParams = new URLSearchParams(window.location.hash);
    const Token = urlSearchParams.get('#access_token');
    return { Token };
  };