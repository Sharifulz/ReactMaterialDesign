import React, { Component } from "react";
import MyNavBar from "./Component/navbar/nav";
import Home from "./Component/pages/home";
import Shop from "./Component/pages/shop";
import Article from "./Component/article";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={MyNavBar}></Route>
          <Route path="/about" component={Home}></Route>
          <Route path="/shop" component={Shop}></Route>
          <Route path="/article" component={Article}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
