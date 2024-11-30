"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState({
    hoursRotation: 0,
    minutesRotation: 0,
    secondsRotation: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const htime = now.getHours();
      const mtime = now.getMinutes();
      const stime = now.getSeconds();

      // Calculate rotation
      const hrotation = 30 * htime + mtime / 2;
      const mrotation = 6 * mtime; // Fix: minute hand moves 6 degrees per minute
      const srotation = 6 * stime; // Fix: second hand moves 6 degrees per second

      setTime({
        hoursRotation: hrotation,
        minutesRotation: mrotation,
        secondsRotation: srotation,
      });
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to ensure it only runs once after initial render

  return (
    <div className="flex items-center justify-center min-h-screen bg-yellow-200">
      <div
        id="clockContainer"
        className="relative m-auto h-[40vw] w-[40vw] bg-[url('/clock.png')] bg-no-repeat bg-cover"
      >
        <div
          id="hour"
          style={{ transform: `rotate(${time.hoursRotation}deg)` }}
          className="common w-[1.8%] h-[25%] top-[25%] left-[49.1%]"
        ></div>
        <div
          id="minute"
          style={{ transform: `rotate(${time.minutesRotation}deg)` }}
          className="common w-[1.6%] h-[30%] top-[19%] left-[48.9%]"
        ></div>
        <div
          id="second"
          style={{ transform: `rotate(${time.secondsRotation}deg)` }}
          className="common w-[1%] h-[40%] top-[9%] left-[49.25%]"
        ></div>
      </div>
    </div>
  );
}
