import React, {Component} from 'react';
import NavBar from './Component/nav'
import Home from './Component/pages/home'
import Shop from './Component/pages/shop'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
      <Switch>
        <Route path="/" exact component={NavBar}></Route>
        <Route path="/about" component={Home}></Route>
        <Route path="/shop" component={Shop}></Route>
      </Switch>
     </Router>
    );
  }
}

export default App;
