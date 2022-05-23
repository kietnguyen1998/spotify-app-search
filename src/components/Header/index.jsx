import "./header.css";

import queryString from "query-string";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import Logo from "../Logo";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getArtistAsync } from "../../store/artist/action";

export default function Header() {
  const location = useLocation();

  var initSearchString = queryString.parse(location.search).q;

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
  const token = Cookies.get("spotifyAuthToken");
  useEffect(() => {
    if (initSearchString && token) {
      dispatch(getArtistAsync(initSearchString, token));
    }
  }, [initSearchString, Cookies.get("spotifyAuthToken")]);

  return (
    <div className="header ">
      <Logo />
      <div className="header__search">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            className="header__search-input"
            placeholder="Enter artist name"
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
          />
        </form>

        <i className="fa-solid fa-magnifying-glass header__search-icon"></i>
      </div>
    </div>
  );
}
