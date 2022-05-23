import "./artists.css";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";

import defaultAvatar from "../../assets/img/defaultAvatar.png";
import { getTrackAsync } from "../../store/track/action";

export default function Artists() {
  const dispatch = useDispatch();
  const token = Cookies.get("spotifyAuthToken");
  const artists = useSelector((state) => state.Artists.artists.artists);
  const artistsSlice =
    artists?.items.length > 8 ? artists?.items.slice(0, 8) : artists?.items;
  return (
    <div className="row">
      {artistsSlice &&
        artistsSlice.map((artist, index) => {
          let genreArr =
            artist.genres.length > 3
              ? artist.genres.slice(0, 3)
              : artist.genres;
          return (
            <div
              onClick={() => {
                dispatch(getTrackAsync(artist.id, token));
                window.scrollTo(0, 1000);
              }}
              className="col col-3 mb-4"
              key={index}
            >
              <div className="artist">
                <div className="artist__infomation">
                  <p className="artist__name">{artist.name}</p>
                  <span className="artist__follower">
                    Followers: {artist.followers.total}
                  </span>
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
