import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import AddIcon from '@material-ui/icons/Add';
import Button from "@material-ui/core/Button";
import {CreatePetProfileAction, getPetInfo} from "../redux/actions"
import PetCard from "./petCard";
import styles from "./styles/profileStyle";

class PetPage extends Component {

  componentWillMount(){
    this.props.getPetInfo(this.props.uid);
  }
  

  render() {
   const { classes, uid, pets } = this.props;

    return (
      <div>
         
        <h1>Pet Page</h1>
        
        <div>
          <Fab color="primary" aria-label="Add" className={classes.fab}  onClick={()=>{
               this.props.CreatePetProfileAction(this.props.uid); 
               this.props.history.push("petprofile/edit");}}>
          <AddIcon />
          </Fab>
        </div>

        <PetCard pets={pets}/>
      
        <Button
          variant="outlined"
          fullWidth
          color="primary"
          className={classes.button}
          onClick={() => {
            this.props.history.push("/profile");
          }}
        >
          Go back to your profile
        </Button>
      </div>
    );
  }
}

PetPage.propTypes = {
  classes: PropTypes.object.isRequired,
  uid:PropTypes.number.isRequired,
  pets: PropTypes.array,
};

PetPage.defaultProps = {
   pets: [],
   uid: 0,
};

function mapStateToProps({ pet, user }) {
  console.log(pet);
  return {
    pets: pet.pets,
    uid: user.uid,
  };
}

export default withRouter(
  withStyles(styles)(
    connect(
      mapStateToProps,
      { CreatePetProfileAction, getPetInfo }
    )(PetPage)
  )
);
