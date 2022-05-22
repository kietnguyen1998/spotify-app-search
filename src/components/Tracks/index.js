import "./tracks.css";
import { useSelector } from "react-redux";

export default function Tracks() {
  const tracks = useSelector((state) => state.Tracks.tracks.tracks);
  // console.log("tracks trong tracks", tracks);
  const tracksLimit = tracks?.limit;

  const tracksSlice =
    tracks?.items.length > 8 ? tracks?.items.slice(0, 8) : tracks?.items;

  return (
    <div className="row">
        {tracksSlice ? (
          tracksSlice.map((track, index) => {
            return (
              <div className="col col-6" key={index}>
                <div>
                  <img src={""} alt="" />
                </div>
                <div className="track-information">
                  <p>{track.name}</p>
                  <p>Ten tac gia</p>
                  <audio controls src={track.preview_url}></audio>
                </div>
              </div>
            );
          })
        ) : (
          <p>Deu co ket qua nao</p>
        )}
      </div>
  );
}
