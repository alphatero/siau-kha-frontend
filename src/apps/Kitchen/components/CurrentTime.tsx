import { useEffect, useState } from 'react';

export const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString(
        [],
        { hour: '2-digit', minute: '2-digit', hour12: false },
      ));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <span>{currentTime}</span>
  );
};

export default CurrentTime;
