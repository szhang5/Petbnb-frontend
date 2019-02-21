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

import styles from "./styles/profileStyle";

class PetProfile extends Component {
  

  render() {
    const {classes,birth,petname,type,breed,furcolor,weight,image} = this.props;
    const defaultImage = "https://res.cloudinary.com/zoey1111/image/upload/v1550674929/petProfileDefault.png";

    return (
      <div>
        <h1>Pet Profile</h1>
        <img src ={ image? image : defaultImage } className={classes.img}/>
        <form className={classes.container} noValidate autoComplete="off">
        <TextField
            disabled
            id="outlined-name-input"
            label="Name"
            className={classes.textField}
            type="petname"
            name="petname"
            value={petname}
            autoComplete="petname"
            margin="normal"
            fullWidth
            variant="outlined"
          />

          <TextField
          disabled
            id="outlined-select-pet_type"
            
            label="Pet Type"
            className={classes.textField}
            //type="type"
            name="type"
            margin="normal"
            fullWidth
            variant="outlined"
            value={type}
            onChange={e=>types.handleInputChange(e)}
          >
            
          </TextField>
          <TextField
          disabled
            id="outlined-select-pet_type"
            
            label="Weight"
            className={classes.textField}
            type="text"
            name="weight"
            margin="normal"
            fullWidth
            variant="outlined"
            value={weight}    
          >
            
          </TextField>
          <TextField
          disabled
            id="outlined-Breed-input"
            
            label="Breed"
            value={breed}
            className={classes.textField}
            margin="normal"
            type="breed"
            name="breed"
           // autoComplete="breed"
            fullWidth
            variant="outlined"
          />

          <TextField
          disabled
            id="outlined-color-input"
            
            label="Pet Color"
            type="furcolor"
            name="furcolor"
            value={furcolor}
            className={classes.textField}
            margin="normal"
            fullWidth
            variant="outlined"
          />
         <TextField
            disabled
            id="outlined-date_from"
            label="Birth"
            type="text"
            name="birth"
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            fullWidth
            variant="outlined"
            value={birth}
           // onChange={this.handleChange("avai_start_date")}
            margin="normal"
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
            this.props.history.push("/profile/petpage");
          }}
        >
          Pet Page
        </Button>
        
      </div>
    );
  }
}

PetProfile.propTypes = {
  classes: PropTypes.object.isRequired,
  petid:PropTypes.number,
  birth:PropTypes.string,
  petname:PropTypes.string,
  type: PropTypes.string,
  weight: PropTypes.string,
  breed: PropTypes.string,
  furcolor: PropTypes.string,
  weight: PropTypes.string,
 image:PropTypes.string
};

PetProfile.defaultProps = {
  petid:2,
  birth:"",
  petname:"",
  type: "",
  breed: "",
  furcolor: "",
  weight: "",
  image:""
};

function mapStateToProps({ pet }) {
  return {
    petid:pet.petid,
    birth: pet.birth,
    petname:pet.petname,
    type: pet.type,
    breed: pet.breed,
    furcolor: pet.furcolor,
    weight: pet.weight,
    image:pet.image
  };
}

export default withRouter(
  withStyles(styles)(
    connect(
      mapStateToProps,
    )(PetProfile)
  )
);
