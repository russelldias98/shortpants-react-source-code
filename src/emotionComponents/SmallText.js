/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';

const SmallText = props => (
  <div
    css={css`
      font-family: 'Open Sans', sans-serif;
      font-weight: normal;
      font-size: 11px;
      line-height: 13px;
      color: ${props.color ? props.color : `black`};
    `}
    {...props}
  />
);

export default SmallText;
