/* eslint-disable @next/next/no-img-element */
import { useGameStatus, useGameTime } from "@/useGameStore";
import { useEffect, useState } from "react";

interface Stopwatch {
  elapsedTime: number;
  startTime: number;
  intervalId: any;
}
const stopwatch: Stopwatch = { elapsedTime: 0, startTime: 0, intervalId: {} };

export default function NavBar(): JSX.Element {
  const [timerValue, setTimerValue] = useState<string>("00:00:00");

  const gameStatus = useGameStatus((state) => state.gameStatus);
  const setGameTime = useGameTime((state) => state.setGameTime);

  function timer(): void {
    stopwatch.startTime = Date.now();
    let elapsedTime: number;
    let milliseconds: number;
    let seconds: number;
    let minutes: number;

    stopwatch.intervalId = setInterval(() => {
      elapsedTime = Date.now() - stopwatch.startTime + stopwatch.elapsedTime;

      milliseconds = Math.floor(Number((elapsedTime % 1000) / 10));
      seconds = Math.floor(Number((elapsedTime / 1000) % 60));
      minutes = Math.floor(Number((elapsedTime / (1000 * 60)) % 60));

      const leadZeroTime = [minutes, seconds, milliseconds]
        .map((time) => (time < 10 ? `0${time}` : time))
        .join(":");
      setTimerValue(leadZeroTime);
    }, 10);
  }

  useEffect(() => {
    if (gameStatus === "playing") timer();
    else {
      setGameTime(timerValue);
      clearInterval(stopwatch.intervalId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameStatus]);

  return (
    <div className="bg-black fixed top-0 w-full flex justify-center py-2 gap-8 z-10">
      {timerValue}
    </div>
  );
}
