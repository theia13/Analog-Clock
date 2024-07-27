import { useState, useEffect } from "react";

export default function Clock() {
  const [currenttime, setCurrentTime] = useState(new Date());

  const [currentMode, setcurrentMode] = useState("dark");

  const handleClick = () => {
    setcurrentMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
    console.log("Body was clicked");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    document.body.addEventListener("click", handleClick);

    return () => {
      clearInterval(interval);
      document.body.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    document.body.className = currentMode;
  }, [currentMode]);

  const hours = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const seconds = currenttime.getSeconds() * 6;
  const minutes = currenttime.getMinutes() * 6;
  const hourstime = currenttime.getHours() * 30;

  return (
    <>
      <div className="clock">
        <div className={`marks ${currentMode}`} onClick={handleClick}>
          <div className="hour-mark"></div>
          <div className="hour-mark"></div>
          <div className="hour-mark"></div>
          <div className="hour-mark"></div>
          <div className="hour-mark"></div>
          <div className="hour-mark"></div>
          <div className="hour-mark"></div>
          <div className="hour-mark"></div>
          <div className="hour-mark"></div>
          <div className="hour-mark"></div>
          <div className="hour-mark"></div>
          <div className="hour-mark"></div>
        </div>
        <div className={`clock-frame ${currentMode}`} onClick={handleClick}>
          {hours.map((hour, index) => (
            <div
              key={index}
              className={`hours ${currentMode}`}
              onClick={handleClick}
            >
              {hour}
            </div>
          ))}
        </div>
        <div
          className={`hour-hand ${currentMode}`}
          onClick={handleClick}
          style={{ transform: `rotate(${hourstime}deg) translateX(-50%)` }}
        ></div>
        <div
          className={`minute-hand ${currentMode}`}
          onClick={handleClick}
          style={{
            transform: `rotate(${minutes}deg) translateX(-50%)`,
          }}
        ></div>
        <div
          className="second-hand"
          style={{
            transform: `rotate(${seconds}deg) translateX(-40%)`,
          }}
        ></div>
        <div className="center-dot"></div>
      </div>
    </>
  );
}
