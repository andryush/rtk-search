import { css } from '@emotion/react';

export const card = css`
  background-color: white;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  max-width: 300px;
  position: relative;
`;

export const cardRating = css`
  position: absolute;
  top: 16px;
  left: 16px;
  background-color: #ffffff;
  border-radius: 2px;
  padding: 4px 8px;
  font-weight: bold;
  width: 52px;
  height: 52px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  @media screen and (max-width: 1200px) {
    width: 28px;
    height: 28px;
  }
`;

export const cardImage = css`
  width: 100%;
  height: auto;
  display: block;
`;

export const cardInfo = css`
  padding: 16px;
  padding-left: 0;
`;

export const cardName = css`
  margin: 0;
  font-size: 26px;
  line-height: 26px;

  @media screen and (max-width: 1200px) {
    font-size: 14px;
    line-height: 14px;
  }
`;

export const cardTopics = css`
  font-size: 18px;
  line-height: 18px;
  color: #666;
  margin: 4px 0;
  & span {
    color: #ccc;
  }

  @media screen and (max-width: 1200px) {
    font-size: 12px;
    line-height: 12px;
  }
`;

export const cardTime = css`
  font-size: 14px;
  color: #999;
  margin: 4px 0;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const ratingTextStyle = css`
  font-size: 8px;
  line-height: 8px;
  text-transform: uppercase;

  @media screen and (max-width: 1200px) {
    font-size: 4px;
    line-height: 4px;
  }
`;

export const ratingNumberStyle = css`
  font-size: 20px;
  line-height: 20px;

  @media screen and (max-width: 1200px) {
    font-size: 16px;
    line-height: 16px;
  }
`;

export const onlineIndicator = css`
  width: 12px;
  height: 12px;
  background-color: #37b86b;
  border: 1px solid #37b86b;
  border-radius: 50%;

  @media screen and (max-width: 1200px) {
    width: 8px;
    height: 8px;
  }
`;

export const onlineIndicatorContainer = css`
  display: flex;
  gap: 4px;
`;
