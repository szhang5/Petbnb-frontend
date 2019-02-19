import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import AddIcon from '@material-ui/icons/Add';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import { signOut } from "../redux/actions";
import {CreatePetProfileAction} from "../redux/actions"
import styles from "./styles/profileStyle";

class PetPage extends Component {

  

  render() {
   const {classes,uid  } = this.props;

    return (
      <div>
         
        <h1>Pet Page</h1>
        
       <div className="classes.new_pet">
       <Fab color="primary" aria-label="Add" className={classes.fab}  onClick={()=>{
             console.log(this.props.uid);
             CreatePetProfileAction(this.props.uid); 
             this.props.history.push("petprofile/edit");}}>
        <AddIcon />
      </Fab>
       </div>
       
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
};

PetPage.defaultProps = {

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
    )(PetPage)
  )
);
