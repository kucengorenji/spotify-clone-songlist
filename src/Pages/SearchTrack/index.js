import { useState, useEffect } from "react";
import { getTokenFromUrl, getAuthUrl } from "../../Utils/spotify";

import data from '../../Data/sample'

// import components
import SearchBar from '../../Components/SearchBar'
import Tracks from '../../Components/Tracks'
import Link from '../../Components/Link'


const SearchTrack = props => {
    const auth = getAuthUrl();

    const [authStatus, setAuthStatus] = useState({isAuth: false});
    const [tracks, setTracks] = useState(data);

    const handleSearch = async (query) => {
        const res = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=track`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + authStatus.access_token
            }
        }).then(res => res.json())
        setTracks(res.tracks.items)
    }

    useEffect(() => {
        if (window.location.hash) {
            const newAuthInfo = {isAuth: true, ...getTokenFromUrl(window.location.hash)}
            setAuthStatus(newAuthInfo)
        }
    }, [])

    return authStatus.isAuth ? (
        <div>
            <SearchBar handleSearch={handleSearch} />
            <Tracks tracks={tracks} />
        </div>
    ) : (
        <div style={{ textAlign: 'center' }}>
            <p>Before using the app, pwease login to Spotify <Link to={auth}>here</Link>.</p>
        </div>
    )
}

export default SearchTrack;