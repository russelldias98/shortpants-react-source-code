import React from "react";
import "../index.css";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
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
