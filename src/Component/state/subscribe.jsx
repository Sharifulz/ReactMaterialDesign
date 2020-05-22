import React, { Component } from "react";
import MyNavBar from "../navbar/nav";

class Subscribe extends Component {
  constructor() {
    super();
    this.state = {
      msg: "UNSUBSCRIBE",
      btnText: "SUBSCRIBE",
    };
  }

  onBtnClink() {
    if (this.state.msg === "UNSUBSCRIBE") {
      this.setState({ msg: "SUBSCRIBE", btnText: "UNSUBSCRIBE" });
    } else {
      this.setState({ msg: "UNSUBSCRIBE", btnText: "SUBSCRIBE" });
    }
  }

  render() {
    return (
      <div>
        <MyNavBar></MyNavBar>
        <h1>{this.state.msg}</h1>
        <button onClick={() => this.onBtnClink()}>{this.state.btnText}</button>
      </div>
    );
  }
}

export default Subscribe;
