import { useState, useEffect, useCallback } from "react";

const hours = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

export default function Clock() {
  const [currenttime, setCurrentTime] = useState(new Date());

  const handleClick = useCallback(() => {
    const currentTheme = document.body.className.includes("dark")
      ? "dark"
      : "light";

    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    document.body.classList.remove(currentTheme);
    document.body.classList.add(nextTheme);
  }, []);

  useEffect(() => {
    document.body.className = "dark";
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    document.body.addEventListener("click", handleClick);

    return () => {
      clearInterval(interval);
      document.body.removeEventListener("click", handleClick);
    };
  }, [handleClick]);

  const hourstime =
    currenttime.getHours() * 30 + currenttime.getMinutes() * 0.5;
  const minutes = currenttime.getMinutes() * 6;
  const seconds = currenttime.getSeconds() * 6;

  console.log(seconds);
  return (
    <>
      <div className="clock">
        <div className={`marks`} onClick={handleClick}>
          {hours.map((h) => (
            <div key={{ h }} className="hour-mark" />
          ))}
        </div>
        <div className={`clock-frame`}>
          {hours.map((hour, index) => (
            <div key={index} className={`hours`} onClick={handleClick}>
              {hour}
            </div>
          ))}
        </div>
        <div
          className={`hour-hand`}
          style={{
            transform: `rotate(calc(${hourstime}deg + 90deg)) translateX(-50%)`,
          }}
        ></div>
        <div
          className={`minute-hand`}
          style={{
            transform: `rotate(calc(${minutes}deg + 90deg)) translateX(-50%)`,
          }}
        ></div>
        <div
          className="second-hand"
          style={{
            transform: `rotate(calc(${seconds}deg + 90deg)) translateX(-40%)`,
          }}
        ></div>
        <div className="center-dot"></div>
      </div>
    </>
  );
}
