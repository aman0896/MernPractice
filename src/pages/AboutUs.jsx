import React, { useEffect, useState } from "react";

function AboutUs() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minTimer, setMinTimer] = useState();

  const timeInterval = () => {
    if (seconds > 0) {
      setSeconds(seconds - 1);
    }
    if (seconds === 0) {
      if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
    }
  };

  const onBtnStartClick = () => {
    setMinutes(minTimer);
  };

  useEffect(() => {
    const interval = setInterval(() => timeInterval(), 1000);
    return () => clearInterval(interval);
  }, [seconds, minutes]);

  return (
    <div>
      <h1 className="heading1">Timer</h1>
      <label>min : </label>
      <input
        type="text"
        onChange={(e) => {
          setMinTimer(e.target.value);
        }}
      />

      <button onClick={onBtnStartClick}>Start</button>
      <h2>
        {minutes}m:{seconds}s
      </h2>
    </div>
  );
}

export default AboutUs;
