import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import { signOut } from "../redux/actions";

import styles from "./styles/profileStyle";

class CreatPet extends Component {
 

  render() {
  // const {  } = this.props;

    return (
      
        <h1>Pet Page</h1>
      
    );
  }
}

CreatPet.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
  breed: PropTypes.string,
  color: PropTypes.string,
  weight: PropTypes.string
};

CreatPet.defaultProps = {
  name: "",
  type: "",
  breed: "",
  color: "",
  weight: ""
};

function mapStateToProps({ user }) {
  return {
    name: user.name,
    type: user.type,
    breed: user.breed,
    color: user.color,
    weight: user.weight
  };
}

export default withRouter(
  withStyles(styles)(
    connect(
      mapStateToProps,
      { signOut }
    )(CreatPet)
  )
);
