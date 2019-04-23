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
import SimpleBottomNavigation from "./simpleBottomNavigation";
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
      country,
      street,
      city,
      state,
      zipcode,
      image,
      classes,
      user_type,
      balance
    } = this.props;
     const defaultImage = "https://res.cloudinary.com/zoey1111/image/upload/v1550020987/profile.png";
 
    return (
      <div>
        <Grid container justify="center" alignItems="center">
          <Avatar alt="profileImage" src={image? image : defaultImage} className={classes.bigAvatar} />
        </Grid>
        <h2 className={classes.balance}>Your current balance is : {balance} Petcoin</h2>
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

        {user_type==0&&<Button
          variant="outlined"
          fullWidth
          color="primary"
          className={classes.button}
          onClick={() => {
            this.props.history.push("/profile/editPost");
          }}
        >
          Edit Post
        </Button>}
        {user_type==1&&<Button
          variant="outlined"
        //  fullWidth
          color="primary"
          className={classes.button}
          onClick={() => {
            this.props.history.push("/profile/petpage");
          }}
        >
          Pet Page
        </Button>}
       
        <Button
          variant="contained"
        //  fullWidth
          color="primary"
          className={classes.button}
          onClick={() => this.handleOnClick()}
        >
          Sign Out
        </Button>
        <div className={classes.foot}></div>
         {/* <SimpleBottomNavigation />*/}
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
  user_type: PropTypes.number,
  balance: PropTypes.number
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
  user_type:1,
  balance: 0
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
    user_type: user.user_type,
    balance : user.balance
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
