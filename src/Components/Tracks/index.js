import Track from "./Track";

const Tracks = ({tracks}) => {
  return (
    <div>
      <h1>Tracks</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        { tracks && tracks.map(track => {
          return <Track track={track} key={track.id} />
        })}
      </ul>
    </div>
  );
};

export default Tracks;
