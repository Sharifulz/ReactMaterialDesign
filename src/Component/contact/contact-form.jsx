import React, { Component } from "react";

class ContactForm extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
    };
  }

  btnOnClick = (e) => {
    e.preventDefault();
    let fname = this.state.firstName;
    // console.log(`First Name: ${this.state.firstName} `);
    console.log(`First Name:` + fname);
  };

  handleChange = (e) => {
    this.setState({ firstName: e.target.value });
  };

  render() {
    return (
      <center>
        <form style={{ margin: 20 }}>
          <input
            type="text"
            onChange={this.handleChange}
            placeholder="Enter your name"
            name="firstName"
          />
          <input type="submit" value="SUBMIT" onClick={this.btnOnClick} />
        </form>
      </center>
    );
  }
}

export default ContactForm;
