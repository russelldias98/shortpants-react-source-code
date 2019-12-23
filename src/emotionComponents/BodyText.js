/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';

export const BodyOne = props => (
  <p
    css={css`
      font-family: 'Open Sans', sans-serif;
      font-weight: normal;
      font-size: 20px;
      line-height: 32px;
      color: ${props.color ? props.color : `black`};
    `}
    {...props}
  />
);

export const FeatureCardBody = props => (
  <p
    css={css`
      font-family: Georgia, serif;
      font-size: 15px;
      line-height: 26px;
      color: ${props.color ? props.color : `rgba(0, 0, 0, 0.7)`};
      @media (max-width: 500px) {
        color: black;
      }
    `}
    {...props}
  />
);

export const CaptionOne = props => (
  <p
    css={css`
      font-family: 'Open Sans', sans-serif;
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
      color: ${props.color ? props.color : `rgba(0, 0, 0, 0.7)`};
    `}
    {...props}
  />
);

export const CaptionTwo = props => (
  <p
    css={css`
      font-family: 'Open Sans', sans-serif;
      font-weight: 600;
      font-size: 11px;
      line-height: 13px;
      color: ${props.color ? props.color : `rgba(0, 0, 0, 0.7)`};
    `}
    {...props}
  />
);
