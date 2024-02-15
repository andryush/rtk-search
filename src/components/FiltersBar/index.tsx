import {
  AGE_OPTIONS,
  GENDER_OPTIONS,
  RATING_OPTIONS,
  SPECIALITY_OPTIONS,
  SUBJECTS_DEFAULT,
  SelectOptionType,
} from '@/constants';
import * as styles from './styles';
import Select from 'react-select';
import { useMemo, useState } from 'react';
import { generateAgeToValidOptions } from '@/helpers/generateAgeToValidOptions';
import { useGetSubjectsQuery, useLazyGetSpecialistsQuery } from '@/store/apiSlice';
import { useSearchParams } from 'react-router-dom';
import { useForm, Controller, FieldValues } from 'react-hook-form';

export const FiltersBar = () => {
  const [ageFrom, setAgeFrom] = useState<SelectOptionType | null>(AGE_OPTIONS.at(0)!);
  const [ageTo, setAgeTo] = useState<SelectOptionType | null>(AGE_OPTIONS.at(-1)!);
  const [searchParams, setSearchParams] = useSearchParams();
  const { control, handleSubmit, setValue } = useForm();

  const [trigger] = useLazyGetSpecialistsQuery();

  const offsetCounter = () => {
    const offset = searchParams.get('offset') ?? 0;
    searchParams.set('offset', `${Number(offset) + 1}`);
    setSearchParams(searchParams);
  };

  const handleSearch = (data: FieldValues): void => {
    Object.keys(data).forEach((el) => {
      if (data[el].value === -1) {
        searchParams.set(el, '');
      } else if (el === 'rating') {
        const value = data[el].value.split('-');
        searchParams.set('ratingTo', value[0]);
        searchParams.set('ratingFrom', value[1]);
      } else {
        searchParams.set(el, data[el].value);
      }
    });

    setSearchParams(searchParams);

    trigger(searchParams.toString());
  };

  const { data } = useGetSubjectsQuery(undefined);

  const subjects = useMemo(
    () => [SUBJECTS_DEFAULT, ...(data?.data.map((s) => ({ value: s.id, label: s.name })) || [])],
    [data],
  );

  const ageToOptions = useMemo(() => generateAgeToValidOptions(AGE_OPTIONS, ageFrom?.value), [ageFrom, ageTo]);

  const defaultValueForAgeTo = useMemo(() => {
    if (ageFrom && ageTo && ageFrom.value >= ageTo.value) {
      setAgeTo(ageFrom);
      setValue('ageTo', ageFrom);
      return ageFrom;
    }

    return ageTo;
  }, [ageFrom, ageTo]);

  return (
    <div css={styles.filtersContainer}>
      <button onClick={offsetCounter}>click</button>
      <div css={styles.firstLineFilters}>
        <div css={styles.filterWithLabelContainer}>
          <p style={{ fontSize: '20px' }}>Я ищу психолога</p>
          <Controller
            name="sex"
            control={control}
            defaultValue={GENDER_OPTIONS[0]}
            render={({ field }) => (
              <Select
                {...field}
                id="sex"
                classNamePrefix="custom"
                components={{
                  IndicatorSeparator: () => null,
                }}
                defaultValue={GENDER_OPTIONS[0]}
                options={GENDER_OPTIONS}
              />
            )}
          />
        </div>
        <div css={styles.filterWithLabelContainer}>
          <p>В возрасте</p>
          <div css={styles.ageContainer}>
            <div css={styles.ageLabelWrapper}>
              <p>От</p>
              <Controller
                name="ageFrom"
                control={control}
                defaultValue={AGE_OPTIONS[0]}
                render={({ field }) => (
                  <Select
                    id="ageFrom"
                    classNamePrefix="custom-age"
                    components={{
                      IndicatorSeparator: () => null,
                    }}
                    options={AGE_OPTIONS}
                    defaultValue={AGE_OPTIONS[0]}
                    onChange={(value) => {
                      setAgeFrom(value);
                      field.onChange(value);
                    }}
                  />
                )}
              />
            </div>
            <div css={styles.ageLabelWrapper}>
              <p>До</p>
              <Controller
                name="ageTo"
                control={control}
                defaultValue={ageTo}
                render={({ field }) => (
                  <Select
                    id="ageTo"
                    classNamePrefix="custom-age"
                    components={{
                      IndicatorSeparator: () => null,
                    }}
                    options={(ageFrom && ageToOptions) || AGE_OPTIONS}
                    onChange={(value) => {
                      setAgeTo(value);
                      field.onChange(value);
                    }}
                    value={defaultValueForAgeTo}
                  />
                )}
              />
            </div>
          </div>
        </div>
        <div css={styles.filterWithLabelContainer}>
          <p>Тема</p>
          <Controller
            name="subjectId"
            control={control}
            defaultValue={SUBJECTS_DEFAULT}
            render={({ field }) => (
              <Select
                id="subjectId"
                classNamePrefix="custom"
                {...field}
                components={{
                  IndicatorSeparator: () => null,
                }}
                defaultValue={SUBJECTS_DEFAULT}
                options={subjects}
              />
            )}
          />
        </div>
      </div>
      <div css={styles.firstLineFilters}>
        <div css={styles.filterWithLabelContainer}>
          <p>Квалификация</p>
          <Controller
            name="profSpeciality"
            control={control}
            defaultValue={SPECIALITY_OPTIONS[0]}
            render={({ field }) => (
              <Select
                id="profSpeciality"
                classNamePrefix="custom"
                {...field}
                components={{
                  IndicatorSeparator: () => null,
                }}
                options={SPECIALITY_OPTIONS}
                defaultValue={SPECIALITY_OPTIONS[0]}
              />
            )}
          />
        </div>
        <div css={styles.filterWithLabelContainer}>
          <p>Рейтинг</p>
          <Controller
            name="rating"
            control={control}
            defaultValue={RATING_OPTIONS[0]}
            render={({ field }) => (
              <Select
                id="rating"
                classNamePrefix="custom"
                {...field}
                components={{
                  IndicatorSeparator: () => null,
                }}
                options={RATING_OPTIONS}
                defaultValue={RATING_OPTIONS[0]}
              />
            )}
          />
        </div>
        <div css={styles.filterWithLabelContainer}>
          <button onClick={handleSubmit(handleSearch)} css={styles.searchButton}>
            Показать анкеты
          </button>
        </div>
      </div>
    </div>
  );
};
