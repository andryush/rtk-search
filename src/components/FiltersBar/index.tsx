import { AGE_OPTIONS, GENDER_OPTIONS, RATING_OPTIONS, SPECIALITY_OPTIONS, SelectOptionType } from '@/constants';
import * as styles from './styles';
import Select from 'react-select';
import { useMemo, useState } from 'react';
import { generateAgeToValidOptions } from '@/helpers/generateAgeToValidOptions';

export const FiltersBar = () => {
  const [ageFrom, setAgeFrom] = useState<SelectOptionType | null>(AGE_OPTIONS.at(0)!);
  const [ageTo, setAgeTo] = useState<SelectOptionType | null>(AGE_OPTIONS.at(-1)!);

  const ageToOptions = useMemo(() => generateAgeToValidOptions(AGE_OPTIONS, ageFrom?.value), [ageFrom, ageTo]);

  const defaultValueForAgeTo = useMemo(() => {
    if (ageFrom && ageTo && ageFrom.value >= ageTo.value) {
      setAgeTo(ageFrom);
      return ageFrom;
    }

    return ageTo;
  }, [ageFrom, ageTo]);

  return (
    <div css={styles.filtersContainer}>
      <div css={styles.firstLineFilters}>
        <div css={styles.filterWithLabelContainer}>
          <p style={{ fontSize: '20px' }}>Я ищу психолога</p>
          <Select
            name="gender"
            classNamePrefix="custom"
            components={{
              IndicatorSeparator: () => null,
            }}
            defaultValue={GENDER_OPTIONS[0]}
            options={GENDER_OPTIONS}
          />
        </div>
        <div css={styles.filterWithLabelContainer}>
          <p>В возрасте</p>
          <div css={styles.ageContainer}>
            <div css={styles.ageLabelWrapper}>
              <p>От</p>
              <Select
                classNamePrefix="custom-age"
                components={{
                  IndicatorSeparator: () => null,
                }}
                options={AGE_OPTIONS}
                defaultValue={AGE_OPTIONS[0]}
                onChange={(value) => setAgeFrom(value)}
              />
            </div>
            <div css={styles.ageLabelWrapper}>
              <p>До</p>
              <Select
                classNamePrefix="custom-age"
                components={{
                  IndicatorSeparator: () => null,
                }}
                options={(ageFrom && ageToOptions) || AGE_OPTIONS}
                onChange={(value) => setAgeTo(value)}
                value={defaultValueForAgeTo}
              />
            </div>
          </div>
        </div>
        <div css={styles.filterWithLabelContainer}>
          <p>Тема</p>
          <Select
            classNamePrefix="custom"
            components={{
              IndicatorSeparator: () => null,
            }}
          />
        </div>
      </div>
      <div css={styles.firstLineFilters}>
        <div css={styles.filterWithLabelContainer}>
          <p>Квалификация</p>
          <Select
            classNamePrefix="custom"
            components={{
              IndicatorSeparator: () => null,
            }}
            options={SPECIALITY_OPTIONS}
            defaultValue={SPECIALITY_OPTIONS[0]}
          />
        </div>
        <div css={styles.filterWithLabelContainer}>
          <p>Рейтинг</p>
          <Select
            classNamePrefix="custom"
            components={{
              IndicatorSeparator: () => null,
            }}
            options={RATING_OPTIONS}
            defaultValue={RATING_OPTIONS[0]}
          />
        </div>
        <div css={styles.filterWithLabelContainer}>
          <button css={styles.searchButton}>Показать анкеты</button>
        </div>
      </div>
    </div>
  );
};