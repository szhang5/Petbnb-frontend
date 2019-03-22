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
import {CreatePetProfileAction} from "../redux/actions"
import styles from "./styles/profileStyle";

class CreatPet extends Component {

  

  render() {
   const {classes,uid  } = this.props;

    return (
      <div>
         
        <h1>Pet Page</h1>
            <Button
          variant="outlined"
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
           onClick={()=>{
             // console.log(this.props.uid);
             CreatePetProfileAction(this.props.uid)}}
          >
            Add
        </Button>
       
            
      </div>
       
      
    );
  }
}

CreatPet.propTypes = {
  classes: PropTypes.object.isRequired,
 uid:PropTypes.number.isRequired,
};

CreatPet.defaultProps = {

};

function mapStateToProps({ user }) {
  return {
    uid: user.uid,

   
  };
}

export default withRouter(
  withStyles(styles)(
    connect(
      mapStateToProps,
      { CreatePetProfileAction }
    )(CreatPet)
  )
);
