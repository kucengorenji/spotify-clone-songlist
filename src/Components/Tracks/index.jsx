
import style from './style.module.css'

const Track = ({ track, handleSelect, isSelected }) => {
  const artists = track.artists.map((artist, index) => {
    const isLast = index === track.artists.length - 1
    return (
      <p key={artist.id}>
        {artist.name + (isLast ? '' : ', ')}
      </p>
    )
  })

  const image = track.album.images.find(image => image.width === 64)

  return (
    <div className={style.container}>
      <img className={style.image} src={image.url} alt="" />
      <span className={style.info}>
        <p className={style.title}>{track.name}</p>
        <p className={style.artist}>{artists}</p>
      </span>
      <span>
        <button onClick={() => handleSelect(track.uri)}>
          {isSelected ? 'Deselect' : 'Select'}
        </button>
      </span>
    </div>
  )
}

export default Track
