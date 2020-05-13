import React, { Component } from 'react';
import './App.css';
import Header from './Component/layout/Header.js';
import RecipeReviewCard from './Component/RecipeReviewCard.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <RecipeReviewCard></RecipeReviewCard>
      </div>
    );
  }
}

export default App;
