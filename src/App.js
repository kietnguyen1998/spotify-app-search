import "react-spotify-auth/dist/index.css";
import "animate.css";
import "./App.css";

import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Cookies from "js-cookie";
import { SpotifyApiContext } from "react-spotify-api";
import { SpotifyAuth, Scopes } from "react-spotify-auth";
import Background from "./components/Background";
import Dashboard from "./pages/Dashboard";

import Homepage from "./pages/Homepage";

function App() {
  const navigate = useNavigate();
  const [token, setToken] = useState(Cookies.get("spotifyAuthToken"));

  // console.log('token trong app', token)

  useEffect(() => {
    navigate("/");
  }, []);

  return (
    <div className="App">
      {token ? (
        <div className="animate__animated animate__backInDown">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/search" element={<Dashboard />} />
          </Routes>
        </div>
      ) : (
        <div className="login">
          <SpotifyAuth
            redirectUri="http://localhost:3000"
            clientID={process.env.REACT_APP_CLIENT_ID}
            scopes={[Scopes.userReadPrivate, "user-read-email"]}
            onAccessToken={(token) => setToken(token)}
          />
        </div>
      )}

      <Background />
    </div>
  );
}

export default App;
