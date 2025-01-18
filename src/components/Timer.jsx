import React, { useEffect, useState } from 'react'; 

const Timer = ({ duration, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(duration); // State to keep track of remaining time

  useEffect(() => {
    // Set an interval to update the time every second
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // If time is up (0 or less), clear the interval and call the onTimeUp callback
          clearInterval(timer);
          onTimeUp(); // Trigger the callback when time is up
          return 0; // Set the time left to 0
        }
        return prev - 1; // Otherwise, decrement the time by 1 second
      });
    }, 1000); // Interval set to 1 second (1000 ms)

    // Cleanup function to clear the interval when the component unmounts or onTimeUp changes
    return () => clearInterval(timer);
  }, [onTimeUp]); // The effect depends on the onTimeUp function (this will re-run if it changes)

  // Function to format the time in MM:SS format
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60); // Calculate the number of minutes
    const seconds = time % 60; // Calculate the number of seconds
    return `${minutes}:${seconds.toString().padStart(2, '0')}`; // Format as MM:SS, with 2 digits for seconds
  };

  return <div className="timer">Time Left: {formatTime(timeLeft)}</div>; 
};

export default Timer; 
