import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { EditPetProfileAction ,UpdatePetInfo, UploadPetImage, GetPetInfoById, deletePet } from "../redux/actions";
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
    value: "Small",
    label: "0~25"
  },
  {
    value: "Medium",
    label: "25~50"
  },
  {
    value: "Large",
    label: "50~100"
  },
  {
    value: "Giant",
    label: "100~200"
  }
];

const furcolors = [
  {
    value:"Gold",
    label:"Gold"

  },
  {
    value:"White",
    label:"White"

  },
  {
    value:"Black",
    label:"Black"

  }

];
const breeds=[
  {
    value:"Golden_Retriever",
    label:"Golden Retriever"

  },
  {
    value:"Affenpinscher",
    label:"Affenpinscher"

  },
  {
    value:"Alaskan_Malamute",
    label:"Alaskan Malamute"

  },
  {
    value:"German_Spitz",
    label:"German Spitz"
  }
]

const payload = {};

class PetProfileEdit extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    const { id: petid } = this.props.match.params;
    // console.log(petid);
    payload["petid"]= petid;
    this.props.GetPetInfoById(petid);
    
  }

  handleSubmit(e) {
    console.log("111");
    e.preventDefault();
    const data = new FormData(e.target);
    for (const [key, value] of data.entries()) {
      payload[key] = value;
    }
   this.props.EditPetProfileAction(payload).then(() => {
      this.props.history.push("/profile/petpage");

    });
  }

  onChange(e) {
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onload = e => {
      console.log(e.target.result);
      this.props.UploadPetImage(this.props.petid, e.target.result);
    };
  }
  handleInputChange(e){
     console.log("handlechange"+e.target);
    this.props.UpdatePetInfo(e.target.name, e.target.value);
  }

  render() {
    const {classes, birth, petname, type, breed, furcolor, weight, image} = this.props;
    const defaultImage = "https://res.cloudinary.com/zoey1111/image/upload/v1550674929/petProfileDefault.png";
    console.log(birth);
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
          onChange={e=> this.handleInputChange(e)}
        >
          <TextField
            id="outlined-name-input"
            label="Name"
            className={classes.textField}
            name="petname"
            value={petname}
            autoComplete="petname"
            margin="normal"
            fullWidth
            variant="outlined"
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
            id="outlined-select-pet_type"
            select
            label="Weight"
            className={classes.textField}
            type="text"
            name="weight"
            margin="normal"
            name="weight"
            fullWidth
            variant="outlined"
            value={weight}
            onChange={e => this.handleInputChange(e)}
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
            select
            label="Breed"
            value={breed}
            className={classes.textField}
            margin="normal"
            type="text"
            name="breed"
            fullWidth
            variant="outlined"
            onChange={e => this.handleInputChange(e)}
            SelectProps={{
              MenuProps: {
                className: classes.menu
              }
            }}
            >
            { breeds.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>


          <TextField
            id="outlined-color-input"
            select
            label="Pet Color"
            type="text"
            name="furcolor"
            value={furcolor}
            className={classes.textField}
            margin="normal"
            fullWidth
            variant="outlined"
            onChange={e => this.handleInputChange(e)}
            SelectProps={{
              MenuProps: {
                className: classes.menu
              }
            }}
          >
            {furcolors.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
            </TextField>

         <TextField
            id="outlined-date_from"
            label="birth"
            type="date"
            name="birth"
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            fullWidth
            variant="outlined"
            value={birth}  
            margin="normal"
          />

          <Button
          variant="outlined"
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
              this.props.history.push("/profile/petpage");
            }}
          >
            Cancel
          </Button>
        </form>
         <Button
            variant="outlined"
            fullWidth
            color="primary"
            className={classes.button}
            onClick={() => {
              this.props.deletePet(this.props.petid).then(()=>{
                this.props.history.push("/profile/petpage");
              })
            }}
          >
            Delete
          </Button>
      </div>
    );
  }
}

PetProfileEdit.propTypes = {
  classes: PropTypes.object.isRequired,
  birth: PropTypes.string,
  petname: PropTypes.string,
  petid:PropTypes.number,
  type: PropTypes.string,
  weight: PropTypes.string,
  breed: PropTypes.string,
  furcolor: PropTypes.string,
  weight: PropTypes.string,
  image:PropTypes.string,

 
};

PetProfileEdit.defaultProps = {
    petid:1,
    birth:"",
    petname:"",
    type: "",
    breed: "",
    furcolor: "",
    weight: "",
    image:"",
};

function mapStateToProps({ pet }) {
  console.log(pet);
  return {
    petid: pet.petid,
    birth: pet.birth,
    petname: pet.petname,
    type: pet.type,
    breed: pet.breed,
    furcolor: pet.furcolor,
    weight: pet.weight,
    image:pet.image,
  };
}

export default withRouter(
  withStyles(styles)(
    connect(
      mapStateToProps,
      { EditPetProfileAction, UpdatePetInfo, UploadPetImage, GetPetInfoById, deletePet }
    )(PetProfileEdit)
  )
);
