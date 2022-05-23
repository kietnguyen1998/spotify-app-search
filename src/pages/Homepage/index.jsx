import "./homepage.css";

import { useEffect, useRef, useState } from "react";
import Logo from "../../components/Logo";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const [isShowIconGo, setIsShowIconGo] = useState(false);
  const [searchString, setSearchString] = useState("");

  const inputRef = useRef(null);
  const navigate = useNavigate();

  function navigateToDashboard() {
    if (searchString !== "") {
      navigate("/search?q=" + searchString);
    }
  }
  useEffect(() => {
    inputRef.current.focus();
    if (searchString !== "") {
      setIsShowIconGo(true);
    } else {
      setIsShowIconGo(false);
    }
  }, [searchString]);

  return (
    <div className="homepage">
      <div className="pt-5">
        <Logo />
      </div>

      <div className="homepage-input-wrapper">
        <form onSubmit={navigateToDashboard}>
          <input
            ref={inputRef}
            type="text"
            className="homepage-input"
            placeholder="Enter artist name"
            onChange={(e) => setSearchString(e.target.value)}
          />
        </form>
      </div>

      <div className="homepage-icon-go-wrapper">
        {isShowIconGo && (
          <i
            className="fa-solid fa-right-to-bracket homepage-icon-go animate__heartBeat animate__headShake animate__repeat-5"
            onClick={navigateToDashboard}
          ></i>
        )}
      </div>
    </div>
  );
}
