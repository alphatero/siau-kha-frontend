import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

export const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(dayjs().format('HH:mm'));
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
