import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { map } from "lodash";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { getUsersGeoLocation,getUserInfo } from "../redux/actions";
import styles from "./styles/searchStyle";
import Map from "./map";
import SimpleBottomNavigation from "./simpleBottomNavigation";





class MapPage extends Component {
  constructor(props) {
    super(props);
    const payload = {};
    this.props.getUsersGeoLocation(payload).then(() => {
    });
  }


  render() {
    const { classes, geoLocation, lat, lng } = this.props;
    return (
      <div id="top">
       <Map
          //onMarkerClick={this.handleMarkerClick}
          isMarkerShown
          center={{lat:lat, lng: lng}}
          zoom={16}
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCUQjqXLGPcvOkrxO_0MNh_HouBRwlxqwA"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `700px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          geoLocation={geoLocation}
        /> 
        <div className={classes.foot} style={{ height: `100px` }}></div>
        <SimpleBottomNavigation />
      </div>
    );
  }
}

MapPage.propTypes = {
  classes: PropTypes.object.isRequired,
  
  lat: PropTypes.number,
  lng: PropTypes.number,
  geoLocation: PropTypes.array,
};

MapPage.defaultProps = {
 
  lat: 40.7104852,
  lng: -74.0063939,
  geoLocation: [],
};

function mapStateToProps({ user }) {
  return {
   
    lat: user.lat,
    lng: user.lng,
    geoLocation: user.geoLocation,
  };
}

export default withRouter(
  withStyles(styles)(
    connect(
      mapStateToProps,
      { getUsersGeoLocation }
    )(MapPage)
  )
);
