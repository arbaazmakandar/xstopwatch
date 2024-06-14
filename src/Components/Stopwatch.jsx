import React, { useEffect, useState, useRef } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState({ minutes: 0, seconds: 0 });
  const [startStopButton, setStartStopButton] = useState(true);
  const interval = useRef();

  useEffect(() => {
    return () => clearInterval(interval.current);
  }, []);

  const handleStartStop = () => {
    setStartStopButton(!startStopButton);

    if (startStopButton) {
      interval.current = setInterval(() => {
        setTime((prev) =>
          prev.seconds < 59
            ? { minutes: prev.minutes, seconds: prev.seconds + 1 }
            : { minutes: prev.minutes + 1, seconds: 0 }
        );
      }, 1000);
    } else {
      clearInterval(interval.current);
    }
  };
  const handleReset = () => {
    clearInterval(interval.current);
    setTime({ minutes: 0, seconds: 0 });
  };
  return (
    <div>
      <h2>Stopwatch</h2>
      <div>
        Time: {time.minutes}:{""}
        {time.seconds.toString().length < 2 ? "0" + time.seconds : time.seconds}
      </div>
      <div style={{ padding: "20px" }}>
        <button onClick={handleStartStop}>
          {startStopButton ? "Start" : "Stop"}
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
