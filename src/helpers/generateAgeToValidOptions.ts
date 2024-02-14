import { SelectOptionType } from '@/constants';

export const generateAgeToValidOptions = (
  options: SelectOptionType[],
  ageFrom: number | string | undefined,
): SelectOptionType[] => {
  if (typeof ageFrom === 'number') {
    return options.filter((el) => Number(el.value) >= ageFrom);
  } else {
    return [];
  }
};
