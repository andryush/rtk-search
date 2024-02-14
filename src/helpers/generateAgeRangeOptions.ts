import { SelectOptionType } from '@/constants';

export const generateAgeRangeOptions = (start: number, end: number): SelectOptionType[] => {
  if (start > end || start === end) return [];

  const result = [];

  for (let i = start; i <= end; i++) {
    result.push({ label: String(i), value: i });
  }

  return result;
};
