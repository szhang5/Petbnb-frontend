import React from "react";
import PropTypes from "prop-types";
import { map } from "lodash";
import moment from "moment";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import classnames from "classnames";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Snackbar from '@material-ui/core/Snackbar';
import FormControlLabel from "@material-ui/core/FormControlLabel";

import styles from "./styles/sitter_postStyle";
import TextField from "@material-ui/core/TextField";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { createTransaction } from "../redux/actions";
import Avatar from '@material-ui/core/Avatar';


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

class SitterPost extends React.Component {
  state = {
    expanded: false,
    open: false,
    btn_disable :false,
    selectedPetIds: {},
    avai_start_date:"",
    avai_end_date:""
  };

  constructor(props) {
    super(props);
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  };


  handleOpen = (sitterid) => {
    this.setState({ 
      ...this.state,
      open: true,
      sitterid: sitterid,
    });
  };

  handleClose = () => {
    this.setState({ 
      ...this.state,
      open: false
     });
  };

  submitRequest = (e) =>{
    
    this.setState({ 
      ...this.state,
      open: false,
      // btn_disable: true,
     });

    e.preventDefault();
    let arr = [];
    console.log(this.state.selectedPetIds);
    for (var key in this.state.selectedPetIds) {
      if(this.state.selectedPetIds[key] === true) {
        arr.push(key);
      }
    }
    this.props.createTransaction(this.state.sitterid, arr,this.state.avai_start_date,this.state.avai_end_date).then(() => {
      //alert("succeed")
      window.location="/transaction";
    });
    this.setState({
      expanded: false,
      open: false,
      btn_disable :false,
      selectedPetIds: {},
      //avai_start_date:"",
     // avai_end_date:""
    });
  }

  addPetToState = (e) => {
    const petid = e.target.value;
    if(petid in this.state.selectedPetIds) {
      this.setState({
        selectedPetIds: {
          ...this.state.selectedPetIds,
          [petid]: !this.state.selectedPetIds[petid],
        }
      })
    } else {
      this.setState({
        selectedPetIds: {
          ...this.state.selectedPetIds,
          [petid]: true,
        }
      })
    }
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  // 
  // addPetToState = (petid) => {
  //   console.log(petid)
  //   // const petid = e.target.value;
  //   if(petid in this.state.selectedPetIds) {
  //     this.setState({
  //       selectedPetIds: {
  //         ...this.state.selectedPetIds,
  //         [petid]: !this.state.selectedPetIds[petid],
  //       }
  //     })
  //   } else {
  //     this.setState({
  //       selectedPetIds: {
  //         ...this.state.selectedPetIds,
  //         [petid]: true,
  //       }
  //     })
  //   }
  // }

  render() {
    const { classes, posts, pets, user_type, balance } = this.props;
    const defaultImage = "https://res.cloudinary.com/zoey1111/image/upload/v1550020987/profile.png";

    return (
      <div>
        {map(posts, (post, key) => {  
          return (
            <Card className={classes.card} key={post.sitterid}>
              <CardContent>
                <Grid container spacing={24}>
                  <Grid item xs={3}>
                    <img
                      className={classes.bigAvatar}
                      src={post.image? post.image : defaultImage}
                    />  
                  </Grid>
                  <Grid item xs={6}>
                    <h5 className={classes.content}>{post.firstname} {post.lastname}</h5>
                  </Grid>
                  <Grid item xs={3}>
                    <h5 className={classes.price}>${post.hour_rate}/day</h5>
                  </Grid>
                </Grid>
                <h6 className={classes.address}>{post.city}, {post.state}, {post.zip}</h6>
                <h5 className={classes.tit}>Description: </h5>
                  <h6 className={classes.con}>{post.description}</h6>
                  <h5 className={classes.tit}>Availablity: </h5>
                  <h6 className={classes.con}> {moment(post.avai_start_date).format("L")} - {moment(post.avai_end_date).format("L")}</h6>
                {user_type==1&&<Button
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    className={classes.button}
                    onClick={() => this.handleOpen(post.sitterid)}
                  >
                   Send Your Request
                  </Button>}
              </CardContent>
            </Card>
            
          );
        })}
         <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Send Your Request</DialogTitle>
          <DialogContent>
            <DialogContentText color="primary" style={{marginBottom: '15px'}}>
            Your current balance is : {balance} Petcoin
            </DialogContentText>
            <DialogContentText>
             Which pet?
            </DialogContentText>
            {map(pets, (pet, key) => {
               return (
                 <div key={pet.petid} className={classes.requestContainer} > 
                 <Avatar src={pet.image? pet.image : defaultImage} className={classes.bigAvatar} />
                 <h3 style={{marginLeft: '15px',fontWeight:'400'}}>{pet.petname}</h3>
                 <FormControlLabel
                    control={<Checkbox value={pet.petid.toString()} color="primary" onClick={this.addPetToState} />} // () => this.addPetToState(pet.petid)
                    style={{position: 'absolute',right:'10px'}} 
                  />
                </div>
               );
             })} 
             <TextField
            id="outlined-date_from"
            label="Start From"
            type="date"
            name="avai_start_date"
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            fullWidth
            variant="outlined"
            value={this.state.avai_start_date}
            onChange={this.handleChange("avai_start_date")}
            margin="normal"
          />

          <TextField
            id="outlined-date_to"
            label="To"
            type="date"
            name="avai_end_date"
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            fullWidth
            variant="outlined"
            value={this.state.avai_end_date}
            onChange={this.handleChange("avai_end_date")}
            margin="normal"
          />
          </DialogContent>
          <DialogActions>
            <Button 
              onClick={this.handleClose} 
              color="primary"
              style={{position: 'absolute',left:'10px'}} 
              >
              Cancel
            </Button>
            <Button onClick={this.submitRequest} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

SitterPost.propTypes = {
  classes: PropTypes.object.isRequired,
  pets : PropTypes.array,
  user_type : PropTypes.number,
  balance: PropTypes.number
};

SitterPost.defaultProps = {
  pets: [],
  user_type:0,
  balance:0
};

function mapStateToProps({ pet,user }) {
  console.log(pet)
  return {
    pets : pet.pets,
    user_type : user.user_type,
    balance : user.balance
  };
}

export default withRouter(
  withStyles(styles)(
    connect(
      mapStateToProps,
      { createTransaction }
    )(SitterPost)
  )
);