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
  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 20px;

    & > div {
      width: 100%;
    }
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
  cursor: pointer;
  &:hover {
    border-color: rgb(194, 10, 87);
    background-color: rgb(194, 10, 87);
  }
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

  @media (max-width: 1200px) {
    width: 100%;
    gap: 0;
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

  @media (max-width: 1200px) {
    &:has(.css-${ageContainer.name}) {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
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

  @media (max-width: 1200px) {
    width: 100%;

    & > div {
      flex: 1;
    }
  }
`;
