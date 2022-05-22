import "./artists.css";
import { useSelector } from "react-redux";

import defaultAvatar from "../../assets/img/defaultAvatar.png";

export default function Artists() {
  const artists = useSelector((state) => state.Artists.artists.artists);
  const artistsSlice =
    artists?.items.length > 8 ? artists?.items.slice(0, 8) : artists?.items;
  return (
    <div className="row">
      {artistsSlice &&
        artistsSlice.map((artist, index) => {
          console.log("artist", artist);
          let genreArr =
            artist.genres.length > 3
              ? artist.genres.slice(0, 3)
              : artist.genres;
          return (
            <div className="col col-3 mb-4" key={index}>
              <div className="artist">
                <div className="artist__infomation">
                  <p className="artist__name">{artist.name}</p>
                  <div className="artist__genres">
                    {genreArr.map((genre, index) => (
                      <span key={index} className="artist__genre-item">
                        {genre}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="artist_image">
                  <img src={artist?.images[1]?.url || defaultAvatar} />
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
