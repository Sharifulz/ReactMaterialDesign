import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Shop extends Component {
  render() {
    return (
      <div>
        <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/shop"><li>Shop</li></Link>
       <h1>Shop Page</h1>
      </div>
    );
  }
}

export default Shop;
