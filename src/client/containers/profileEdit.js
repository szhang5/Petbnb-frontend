import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import styles from "./styles/profileStyle";
import { EditProfileAction, UploadImage, updateInputInfo } from "../redux/actions";

class ProfileEdit extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const payload = {};
    for (const [key, value] of data.entries()) {
      payload[key] = value;
    }

    this.props.EditProfileAction(payload).then(() => {
      //this.props.history.push("/profile");
      this.props.history.push("/profile");
    });
  }

   onChange(e) {
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onload = e => {
      // console.log(e.target.result); //get image_base64_data
      this.props.UploadImage(this.props.email, e.target.result);
    };
  }

  handleInputChange(e) {
    this.props.updateInputInfo(e.target.name, e.target.value)
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
    const defaultImage = "https://res.cloudinary.com/zoey1111/image/upload/v1550020987/profile.png";
    return (
      <div>
        <h1>Edit Profile</h1>
        <Grid container justify="center" alignItems="center">
          <Avatar alt="Zoey" src={image ? image : defaultImage} className={classes.bigAvatar} />
          <input accept="image/*" className={classes.input} id="icon-button-file" type="file" onChange={e => this.onChange(e)}/>
          <label htmlFor="icon-button-file">
            <IconButton color="primary" className={classes.button} component="span">
              <PhotoCamera />
            </IconButton>
          </label>
        </Grid>
        <form
          className={classes.container}
          noValidate
          autoComplete="off"
          onSubmit={e => this.handleSubmit(e)}
          onChange={e => this.handleInputChange(e)}
        >
          <TextField
            id="outlined-firstname-input"
            label="First Name"
            className={classes.textField}
            type="name"
            name="firstname"
            value={firstname}
            autoComplete="firstname"
            margin="normal"
            fullWidth
            variant="outlined"
          />
          <TextField
            id="outlined-lastname-input"
            label="Last Name"
            className={classes.textField}
            type="name"
            name="lastname"
            value={lastname}
            autoComplete="lastname"
            margin="normal"
            fullWidth
            variant="outlined"
          />
          <TextField
            id="outlined-email-input"
            label="Email"
            className={classes.textField}
            type="email"
            name="email"
            value={email}
            autoComplete="email"
            margin="normal"
            fullWidth
            variant="outlined"
          />
          <TextField
            id="outlined-phone-input"
            label="Phone"
            className={classes.textField}
            type="phone"
            name="phone"
            value={phone}
            autoComplete="phone"
            margin="normal"
            fullWidth
            variant="outlined"
          />
          <TextField
          
            id="outlined-country-input"
            label="Country"
            className={classes.textField}
            type="country"
            name="country"
            value={country}
            autoComplete="country"
            margin="normal"
            fullWidth
            variant="outlined"
            onChange={e => this.handleInputChange(e)}
            
          ></TextField>
          <TextField
            id="outlined-street-input"
            label="Street"
            className={classes.textField}
            type="street"
            name="street"
            value={street}
            autoComplete="street"
            margin="normal"
            fullWidth
            variant="outlined"
          />
          <TextField
            id="outlined-city-input"
            label="City"
            className={classes.textField}
            type="city"
            name="city"
            value={city}
            autoComplete="city"
            margin="normal"
            fullWidth
            variant="outlined"
          />
          <TextField
            id="outlined-state-input"
            label="State"
            className={classes.textField}
            type="state"
            name="state"
            value={state}
            autoComplete="state"
            margin="normal"
            fullWidth
            variant="outlined"
          />
          <TextField
            id="outlined-zipcode-input"
            label="ZipCode"
            className={classes.textField}
            type="zipcode"
            name="zip"
            value={zipcode}
            autoComplete="zipcode"
            margin="normal"
            fullWidth
            variant="outlined"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Save
          </Button>
          <Button
            variant="outlined"
            fullWidth
            color="primary"
            className={classes.button}
            onClick={() => {
              this.props.history.push("/profile");
            }}
          >
            Cancel
          </Button>

        </form>
        <div className={classes.foot} style={{ height: `100px` }}></div>
      </div>
    );
  }
}

ProfileEdit.propTypes = {
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

ProfileEdit.defaultProps = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  country: "",
  street: "",
  city: "",
  state: "",
  zipcode: "",
  image:"",
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
    image: user.image
  };
}

export default withRouter(
  withStyles(styles)(
    connect(
      mapStateToProps,
      { EditProfileAction, UploadImage, updateInputInfo }
    )(ProfileEdit)
  )
);
