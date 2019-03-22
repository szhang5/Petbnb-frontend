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
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Grid from "@material-ui/core/Grid";
import Radio from '@material-ui/core/Radio';
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import styles from "./styles/sitter_postStyle";
import TextField from "@material-ui/core/TextField";
import Request from "./request";
import Modal from '@material-ui/core/Modal';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { getPetInfo } from "../redux/actions";
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
  };

  constructor(props) {
    super(props);
    
    this.props.getPetInfo(props.uid); 
   // this.handleClickOpen = this.handleClickOpen.bind(this);
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  };

  /*handleClickOpen(e){
    this.setState({
      open: true,
    });
  };

  handleClose = value => {
    this.setState({ selectedValue: value, open: false });
  };*/
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ 
      open: false
     });
  };

  submitRequest= () =>{
    this.setState({ 
      open: false,
      btn_disable: true,
     });
  }

  addPetToState = (e) => {
    const petid = e.target.value;
    console.log(petid)
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
    const { classes, posts, pets } = this.props;
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
                  {this.state.btn_disable==false&&<Button
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    className={classes.button}
                    onClick={this.handleOpen}
                  >
                   Send Your Request
                  </Button>}
              </CardContent>
             {/* <ExpansionPanel className={classes.expansionPanel}>
                <ExpansionPanelSummary
                  className={classes.expansionPanelSummary}
                  expandIcon={<ExpandMoreIcon />}
                >
                  <h3>Show more</h3>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails
                  className={classes.expansionPanelDetails}
          >*/}
                  
                  {/*this.state.open==true&&<Request
                        selectedValue={this.state.selectedValue}
                        //open={this.state.open}
                        //onClose={this.handleClose}
                  />*/}
                {/*</ExpansionPanelDetails>
              </ExpansionPanel>*/}
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
            <DialogContentText>
             Which pet?
            </DialogContentText>
            {map(pets, (pet, key) => {
               return (
                 <div key={pet.petid} className={classes.requestContainer} style={{display: 'flex',marginBottom: '10px',marginTop:'10px'}}> 
                 <Avatar src={pet.image? pet.image : defaultImage} className={classes.bigAvatar} style={{margin: '0'}}/>
                 <h3 style={{marginLeft: '15px',fontWeight:'400'}}>{pet.petname}</h3>
                 <FormControlLabel
                    control={<Checkbox value={pet.petid.toString()} color="primary" onClick={this.addPetToState} />} // () => this.addPetToState(pet.petid)
                    style={{position: 'absolute',right:'10px'}} 
                  />
                </div>
               );
             })} 
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
};

SitterPost.defaultProps = {
  pets: []
};

function mapStateToProps({ pet }) {
  return {
    pets : pet.pets
  };
}

export default withRouter(
  withStyles(styles)(
    connect(
      mapStateToProps,
      { getPetInfo }
    )(SitterPost)
  )
);