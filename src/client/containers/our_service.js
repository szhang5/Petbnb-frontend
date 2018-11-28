import React, { Component } from "react";
import styles from "./styles/profileStyle";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

class OurService extends Component {
  render() {
    return "I'm Our Service Page. TBA";
  }
}
export default withRouter(withStyles(styles)(OurService));
