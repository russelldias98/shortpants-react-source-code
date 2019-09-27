import React from "react";
import Header from "../component/header/Header";
import LandingPage from "../component/landingpage/LandingPage";

class Home extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <LandingPage />
      </>
    );
  }
}

export default Home;
