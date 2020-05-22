import React, { Component } from "react";
import Home from "./Component/pages/home";
import Shop from "./Component/pages/shop";
import Article from "./Component/article";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Subscribe from "./Component/state/subscribe";
import Contact from "./Component/contact/contact";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/shop" component={Shop}></Route>
          <Route path="/article" component={Article}></Route>
          <Route path="/state" component={Subscribe}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
