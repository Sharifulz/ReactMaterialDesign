import React, { Component } from "react";
import "./article.css";
import MyNavBar from "./navbar/nav";

class Article extends Component {
  state = {};
  render() {
    return (
      <div>
        <MyNavBar />
        <h1>Article Pages</h1>
      </div>
    );
  }
}

export default Article;
