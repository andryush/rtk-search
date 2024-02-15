import { Empty, FiltersBar } from '@/components';
import * as styles from './styles';
import CardList from '@/components/CardList';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useGetSpecialistsQuery } from '@/store/apiSlice';

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data } = useGetSpecialistsQuery(searchParams.toString(), { skip: !searchParams.toString() });

  console.log('data', data);

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
      {data?.data.items.length ? <CardList /> : <Empty />}
      {/* <CardList /> */}
      <div style={{ background: 'blue', width: '100%', height: '50px' }}></div>
    </div>
  );
};

export default SearchPage;
