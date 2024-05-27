import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

const EST = 'America/Montreal';
const ONE_DAY = 24 * 60 * 60 * 1000;

export const formatEventDate = (start: number, end: number, short = false) => {
  const startTime = dayjs.unix(start).tz(EST);
  const endTime = dayjs.unix(end).tz(EST);
  const diff = end - start;

  if (diff > ONE_DAY) {
    const formatString = short ? 'ddd MMM D h:mm A' : 'ddd MMM D h:mm';
    const startFormatted = startTime.format(formatString);

    if (short) {
      return startFormatted;
    }

    const endFormatted = endTime.format(formatString);

    return `${startFormatted} - ${endFormatted}`;
  }

  const startFormatted = startTime.format('ddd MMM D h:mm A');
  const endFormatted = endTime.format('h:mm A');

  return `${startFormatted} - ${endFormatted}`;
};
