import { css } from '@emotion/react';

export const searchContainer = css`
  width: 100%;
  display: flex;
  gap: 24px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 1184px;
  padding: 52px 44px;
  position: relative;
`;

export const divider = css`
  width: 100%;
`;

export const searchButton = css`
  min-width: 312px;
  background-color: #ff006b;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
  border: unset;
  height: 52px;
  cursor: pointer;
  &:hover {
    border-color: rgb(194, 10, 87);
    background-color: rgb(194, 10, 87);
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
