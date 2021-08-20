import Link from "../../Link";
import style from "./style.module.css";


const Track = ({track}) => {
  const artists = track.artists.map((artist, index) => {
      const isLast = index === track.artists.length - 1;
      return (
        <Link to={artist.external_urls.spotify} key={artist.id}>
          {isLast ? artist.name : `${artist.name}, `}
        </Link>
      );
    });

    const image = track.album.images.find(image => image.width === 64)

    return (
    <li className={style.wrapper}>
      <img className={style.image} src={image.url} alt="" />
      <div className={style.info}>
        <a href="/#" className={style.title}>
          {track.name}
        </a>
        <p className={style.artist}>{artists}</p>
      </div>
      <div className={style.action}>
        <button><Link to={track.external_urls.spotify} isExternal>Play on Spotify</Link></button>
      </div>
    </li>
  );
};

export default Track;
