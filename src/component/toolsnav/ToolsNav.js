import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./toolsnav.css";
import "../../index.css";

class ToolsNav extends React.Component {
  constructor() {
    super();

    this.state = {};
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.history.goBack();
  }

  render() {
    return (
      <div className='tools-nav-container'>
        <div className='tools-nav-container-inner'>
          <Link style={{ textDecoration: "none" }} to='/tools/one' className='tool selected'>
            Tool One
          </Link>
          <Link style={{ textDecoration: "none" }} to='/tools/two' className='tool'>
            Tool Two
          </Link>
          <Link style={{ textDecoration: "none" }} to='/tools/three' className='tool'>
            Tool Three
          </Link>
          <Link style={{ textDecoration: "none" }} to='/tools/four' className='tool'>
            Tool Four
          </Link>
          <button style={{ marginTop: "90px" }} className='button' onClick={this.goBack}>
            Go Back
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(ToolsNav);
