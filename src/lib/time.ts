import { format } from 'date-fns-tz';

const ONE_DAY = 24 * 60 * 60 * 1000;

export const formatEventDate = (start: number, end: number, short = false) => {
  const startDate = new Date(start * 1000);
  const endDate = new Date(end * 1000);

  const diff = endDate.getTime() - startDate.getTime();
  if (diff > ONE_DAY) {
    const formatString = short ? 'eee PP' : 'eee PPp';
    const startFormatted = format(startDate, formatString, {
      timeZone: 'America/Montreal',
    });

    if (short) {
      return startFormatted;
    }

    const endFormatted = format(endDate, formatString, {
      timeZone: 'America/Montreal',
    });

    return `${startFormatted} - ${endFormatted}`;
  }

  const startFormatted = format(startDate, 'eee PPp', {
    timeZone: 'America/Montreal',
  });
  const endFormatted = format(endDate, 'p', { timeZone: 'America/Montreal' });

  return `${startFormatted} - ${endFormatted}`;
};
