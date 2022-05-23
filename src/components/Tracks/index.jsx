import "./tracks.css";
import { useSelector } from "react-redux";

export default function Tracks() {
  const tracks = useSelector((state) => state.Tracks.tracks.tracks);

  const tracksSlice = tracks?.length > 10 ? tracks?.slice(0, 8) : tracks;

  return (
    <>
      <h1>Top tracks</h1>
      <div className="row text-center">
        {tracksSlice ? (
          tracksSlice.map((track, index) => {
            return (
              <div className="col col-6" key={index}>
                <div>
                  <img src={""} alt="" />
                </div>
                <div className="track-information">
                  <p className="fs-4">{track.name}</p>

                  <audio controls src={track.preview_url}></audio>
                </div>
              </div>
            );
          })
        ) : (
          <p>No match result</p>
        )}
      </div>
    </>
  );
}
