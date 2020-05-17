import React, { Component } from "react";
import { Link } from "react-router-dom";
import MyNavBar from "../navbar/nav";

class Home extends Component {
  render() {
    return (
      <div>
        <MyNavBar></MyNavBar>
        <h1>Home Pages</h1>
      </div>
    );
  }
}

export default Home;
