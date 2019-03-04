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
import './styles/map.css';
import { GetUserPost } from "../redux/actions";




function Popup(props) {

  const obj = props.text
 
  return (
    <div className='popup'>
    <div className='popup_inner'>
      <h1>{obj}</h1>
    <button onClick={props.closePopup}>123</button>
    </div>
  </div>
  )
}
const styles = theme => ({
  typography: {
    margin: theme.spacing.unit * 2,
  },
});

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
   console.log(this.props);
   this.onToggleOpen = this.onToggleOpen.bind(this);
  }
  
 
  mapMoved() {
    console.log("move");
  }
  mapLoaded(map) {
    //console.log("mapLoaded:" + JSON.stringify(map.getCenter()));
    if (this.state.map != null) return;

    this.setState({ map: map });
  }
  zoomChanged() {
    console.log("zoom changed");
  }
  onToggleOpen(e) {
    console.log("lala");
    this.setState({
      isOpen:true,
      showInfoIndex:e
    })
   
    this.props.GetUserPost(e).then(()=>{
     console.log(post);
    });
   //   this.open=true;
   
    
  }
  onToggleClose() {
    console.log("haha");
   this.setState({
     isOpen:false,
    
   })
   // this.open=!this.open;
   
 //   console.log({isOpen})
  }
   onMarkerClick = (evt) => {
    console.log("haha");
};
 
 
  handleClose = () => {
    this.setState({
      anchorEl: null,
    });
  };
  render() {
    const { classes, geoLocation, sitterid, avai_end_date, avai_start_date, description,hour_rate, pet_type, pets_num, postdate } = this.props;
    
    const { anchorEl, open,isOpen,showInfoIndex } = this.state;
    
   
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
              //  onClick={this.onToggleOpen}
                
              > 
            {isOpen &&showInfoIndex === mark.uid && <InfoWindow onCloseClick={this.onToggleClose.bind(this)}>
               <div>{mark.uid}</div>
          </InfoWindow>}
            </Marker>  
            );
          })
        }
         {/*this.state.showPopup ? 
          <Popup
            text='Close Me'
            closePopup={this.togglePopup.bind(this)}
          />
          : null
         */}
      </GoogleMap>
    );
  }
}

Map.propTypes = {
  //classes: PropTypes.object.isRequired,
  sitterid: PropTypes.string,
  avai_end_date: PropTypes.string,
  avai_start_date: PropTypes.string,
  description: PropTypes.string,
  hour_rate: PropTypes.string,
  pet_type: PropTypes.string,
  pets_num: PropTypes.string,
  postdate: PropTypes.string,
 
};

Map.defaultProps = {
  sitterid: "",
  avai_end_date: "",
  avai_start_date: "",
  description: "",
  hour_rate: "",
  pet_type: "",
  pets_num: "",
  postdate: "",
};
function mapStateToProps({ post }) {
  console.log({post})
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
  withScriptjs(
    connect(
      mapStateToProps,
      {GetUserPost }
    )(withGoogleMap(Map))
  )
);

