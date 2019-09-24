import React from "react";
import "../index.css";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

class Home extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <div>Home Page</div>
        <Footer />
      </div>
    );
  }
}

export default Home;
