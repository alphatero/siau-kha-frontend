import { useState, useEffect } from 'react';

type PropsType = {
  currentTime: string;
};

export const Countdown = (props: PropsType) => {
  const { currentTime } = props;
  const [time, setTime] = useState(currentTime);

  const getTime = (propsTime: string): string => {
    const [min, sec] = propsTime.split(':');
    const minNum = Number(min);
    const secNum = Number(sec);

    if (secNum === 59) {
      return `${minNum + 1}:00`;
    }
    if (secNum < 9) {
      return `${minNum}:0${secNum + 1}`;
    }
    return `${minNum}:${secNum + 1}`;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getTime(time));
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  return (
    <>{time}</>
  );
};

export default Countdown;
