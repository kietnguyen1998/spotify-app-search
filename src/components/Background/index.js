import "./background.css";
import { useEffect, useRef } from "react";

import bgVideo from "../../assets/video/bg-video.mp4";

export default function Background() {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.playbackRate = 0.6;
  }, []);

  return (
    <video ref={videoRef} autoPlay muted loop className="background-video">
      <source src={bgVideo} type="video/mp4" />
    </video>
  );
}
