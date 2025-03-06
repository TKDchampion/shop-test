import { useState, useEffect, FC } from "react";

const CountdownTimer: FC = () => {
  const countdownDuration = 8 * 60 * 60 * 1000;

  const [timeLeft, setTimeLeft] = useState(countdownDuration);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1000) {
          return countdownDuration;
        }
        return prevTime - 1000;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = String(Math.floor(timeLeft / (1000 * 60 * 60))).padStart(
    2,
    "0"
  );
  const minutes = String(
    Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, "0");
  const seconds = String(Math.floor((timeLeft % (1000 * 60)) / 1000)).padStart(
    2,
    "0"
  );

  return (
    <div className="flex mt-4 items-center space-x-4 text-white font-bold text-6xl">
      <div className="text-center">
        <span>{hours}</span>
        <div className="text-sm font-medium tracking-wide">HOURS</div>
      </div>
      <span className="text-6xl">:</span>
      <div className="text-center">
        <span>{minutes}</span>
        <div className="text-sm font-medium tracking-wide">MINUTES</div>
      </div>
      <span className="text-6xl">:</span>
      <div className="text-center">
        <span>{seconds}</span>
        <div className="text-sm font-medium tracking-wide">SECONDS</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
