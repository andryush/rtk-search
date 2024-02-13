import { PropsWithChildren } from 'react';
import * as styles from './styles';

export const MainLayout = ({ children }: PropsWithChildren) => {
  return <div css={styles.layoutContainer}>{children}</div>;
};
