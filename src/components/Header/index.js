import "./header.css";

import queryString from "query-string";
import { useLocation, useNavigate } from "react-router-dom";

import Logo from "../Logo";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getArtistAsync } from "../../store/artist/action";
import { getTrackAsync } from "../../store/track/action";

export default function Header() {
  const location = useLocation();
  const initSearchString = queryString.parse(location.search).q;
  const [searchString, setSearchString] = useState(initSearchString);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (searchString) {
      navigate(`/search?q=${searchString}`);
    } else {
      return;
    }
  }

  useEffect(() => {
    if (searchString === "") {
      setSearchString("");
      navigate(`/search`);
    }
  }, [searchString]);

  useEffect(() => {
    if (initSearchString) {
      dispatch(getArtistAsync(initSearchString));
      dispatch(getTrackAsync(initSearchString));
    }
  }, [initSearchString]);

  return (
    <div className="header ">
      <Logo />
      <div className="header__search">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            className="header__search-input"
            placeholder="Search track or artist"
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
          />
        </form>

        <i className="fa-solid fa-magnifying-glass header__search-icon"></i>
      </div>

      {/* <button onClick={handleDispatch}>nhan vao day</button> */}
    </div>
  );
}
