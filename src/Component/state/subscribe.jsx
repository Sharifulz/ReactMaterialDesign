import React, { Component } from "react";
import MyNavBar from "../navbar/nav";

class Subscribe extends Component {
  constructor() {
    super();
    this.state = {
      msg: "Please subscribe. ",
    };
  }

  onBtnClink() {
    this.setState({ msg: "Thanks for subscribing!" });
  }

  render() {
    return (
      <div>
        <MyNavBar></MyNavBar>
        <h1>{this.state.msg}</h1>
        <button onClick={() => this.onBtnClink()}>Subscribe</button>
      </div>
    );
  }
}

export default Subscribe;
