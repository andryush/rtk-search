import { Specialist } from '@/store/types';
import * as styles from './styles';

const Card = ({ name }: Specialist) => {
  return <div css={styles.card}>{name}</div>;
};

export default Card;
