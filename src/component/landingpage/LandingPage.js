import React from "react";
import "./landingpage.css";
import "../../index.css";

class LandingPage extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className='landing-page-container'>
        <div className='landing-page-container-inner'>
          <div className='landing-page-container-inner-left'>
            <div className='landing-page-container-inner-left-text-container'>
              <h1>Hello.</h1>
              <div className='body'>
                I’m Russell Dias.
                <br />A UI/UX Designer and Engineer.
              </div>
            </div>
          </div>
          <div className='landing-page-container-inner-right'>
            <div className='landing-page-container-inner-right-gif'></div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
