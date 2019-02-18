import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { EditProfileAction } from "../redux/actions";

import styles from "./styles/profileStyle";

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
const weights = [
  {
    value: "25",
    label: "0~25"
  },
  {
    value: "50",
    label: "25~50"
  },
  {
    value: "100",
    label: "50~100"
  },
  {
    value: "200",
    label: "100~200"
  }
];

class PetProfileEdit extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    pet_type: ""
  };

  handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const payload = {};
    for (const [key, value] of data.entries()) {
      payload[key] = value;
    }
    // console.log(payload);
    this.props.EditProfileAction(payload).then(() => {
      this.props.history.push("/petprofile");
    });
  }


  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  onChange(e) {
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onload = e => {
      console.log("data is:" + e.target.result);
    };
  }

  render() {
    const { name, Breed, color, weight, classes } = this.props;

    return (
      <div>
        <h1>Edit Pet Profile</h1>
        <form
          className={classes.container}
          noValidate
          autoComplete="off"
          onSubmit={e => this.handleSubmit(e)}
        >
          <TextField
            id="outlined-name-input"
            label="Name"
            className={classes.textField}
            type="name"
            name="name"
            defaultValue={name}
            autoComplete="name"
            margin="normal"
            fullWidth
          />

          <TextField
            id="outlined-select-pet_type"
            select
            label="Pet Type"
            className={classes.textField}
            type="type"
            name="pet_type"
            margin="normal"
            fullWidth
            value={this.state.pet_type}
            onChange={this.handleChange("pet_type")}
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
            id="outlined-select-Weight"
            select
            label="Weight"
            className={classes.textField}
            type="weight"
            name="pet_weight"
            margin="normal"
            fullWidth
            value={this.state.weights}
            onChange={this.handleChange("weights")}
            SelectProps={{
              MenuProps: {
                className: classes.menu
              }
            }}
          >
            {weights.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
            
          </TextField>

          <TextField
            id="outlined-Breed-input"
            label="Breed"
            defaultValue={Breed}
            className={classes.textField}
            margin="normal"
            type="Breed"
            name="Breed"
            autoComplete="Breed"
            fullWidth
          />
          <TextField
            id="outlined-color-input"
            label="color"
            defaultValue={color}
            className={classes.textField}
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
  name: PropTypes.string,
  type: PropTypes.string,
  breed: PropTypes.string,
  color: PropTypes.string,
  weight: PropTypes.string
};

PetProfileEdit.defaultProps = {
  name: "",
  type: "",
  breed: "",
  color: "",
  weight: ""
};

function mapStateToProps({ user }) {
  // console.log(user);
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
      { EditProfileAction }
    )(PetProfileEdit)
  )
);
