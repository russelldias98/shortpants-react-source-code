/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';

const ButtonWhite = props => (
  <button
    css={css`
      font-family: 'Open Sans', sans-serif;
      width: 140px;
      height: 50px;
      border: none;
      font-size: 16px;
      line-height: 18px;
      font-weight: bold;
      color: ${props.color ? props.color : `white`};
      background: ${props.background ? props.background : `#1973e9`};
      border-radius: 8px;
      outline: none;
      cursor: pointer;
    `}
    disabled={props.disabled}
    type={props.type}
    onClick={props.onClick}
    {...props}
  />
);

export default ButtonWhite;
