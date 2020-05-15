import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class NavBar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/shop"><li>Shop</li></Link>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
