import { generateAgeRangeOptions } from './helpers';

export type SelectOptionType = {
  value: string | number;
  label: string;
};

export const GENDER_OPTIONS: SelectOptionType[] = [
  {
    value: 0,
    label: 'Любого пола',
  },
  {
    value: 1,
    label: 'Мужского пола',
  },
  {
    value: 2,
    label: 'Женского пола',
  },
];

export const SPECIALITY_OPTIONS: SelectOptionType[] = [
  {
    value: 0,
    label: 'Все варианты',
  },
  {
    value: 1,
    label: 'Консультант',
  },
  {
    value: 2,
    label: 'Сексолог',
  },
  {
    value: 3,
    label: 'Коуч',
  },
];

export const RATING_OPTIONS: SelectOptionType[] = [
  {
    value: 0,
    label: 'Не важен',
  },
  {
    value: '0-0',
    label: 'Новые',
  },
  {
    value: '100-80',
    label: 'от 100 до 80',
  },
  {
    value: '79-60',
    label: 'от 79 до 60',
  },
  {
    value: '59-40',
    label: 'от 59 до 40',
  },
];

const AGE_FROM = 18;
const AGE_TO = 99;

export const AGE_OPTIONS: SelectOptionType[] = generateAgeRangeOptions(AGE_FROM, AGE_TO);
