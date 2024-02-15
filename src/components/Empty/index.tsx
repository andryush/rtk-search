import { EmptyIcon } from '..';
import * as styles from './styles';

export const Empty = () => {
  return (
    <div css={styles.emptyContainer}>
      <EmptyIcon />
      <p css={styles.noResultText}>К сожалению, нет анкет с такими параметрами </p>
    </div>
  );
};
