import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import { GetUserPost } from "../redux/actions";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import moment from "moment";


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
      showInfoIndex:'-1'
    };
    this.open= false;
   this.onToggleOpen = this.onToggleOpen.bind(this);
  }
  
  mapMoved() {
    console.log("move");
  }
  mapLoaded(map) {
    if (this.state.map != null) return;

    this.setState({ map: map });
  }
  zoomChanged() {
    console.log("zoom changed");
  }
  onToggleOpen(e) {
    this.setState({
      isOpen:true,
      showInfoIndex:e
    })
   
    this.props.GetUserPost(e).then(()=>{
    });     
  }
  onToggleClose() {
   this.setState({
     isOpen:false,
   })
  }

  render() {
    const { classes, geoLocation, sitterid, avai_end_date, avai_start_date, description,hour_rate, pet_type, pets_num, postdate } = this.props;
    const {isOpen,showInfoIndex } = this.state;
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
            <InfoWindow onCloseClick={this.onToggleClose.bind(this)}>
                <Card  >
                  <CardContent style={{ paddingTop: '0',paddingBottom:'0' }}>
                      {/*<h3>Pet type: pet_type.map((obj, index) => <PetList obj={obj} />) </h3>*/}  
                      <h3 >${hour_rate}/day</h3>
                      <h3>{description}</h3>
                      <h3>Availablity: </h3>
                      <h3> {moment(avai_start_date).format("LL")} - </h3>
                      <h3> {moment(avai_end_date).format("LL")}</h3>  
                  </CardContent>
                      <Button
                        variant="outlined"
                        color="secondary"
                        fullWidth     
                      >
                        Contact
                      </Button>
                </Card>
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
  sitterid: PropTypes.number,
  avai_end_date: PropTypes.string,
  avai_start_date: PropTypes.string,
  description: PropTypes.string,
  hour_rate: PropTypes.number,
  pet_type: PropTypes.object,
  pets_num: PropTypes.number,
  postdate: PropTypes.string,
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
};
function mapStateToProps({ post }) {
  return {
    sitterid: post.sitterid,
    avai_end_date: post.avai_end_date,
    avai_start_date: post.avai_start_date,
    description: post.description,
    hour_rate: post.hour_rate,
    pet_type: post.pet_type,
    pets_num: post.pets_num,
    postdate: post.postdate
  };
}

export default withRouter(
  withScriptjs( connect(
    mapStateToProps,
    {GetUserPost }
  )(withGoogleMap(Map)))
   
);

