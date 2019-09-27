import React from "react";
import "./primarybutton.css";

const PrimaryButton = props => {
  return (
    <button type='submit' className='button-container'>
      <div className='button-text'>{props.text}</div>
    </button>
  );
};

export default PrimaryButton;
