import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import SearchBar from '../Components/SearchBar';
import PlaylistForm from '../Components/PlaylistForm';
import Tracks from '../Components/Tracks'
import data from '../Api/sample-data';
import {
    getProfile,
    getTracks,
    postPlaylist,
    postPlaylistTracks,
  } from '../Api/Spotify';
import { Container, Box } from "@chakra-ui/react";
import { storeUser } from '../store/auth';

export default function HomePage(props) {
  const user = useSelector(state => state.auth.user)
  const dispatch = useDispatch()
  const [tracks, setTracks] = useState(data)
  const [selectedTracks, setSelectedTracks] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [form, setForm] = useState({
    title: '',
    description: '',
  })

  useEffect(() => {
    getProfile(props.accessToken).then(user => dispatch(storeUser(user)))
  }, 
  // eslint-disable-next-line
  [])

  const handleFormChanges = event =>
    setForm({ ...form, [event.target.name]: event.target.value })

  const handleSelect = uri => {
    if (selectedTracks.includes(uri)) {
      let newTracks = selectedTracks.filter(track => track !== uri)
      setSelectedTracks(newTracks)
    } else {
      setSelectedTracks([...selectedTracks, uri])
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    postPlaylist(props.accessToken, user.id, {
      name: form.title,
      description: form.description,
      public: false,
    }).then(playlist => {
      return postPlaylistTracks(props.accessToken, playlist.id, {
        uris: selectedTracks
      })
    }).then(() => {
      setSelectedTracks([])
      alert('Playlist created')
    })
  }

  const handleSearch = query => {
    setIsLoading(true)
    getTracks(props.accessToken, {
      query,
      type: 'track',
      limit: 10,
    }).then(res => {
      setTracks(res.tracks.items)
      setIsLoading(false)
    })
  }

  return (
    <Container maxW="container.lg">
      <SearchBar handleSearch={handleSearch} />
        <PlaylistForm
          form={form}
          handleSubmit={handleSubmit}
          handleFormChanges={handleFormChanges}
        />

          {isLoading ? (
            <h3>Loading...</h3>
          ) : (
            tracks.map(track => {
              const isSelected = selectedTracks.includes(track.uri)
              return (
                <Box>
                  <Tracks
                    track={track}
                    handleSelect={handleSelect}
                    isSelected={isSelected}
                    key={track.id}
                  />
                </Box>
              )
            })
          )};
    </Container>
  )
};