import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./primarybutton.css";

const PrimaryButton = props => {
  return (
    <Link
      to='/contact'
      style={{
        textDecoration: "none"
      }}
    >
      <button type='button' className='button-container'>
        <div className='button-text'>{props.text}</div>
      </button>
    </Link>
  );
};

export default withRouter(PrimaryButton);
