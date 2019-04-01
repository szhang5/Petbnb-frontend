import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { map } from "lodash";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import './styles/info.css';
import Pets from "@material-ui/icons/Pets";
import { GetUserPost,getUserInfoById } from "../redux/actions";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import moment from "moment";
import Avatar from '@material-ui/core/Avatar';
import styles from "./styles/mapStyle";
import { withStyles } from "@material-ui/core/styles";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { createTransaction } from "../redux/actions";
import Checkbox from "@material-ui/core/Checkbox";



function PetList(props) {

  const obj = props.obj
  return (
    <h3>{obj}</h3>
  )
}


class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null,
      anchorEl: null,
      isOpen: false,
      showInfoIndex:'-1',
      open:false,
      selectedPetIds: {},
    };
    //this.open= false;
   this.onToggleOpen = this.onToggleOpen.bind(this);
   console.log(this.props)
  }
  
  mapMoved() {
    // console.log("move");
  }
  mapLoaded(map) {
    if (this.state.map != null) return;

    this.setState({ map: map });
  }
  zoomChanged() {
    // console.log("zoom changed");
  }
  onToggleOpen(e) {
    this.setState({
      isOpen:true,
      showInfoIndex:e
    })
   
    this.props.GetUserPost(e); 
    this.props.getUserInfoById(e);   
  //  console.log(uid)
  }
  onToggleClose() {
   this.setState({
     isOpen:false,
   })
  }
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
    for (var key in this.state.selectedPetIds) {
      if(this.state.selectedPetIds[key] === true) {
        arr.push(key);
      }
    }
   
    this.props.createTransaction(this.state.sitterid, arr);
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

  render() {
    const { classes, geoLocation, sitterid, avai_end_date, avai_start_date, description,hour_rate, pet_type, pets_num, postdate,firstname, lastname, image,pets, user_type } = this.props;
    const {isOpen,showInfoIndex } = this.state;
    const defaultImage = "https://res.cloudinary.com/zoey1111/image/upload/v1550020987/profile.png";
    
    return (
      
      <GoogleMap
        ref={this.mapLoaded.bind(this)}
        onDragEnd={this.mapMoved.bind(this)}
        onZoomChanged={this.zoomChanged.bind(this)}
        defaultZoom={this.props.zoom}
        defaultCenter={this.props.center}
      >
        {geoLocation.map((mark,index) => {
            let iconMarker = new window.google.maps.MarkerImage(
              'https://res.cloudinary.com/real-petbnb/image/upload/v1551640322/%E7%88%AA%E5%AD%90_%E6%B0%B4%E6%BB%B4_%E4%B8%AD%E9%97%B4%E5%9C%86%E6%9C%89%E7%99%BD%E5%BA%95.png',
              null, /* size is determined at runtime */
              null, /* origin is 0,0 */
              null, /* anchor is bottom center of the scaled image */
              new window.google.maps.Size(21, 26)
            );
            return(
                <Marker
                key={mark.uid}
                position={{ lat: mark.lat, lng: mark.lng }}
                icon={iconMarker}
                onClick={()=>this.onToggleOpen(mark.uid)}                
              > 
            {isOpen &&showInfoIndex === mark.uid && 
            <InfoWindow  style={{paddingRight: '12px' }} className="info_window" onCloseClick={this.onToggleClose.bind(this)} >
                <div className="infocard" >
                  <div className={classes.info_card_content}>
                      {/*<h3>Pet type: pet_type.map((obj, index) => <PetList obj={obj} />) </h3>*/}  
                      <div className={classes.info_firstline}>
                        <Avatar className={classes.info_avatar} alt="" src={image ? image : defaultImage} />
                        <h1 className={classes.info_name}>{firstname}{" "}{lastname}</h1>
                      </div>
                      <h4 className={classes.info_content}>Price: $ {hour_rate}/day</h4>
                      <h4 className={classes.info_content}>{description}</h4>
                      <h3 className={classes.info_ava }>Availablity: </h3>
                      <h4 className={classes.info_content}> {moment(avai_start_date).format("L")} - {moment(avai_end_date).format("L")}</h4>
                     
                  </div>
                  {user_type==1&&<Button
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    className={classes.button}
                    onClick={() => this.handleOpen(sitterid)}
                    style={{fontSize:'16px'}}
                  >
                   Send Your Request
                  </Button>}
                  
                  

                  <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    fullWidth
                    aria-labelledby="form-dialog-title"
                  >
                    <DialogTitle id="form-dialog-title" >Send Your Request</DialogTitle>
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
              </InfoWindow>}
            </Marker>  
            );
          })
        }
      </GoogleMap>
    );
  }
}

Map.propTypes = {
  //classes: PropTypes.object.isRequired,
  sitterid: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
  avai_end_date: PropTypes.string,
  avai_start_date: PropTypes.string,
  description: PropTypes.string,
  hour_rate: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
  pet_type: PropTypes.object,
  pets_num: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
  postdate: PropTypes.string,
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  image: PropTypes.string,
  pets : PropTypes.array,
  user_type : PropTypes.number
  
};

Map.defaultProps = {
  sitterid: 0,
  avai_end_date: "",
  avai_start_date: "",
  description: "",
  hour_rate: 0,
  pet_type: {},
  pets_num: 0,
  postdate: "",
  firstname: "",
  lastname: "",
  image:"",
  pets: [],
  user_type:0
};
function mapStateToProps({ post,user,pet }) {
  //console.log(user.uid)
  return {
    sitterid: post.sitterid,
    avai_end_date: post.avai_end_date,
    avai_start_date: post.avai_start_date,
    description: post.description,
    hour_rate: post.hour_rate,
    pet_type: post.pet_type,
    pets_num: post.pets_num,
    postdate: post.postdate,
    firstname: user.firstname,
    lastname: user.lastname,
    image: user.image,
    pets : pet.pets,
    user_type : user.user_type
  };
}

export default withRouter(
  withScriptjs( 
    withStyles(styles)(
      connect(
    mapStateToProps,
    {GetUserPost,getUserInfoById,createTransaction }
  )(withGoogleMap(Map))))
   
);

