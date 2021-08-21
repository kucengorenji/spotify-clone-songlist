export const spotifyAuthUrl = () => {
    const endPoint = new URLSearchParams({
        client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
        redirect_uri: 'http://localhost:3000/',
        response_type: 'token',
        scope: 'playlist-modify-private'
    }).toString()
    return `https://accounts.spotify.com/authorize?${endPoint}`
};

export const getProfile = (accessToken) => {
    return fetch(`https://api.spotify.com/v1/me`, {
        headers: { 'Authorization': 'Bearer ' + accessToken }
    }).then(res => res.json())
}

export const getTracks = (accessToken, endPoint) => {
    const params = new URLSearchParams(endPoint).toString()
    return fetch(`https://api.spotify.com/v1/search?${params}`, {
        headers: { 'Authorization': 'Bearer ' + accessToken }
    }).then(res => res.json())
}

export const postPlaylist = (accessToken, userId, payload) => {
    return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken
        },
        body: JSON.stringify(payload)
    }).then(res => res.json())
}

export const postPlaylistTracks = (accessToken, playlistId, payload) => {
    return fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken
        },
        body: JSON.stringify(payload)
    }).then(res => res.json())
}