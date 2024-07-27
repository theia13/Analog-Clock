import { useState, useEffect } from "react";

export default function Clock() {
  const [currenttime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const seconds = currenttime.getSeconds() * 6;
  const minutes = currenttime.getMinutes() * 6;
  const hourstime = currenttime.getHours() * 30;

  // console.log(seconds);
  // console.log(minutes);
  // console.log(currenttime)
  // console.log(hourstime);

  return (
    <>
      <div className="clock">
        <div className="marks">
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
        <div className="clock-frame">
          {hours.map((hour, index) => (
            <div key={index} className="hours">
              {hour}
            </div>
          ))}
        </div>
        <div
          className="hour-hand"
          style={{ transform: `rotate(${hourstime}deg) translateX(-50%)` }}
        ></div>
        <div
          className="minute-hand"
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
