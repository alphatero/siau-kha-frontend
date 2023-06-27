import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

export const getTimeDifference = (inputTime: string): string => {
  const now = dayjs();

  // Parse inputTime into a dayjs object with current date
  const hour = parseInt(inputTime.split(':')[0], 10);
  const minute = parseInt(inputTime.split(':')[1], 10);
  const timeObj = now.hour(hour).minute(minute);

  // Calculate the difference in milliseconds
  const diff = now.diff(timeObj);

  // Use the duration plugin to convert the difference into hours and minutes
  const durationObj = dayjs.duration(Math.abs(diff));

  // Format the duration as "HH:mm"
  const formattedDiff = `${durationObj.hours().toString().padStart(2, '0')}:${durationObj.minutes().toString().padStart(2, '0')}`;

  return formattedDiff;
};

export default getTimeDifference;
