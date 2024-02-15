import { Empty, FiltersBar } from '@/components';
import * as styles from './styles';
import CardList from '@/components/CardList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useGetSpecialistsQuery } from '@/store/apiSlice';
import { Spinner } from '@/components/Spinner';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store';
import { setSearchTouched } from '@/store/searchSlice';

const SearchPage = () => {
  const [offset, setOffset] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, isLoading } = useGetSpecialistsQuery(searchParams.toString(), {
    skip: !searchParams.toString(),
  });
  const dispatch = useDispatch<AppDispatch>();

  const offsetCounter = () => {
    setOffset((prev) => prev + 1);
    searchParams.set('offset', `${Number(offset) + 1}`);
    setSearchParams(searchParams);
    dispatch(setSearchTouched(false));
  };

  useEffect(() => {
    const params = searchParams.toString();
    if (!params) {
      searchParams.set('limit', '12');
      searchParams.set('offset', '0');
      searchParams.set('ageFrom', '18');
      searchParams.set('ageTo', '99');
      setSearchParams(searchParams);
    }
  }, [searchParams]);

  return (
    <div css={styles.searchContainer}>
      <FiltersBar />
      <hr css={styles.divider} color="#ccc" />
      {isLoading && <Spinner />}
      {data?.data.items.length ? <CardList offset={offset} /> : <Empty />}
      <div>
        <button css={styles.searchButton} onClick={offsetCounter}>
          Показать еще
        </button>
      </div>
    </div>
  );
};

export default SearchPage;
