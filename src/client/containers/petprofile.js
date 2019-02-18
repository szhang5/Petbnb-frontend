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

  onChange(e) {
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onload = e => {
      console.log("data is:" + e.target.result);
    };
  }

  render() {
    const { name, breed, type, color, weight, image, classes } = this.props;

    return (
      <div>
        <h1>Pet Profile</h1>
        <img src ={ image } className={classes.img}/>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            disabled
            id="outlined-name-input"
            label="name"
            value={name}
            className={classes.textField}
            margin="normal"
            fullWidth
          />
          <TextField
            id="outlined-select-pet_type"
            disabled
            label="type"
            value={type}
            className={classes.textField}
            margin="normal"
            fullWidth
          />
          <TextField
            id="outlined-select-Weight"
            disabled
            label="weight"
            value={weight}
            className={classes.textField}
            margin="normal"
            fullWidth
          />

          <TextField
            disabled
            id="outlined-breed-input"
            label="breed"
            value={breed}
            className={classes.textField}
            margin="normal"
            fullWidth
          />

          <TextField
            disabled
            id="outlined-color-input"
            label="color"
            value={color}
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
      </div>
    );
  }
}

PetProfile.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
  weight: PropTypes.string,
  breed: PropTypes.string,
  color: PropTypes.string,
  image: PropTypes.string,
};

PetProfile.defaultProps = {
  name: "",
  type: "",
  weight: "",
  breed: "",
  color: "",
  image: "",
};

function mapStateToProps({ pet }) {
  return {
    name: pet.name,
    type: pet.type,
    weight: pet.weight,
    breed: pet.breed,
    color: pet.color,
    image: pet.image,
  };
}

export default withRouter(
  withStyles(styles)(
    connect(
      mapStateToProps,
    )(PetProfile)
  )
);
