import React, { Component } from "react";
import MyNavBar from "../navbar/nav";
import ContactForm from "./contact-form";

class Contact extends Component {
  render() {
    return (
      <div>
        <MyNavBar></MyNavBar>
        <center>
          <ContactForm />
        </center>
      </div>
    );
  }
}

export default Contact;
