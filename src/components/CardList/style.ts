import { css } from '@emotion/react';

export const gridContainer = css`
--min-width: 
  background-color: green;
  width: 100%;
  gap: 20px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
