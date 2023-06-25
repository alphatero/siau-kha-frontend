import { useState, useEffect } from 'react';

type PropsType = {
  currentTableTime: string;
};

export const TableCountdown = (props: PropsType) => {
  const { currentTableTime } = props;
  const [time, setTime] = useState(currentTableTime);

  const getTime = (propsTime: string): string => {
    const [min, sec] = propsTime.split(':');
    const minNum = Number(min);
    const secNum = Number(sec);

    if (secNum === 59) {
      return `${minNum + 1}:00`;
    }
    if (secNum < 10) {
      return `${minNum}:0${secNum + 1}`;
    }
    return `${minNum}:${secNum + 1}`;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (time === '00:00' || !time) {
        setTime('00:00');
        return;
      }
      setTime(getTime(time));
    }, 1000);
    return () => clearInterval(timer);
  }, [time]);

  return (
    <>{time}</>
  );
};

export default TableCountdown;
