import React, { Component } from "react";
import styles from "./styles/profileStyle";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

class ContactUs extends Component {
  render() {
    return "I'm Contact Us Page. TBA";
  }
}
export default withRouter(withStyles(styles)(ContactUs));
