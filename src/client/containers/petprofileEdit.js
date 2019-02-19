 import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import styles from "./styles/profileStyle";
import { UpdatePetInfo } from "../redux/actions";


const types = [
  {
    value: "cat",
    label: "cat"
  },
  {
    value: "dog",
    label: "dog"
  }
];

class PetProfileEdit extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const payload = {};
    for (const [key, value] of data.entries()) {
      payload[key] = value;
    }
    payload["uid"] = this.props.uid;
    console.log(payload);
    // this.props.EditPetProfileAction(payload).then(() => {
    //   this.props.history.push("/petprofile");
    // });
  }

   handleInputChange(e) {
    // console.log(e.target);
    this.props.UpdatePetInfo(e.target.name, e.target.value);
  }


  render() {
    const { name, type, breed, color, weight, image, classes } = this.props;
    const defaultImage = "https://res.cloudinary.com/zoey1111/image/upload/v1550439003/berkay-gumustekin-402114-unsplash.jpg";

    return (
      <div>
        <h1>Edit Pet Profile</h1>
        <img src = { image? image: defaultImage } className={classes.img}/>
        <input type="file" name="file" onChange={e => this.onChange(e)} />;
        <form
          className={classes.container}
          noValidate
          autoComplete="off"
          onSubmit={e => this.handleSubmit(e)}
          onChange={e => this.handleInputChange(e)}
        >
          <TextField
            id="outlined-name-input"
            label="Name"
            className={classes.textField}
            type="text"
            name="name"
            value={name}
            variant="outlined"
            margin="normal"
            fullWidth
          />

          <TextField
            id="outlined-select-pet_type"
            select
            label="type"
            className={classes.textField}
            type="text"
            name="type"
            margin="normal"
            fullWidth
            variant="outlined"
            value={type}
            onChange={e => this.handleInputChange(e)}
            SelectProps={{
              MenuProps: {
                className: classes.menu
              }
            }}
          >
            {types.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id="outlined-weight-input"
            label="weight"
            value={weight}
            className={classes.textField}
            margin="normal"
            type="text"
            name="weight"
            fullWidth
            variant="outlined"
          />

          <TextField
            id="outlined-breed-input"
            label="breed"
            value={breed}
            className={classes.textField}
            margin="normal"
            type="text"
            name="breed"
            fullWidth
            variant="outlined"
          />
          <TextField
            id="outlined-color-input"
            label="color"
            value={color}
            className={classes.textField}
            margin="normal"
            type="text"
            name="color"
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
              this.props.history.push("/profile/petprofile/");
            }}
          >
            Cancel
          </Button>
        </form>
      </div>
    );
  }
}

PetProfileEdit.propTypes = {
  classes: PropTypes.object.isRequired,
  uid: PropTypes.number.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
  weight: PropTypes.string,
  breed: PropTypes.string,
  color: PropTypes.string,
  image: PropTypes.string,
};

PetProfileEdit.defaultProps = {
  name: "",
  type: "",
  breed: "",
  color: "",
  weight: "",
  image: "",
};

function mapStateToProps({ pet, user }) {
  // console.log(pet);
  return {
    uid: user.uid,
    name: pet.name,
    type: pet.type,
    breed: pet.breed,
    color: pet.color,
    weight: pet.weight,
    image: pet.image,
  };
}

export default withRouter(
  withStyles(styles)(
    connect(
      mapStateToProps,
      { UpdatePetInfo }
    )(PetProfileEdit)
  )
);
