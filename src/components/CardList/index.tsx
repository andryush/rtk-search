import Card from '../Card';
import * as styles from './style';
import { useSearchParams } from 'react-router-dom';
import { useGetSpecialistsQuery } from '@/store/apiSlice';

const CardList = () => {
  const [searchParams] = useSearchParams();
  const { data } = useGetSpecialistsQuery(searchParams.toString());
  return (
    <div css={styles.gridContainer}>
      {data?.data?.items?.map((card) => (
        <Card key={card.userId} {...card} />
      ))}
    </div>
  );
};

export default CardList;
