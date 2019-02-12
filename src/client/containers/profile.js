import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import { signOut } from "../redux/actions";

import styles from "./styles/profileStyle";

class Profile extends Component {
  handleOnClick() {
    const { email } = this.props;
    // console.log(email);
    if (email) {
      this.props.signOut();
    }
    return this.props.history.push("/signin");
  }

  render() {
    const {
      firstname,
      lastname,
      email,
      phone,
      street,
      city,
      state,
      zipcode,
      classes
    } = this.props;

    return (
      <div>
        <Grid container justify="center" alignItems="center">
          <Avatar alt="Zoey" src="https://res.cloudinary.com/zoey1111/image/upload/v1536970787/silence2.png" className={classes.bigAvatar} />
        </Grid>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            disabled
            id="outlined-firstname-input"
            label="First Name"
            defaultValue={firstname}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            disabled
            id="outlined-lastname-input"
            label="Last Name"
            defaultValue={lastname}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            disabled
            id="outlined-email-input"
            label="Email"
            defaultValue={email}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            disabled
            id="outlined-phone-input"
            label="Phone"
            defaultValue={phone}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            disabled
            id="outlined-street-input"
            label="Street"
            className={classes.textField}
            defaultValue={street}
            fullWidth
            margin="normal"
          />
          <TextField
            disabled
            id="outlined-city-input"
            label="City"
            className={classes.textField}
            defaultValue={city}
            margin="normal"
          />
          <TextField
            disabled
            id="outlined-state-input"
            label="State"
            className={classes.textField}
            defaultValue={state}
            margin="normal"
          />
          <TextField
            disabled
            id="outlined-zipcode-input"
            label="ZipCode"
            className={classes.textField}
            defaultValue={zipcode}
            margin="normal"
          />
        </form>

        <Button
          variant="outlined"
          fullWidth
          color="primary"
          className={classes.button}
          onClick={() => {
            this.props.history.push("/profile/edit");
          }}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          fullWidth
          color="primary"
          className={classes.button}
          onClick={() => this.handleOnClick()}
        >
          Sign Out
        </Button>
      </div>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  street: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  zipcode: PropTypes.string
};

Profile.defaultProps = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  street: "",
  city: "",
  state: "",
  zipcode: ""
};

function mapStateToProps({ user }) {
  return {
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    phone: user.phone,
    street: user.street,
    city: user.city,
    state: user.state,
    zipcode: user.zip
  };
}

export default withRouter(
  withStyles(styles)(
    connect(
      mapStateToProps,
      { signOut }
    )(Profile)
  )
);
