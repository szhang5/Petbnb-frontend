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
import Avatar from "@material-ui/core/Avatar";
import styles from "./styles/profileStyle";
import AvatarUpload from "./avatarupload";
class Profile extends Component {

  handleOnClick() {
    const { email } = this.props;
    // console.log(email);
    if (email) {
      this.props.signOut();
    }
    return this.props.history.push("/signin");
  }
  onChange(e) {
    let file = e.target.file;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onload = e => {
      console.log("data is:" + e.target.result);
    };
  }

  render() {
    const {
      firstname,
      lastname,
      email,
      phone,
      country,
      street,
      city,
      state,
      zipcode,
      image,
      classes
    } = this.props;
 
    return (
      <div>
        <Grid container justify="center" alignItems="center">
          <Avatar alt="Zoey" src={image} className={classes.bigAvatar} />
        </Grid>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            disabled
            id="outlined-firstname-input"
            label="First Name"
            value={firstname}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            disabled
            id="outlined-lastname-input"
            label="Last Name"
            value={lastname}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            disabled
            id="outlined-email-input"
            label="Email"
            value={email}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            disabled
            id="outlined-phone-input"
            label="Phone"
            value={phone}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            disabled
            id="outlined-country-input"
            label="Country"
            className={classes.textField}
            name="country"
            value={country}
            margin="normal"
            fullWidth
          />
          <TextField
            disabled
            id="outlined-street-input"
            label="Street"
            className={classes.textField}
            value={street}
            margin="normal"
            fullWidth
          />
          <TextField
            disabled
            id="outlined-city-input"
            label="City"
            className={classes.textField}
            value={city}
            margin="normal"
          />
          <TextField
            disabled
            id="outlined-state-input"
            label="State"
            className={classes.textField}
            value={state}
            margin="normal"
          />
          <TextField
            disabled
            id="outlined-zipcode-input"
            label="ZipCode"
            className={classes.textField}
            value={zipcode}
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
          variant="outlined"
          fullWidth
          color="primary"
          className={classes.button}
          onClick={() => {
            this.props.history.push("/profile/petprofile");
          }}
        >
          Pet Profile
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
  country: PropTypes.string,
  street: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  zipcode: PropTypes.string,
  image: PropTypes.string,
};

Profile.defaultProps = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  country: "",
  street: "",
  city: "",
  state: "",
  zipcode: "",
  image: "https://res.cloudinary.com/zoey1111/image/upload/v1550020987/profile.png",
};

function mapStateToProps({ user }) {
  return {
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    phone: user.phone,
    country: user.country,
    street: user.street,
    city: user.city,
    state: user.state,
    zipcode: user.zip,
    image: user.image,
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
