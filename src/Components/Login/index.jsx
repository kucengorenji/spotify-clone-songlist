

import { authSpotify } from '../../Api/Auth';

export default function Login() {
    return(
        <button colorScheme="green" onClick={authSpotify}>Login</button>
    )
}