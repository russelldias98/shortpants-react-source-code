/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';

const InputBox = props => (
  <input
    css={css`
      height: 40px;
      width: 300px;
      background: #ffffff;
      color: black;
      border: 1px solid ${props.errorvalue ? props.errorvalue : '#e0e0e0'};
      box-sizing: border-box;
      border-radius: 4px;
      outline: none;
      padding-left: 20px;
    `}
    name={props.name}
    type={props.type}
    onChange={props.onChange}
    value={props.value}
    placeholder={props.placeholder}
    style={props.style}
    onBlur={props.handleBlur}
    {...props}
  />
);

export default InputBox;
