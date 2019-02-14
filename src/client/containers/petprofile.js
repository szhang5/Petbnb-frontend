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
import Avatar from "@material-ui/core/Avatar";
import AvatarUpload from "./avatarupload";

import styles from "./styles/profileStyle";

class PetProfile extends Component {
  handleOnClick() {
    const { email } = this.props;
    // console.log(email);
    if (email) {
      this.props.signOut();
    }
    return this.props.history.push("/signin");
  }
  onChange(e) {
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onload = e => {
      console.log("data is:" + e.target.result);
    };
  }

  render() {
    const { name, Breed, type, color, weights, classes } = this.props;

    return (
      <div>
        <h1>Pet Profile</h1>
       
        <Avatar className={classes.bigAvatar} src="" />
      
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            disabled
            id="outlined-name-input"
            label="Name"
            defaultValue={name}
            className={classes.textField}
            margin="normal"
            fullWidth
          />
          <TextField
            id="outlined-select-pet_type"
            disabled
            label="Pet Type"
            defaultValue={type}
            className={classes.textField}
            margin="normal"
            fullWidth
          />
          <TextField
            id="outlined-select-Weight"
            disabled
            label="Weight"
            defaultValue={weights}
            className={classes.textField}
            margin="normal"
            fullWidth
          />

          <TextField
            disabled
            id="outlined-Breed-input"
            label="Breed"
            defaultValue={Breed}
            className={classes.textField}
            margin="normal"
            fullWidth
          />
          <TextField
            disabled
            id="outlined-color-input"
            label="color"
            defaultValue={color}
            className={classes.textField}
            margin="normal"
            fullWidth
          />
        </form>
        <Button
          variant="outlined"
          fullWidth
          color="primary"
          className={classes.button}
          onClick={() => {
            this.props.history.push("/profile/petprofile/edit");
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
            this.props.history.push("/profile");
          }}
        >
          Owner Profile
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

PetProfile.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
  breed: PropTypes.string,
  color: PropTypes.string,
  weight: PropTypes.string
};

PetProfile.defaultProps = {
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
    )(PetProfile)
  )
);
