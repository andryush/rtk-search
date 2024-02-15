export const convertTimestampToHours = (timestamp: string): number => {
  const date = new Date(timestamp);
  return date.getHours();
};
