import React, { Component } from "react";

class ContactForm extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  btnOnClick = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
  };

  render() {
    return (
      <center>
        <form style={{ margin: 20 }}>
          <input type="text" placeholder="Enter your name" name="FirstName" />
          <input type="submit" value="SUBMIT" onClick={this.btnOnClick} />
        </form>
      </center>
    );
  }
}

export default ContactForm;
