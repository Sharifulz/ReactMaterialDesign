import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./nav.css";

class MyNavBar extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Link to="/home" className="button-text">
            <Button color="inherit">Home</Button>
          </Link>
          <Link to="/shop" className="button-text">
            <Button color="inherit">Shop</Button>
          </Link>
          <Link to="/article" className="button-text">
            <Button color="inherit">Article</Button>
          </Link>
        </Toolbar>
      </AppBar>
    );
  }
}

export default MyNavBar;
