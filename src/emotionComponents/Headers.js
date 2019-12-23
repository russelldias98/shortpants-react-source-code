/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';

export const H1 = props => (
  <h1
    css={css`
      font-family: 'Open Sans', sans-serif;
      font-weight: 800;
      font-size: 40px;
      line-height: 41px;
      margin: 0;
      color: ${props.color ? props.color : `black`};
    `}
    {...props}
  />
);

export const H2 = props => (
  <h2
    css={css`
      font-family: 'Open Sans', sans-serif;
      font-weight: 800;
      font-size: 36px;
      line-height: 38px;
      margin: 0;
      color: ${props.color ? props.color : `black`};
    `}
    {...props}
  />
);

export const FeatureHeader = props => (
  <h2
    css={css`
      font-family: 'Open Sans', sans-serif;
      font-weight: bold;
      font-size: 18px;
      line-height: 28px;
      margin: 0;
      color: ${props.color ? props.color : `black`};
    `}
    {...props}
  />
);

export const CTAHeader = props => (
  <h2
    css={css`
      font-family: 'Open Sans', sans-serif;
      font-weight: bold;
      font-size: 24px;
      line-height: 28px;
      margin: 0;
      color: ${props.color ? props.color : `black`};
    `}
    {...props}
  />
);

export const FeatureCardHeader = props => (
  <h2
    css={css`
      font-family: 'Open Sans', sans-serif;
      font-weight: bold;
      font-size: 22px;
      line-height: 28px;
      margin: 0;
      color: ${props.color ? props.color : `black`};
      @media (max-width: 500px) {
        color: black;
      }
    `}
    {...props}
  />
);
