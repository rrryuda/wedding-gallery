// React
import React, { useEffect, useState } from 'react';

// CSS
import './css/Timer.css';

// Timer
const Timer = () => {
  const [daysLeft, setDaysLeft] = useState('');

  useEffect(() => {

    // Target date based on Seoul time
    const targetDate = new Date('2025-06-12T00:00:00+09:00');
    const calculateDaysLeft = () => {
      const now = new Date();
      const timeDiff = targetDate - now;
      const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

      // If the remaining days are positive, prepend '-', if negative, prepend '+'
      // This part was modified
      return (days >= 0 ? "-" : "+") + Math.abs(days);
    };

    setDaysLeft(calculateDaysLeft());

    // Refresh every 24 hours
    const intervalId = setInterval(() => {
      setDaysLeft(calculateDaysLeft());
    }, 1000 * 60 * 60 * 24);

    // Clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="timer">
      {daysLeft.split('').map((char, index) => (
        <span key={index}>{char}</span>
      ))}
      <span>일</span>
    </div>
  );
}

export default Timer;