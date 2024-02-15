import Card from '../Card';
import * as styles from './style';
import { useSearchParams } from 'react-router-dom';
import { useGetSpecialistsQuery } from '@/store/apiSlice';
import { useEffect, useState } from 'react';
import { Specialist } from '@/store/types';
import { useSelector } from 'react-redux';
import { selectIsSearchTouched } from '@/store/searchSlice';
import { RootState } from '@/store';

const CardList = () => {
  const [searchParams] = useSearchParams();
  const { data, isSuccess } = useGetSpecialistsQuery(searchParams.toString(), { skip: !searchParams.toString() });
  const isSearchTouched = useSelector((state: RootState) => selectIsSearchTouched(state));

  const [userList, setUserList] = useState<Specialist[]>([]);

  useEffect(() => {
    if (data && isSuccess) {
      if (isSearchTouched) {
        const newList = [...data.data.items];
        setUserList(() => []);
        setTimeout(() => {
          setUserList(newList);
        }, 0);
      } else {
        const newList = [...userList, ...data.data.items];
        setUserList(newList);
      }
    }
  }, [isSearchTouched, data]);

  return (
    <div css={styles.gridContainer}>
      {userList.map((card) => (
        <Card key={card.userId} {...card} />
      ))}
    </div>
  );
};

export default CardList;
