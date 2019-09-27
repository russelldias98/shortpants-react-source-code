import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./header.css";
import "../../index.css";
import PrimaryButton from "../button/PrimaryButton";

class Header extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className='header-container'>
        <div className='header-container-inner'>
          <div className='logo'>Russell Dias</div>
          <div className='right-nav'>
            <Link to='/' className={`page ${window.location.pathname === "/" ? "selected" : ""}`}>
              Home
            </Link>
            <Link
              to='/work'
              className={`page ${window.location.pathname === "/work" ? "selected" : ""}`}
            >
              Work
            </Link>
            <Link
              to='/tools'
              className={`page ${window.location.pathname === "/tools" ? "selected" : ""}`}
            >
              Tools
            </Link>
            <PrimaryButton text='Get In Touch' />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
