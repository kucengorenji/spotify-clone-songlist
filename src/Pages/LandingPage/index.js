import { getAuthUrl } from "../../Utils/spotify";

export default const LandingPage = () => {
    const spotifyAuthUrl = getAuthUrl()
    return (
      <div style={{ textAlign: 'center' }}>
        <p>
          Before using the app, pwease login to Spotify
          <Link to={spotifyAuthUrl}>
            <span style={{ color: 'white' }}> here</span>
          </Link>
          .
        </p>
      </div>
    )
  }