import "./logo.css";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link className="logo" to="/">
      <div className="">
        <img src={logo} alt="" className="logo-img" />
      </div>
      <h1 className="logo-text">Spotify App</h1>
    </Link>
  );
}
