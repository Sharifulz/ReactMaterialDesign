import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Button variant="contained" color="secondary">
  Secondary
</Button>

<Checkbox
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      </div>
    );
  }
}

export default App;
