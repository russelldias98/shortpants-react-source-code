/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';

const ButtonBlue = props => (
  <button
    css={css`
      font-family: 'Open Sans', sans-serif;
      width: 140px;
      height: 50px;
      border: none;
      font-size: 16px;
      line-height: 18px;
      font-weight: bold;
      color: ${props.color ? props.color : `#1973e9`};
      background: ${props.background ? props.background : `white`};
      border-radius: 8px;
      outline: none;
      cursor: pointer;
      border: ${props.border ? props.border : ''};
    `}
    disabled={props.disabled}
    type={props.type}
    onClick={props.onClick}
    {...props}
  />
);

export default ButtonBlue;
