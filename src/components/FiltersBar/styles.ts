import { css } from '@emotion/react';

export const filtersContainer = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 36px;
`;

export const firstLineFilters = css`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  & > div {
    width: 312px;
    & .custom__control {
      border-radius: 0;
      height: 52px;
      border-color: #ccc;
      & .custom__indicators {
        & .custom__indicator {
          color: black;
        }
      }
    }
  }
`;

export const filterWithLabelContainer = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
  & > p {
    font-size: 18px;
    font-weight: 700;
    line-height: 20px;
    padding-left: 8px;
  }
`;

export const searchButton = css`
  background-color: #ff006b;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
  border: unset;
  height: 52px;
`;

export const ageContainer = css`
  width: 312px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 55px;
  & > div {
    & .custom-age__control {
      border-radius: 0;
      height: 52px;
      border-color: #ccc;
      & .custom-age__indicators {
        & .custom-age__indicator {
          color: black;
        }
      }
    }
  }
`;

export const ageLabelWrapper = css`
  display: flex;
  align-items: center;
  gap: 12px;
  & > p {
    padding-left: 12px;
  }
`;
