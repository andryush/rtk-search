import { FiltersBar } from '@/components';
import * as styles from './styles';

const SearchPage = () => {
  return (
    <div css={styles.searchContainer}>
      <FiltersBar />
      <div style={{ background: 'green', width: '100%', height: '50px' }}></div>
      <div style={{ background: 'blue', width: '100%', height: '50px' }}></div>
    </div>
  );
};

export default SearchPage;
