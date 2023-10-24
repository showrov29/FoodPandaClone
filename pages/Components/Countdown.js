import React, { useState, useEffect } from 'react';

export default function Countdown() {
  const [minutes, setMinutes] = useState(30);
  const [seconds, setSeconds] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (minutes === 5 && seconds === 0) {
        setShowMessage(true);
        clearInterval(countdownInterval);
      } else if (minutes === 0 && seconds === 0) {
      } else {
        if (seconds === 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          setSeconds(seconds - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, [minutes, seconds]);

  return (
    <div>
      {showMessage ? (
        <div>Just around the corner!</div>
      ) : (
        <div>
          <span>
            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
          </span>
        </div>
      )}
    </div>
  );
}
