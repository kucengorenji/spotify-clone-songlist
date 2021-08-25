import Login from '../Components/Login';
import HomePage from './Home';
import { useAuth } from '../Api/useAuth'

export default function IndexPage() {

    const { isAuthenticated, accessToken } = useAuth()

    return isAuthenticated ? (
        <HomePage accessToken={accessToken} />
      ) : (
        <Login />
      )
}

