import { useEffect, useState } from "react";
import "./text-loading.css";

export default function TextLoading({
  name = "Search for",
  textDisplay = ["text", "text 2", "text 3"],
}) {
  const [textDisplayIndex, setTextDisplayIndex] = useState(0);

  function handleChangeText() {
    setTextDisplayIndex((pre) => (pre + 1) % textDisplay.length);
  }

  useEffect(() => {
    let timeId;
    if (textDisplay.length > 1) {
      timeId = setInterval(handleChangeText, 2000);
    }

    return () => clearInterval(timeId);
  });

  return (
    <div className="text-loading">
      <p className="text-loading-name">{name}</p>
      <p className="text-loading-symbol">&#91;</p>
      <div className="text-loading-content-wrapper">
        <p className={`text-loading-content`}>
          {textDisplay[textDisplayIndex]}
        </p>
      </div>
      <p className="text-loading-symbol">&#93;</p>
      <p className="text-loading-name ms-3">you want!</p>
    </div>
  );
}
