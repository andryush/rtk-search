export const formatTimeIntl = (hours: number): string => {
  const rtf = new Intl.RelativeTimeFormat('ru', { numeric: 'auto' });
  return rtf.format(-hours, 'hour');
};
