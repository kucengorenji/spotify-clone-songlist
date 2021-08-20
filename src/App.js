import SearchTrack from './Pages/SearchTrack';
import LandingPage from './Pages/LandingPage';

export default function App() {
  return authenticationInfo.isAuthenticated ? (
    <SearchTrack accessToken={authenticationInfo.access_token} />
  ) : (
    <LandingPage />
  )
 }