import React, { Component } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";


class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      map: null
    };
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
  render() {
    const { classes, posts } = this.props;
    const markers = this.props.markers || [];
    return (
      
      <GoogleMap
        ref={this.mapLoaded.bind(this)}
        onDragEnd={this.mapMoved.bind(this)}
        onZoomChanged={this.zoomChanged.bind(this)}
        defaultZoom={this.props.zoom}
        defaultCenter={this.props.center}
      >
        {this.props.isMarkerShown && (
          <Marker
            position={{ lat: 40.710198, lng: -74.0073001 }}
            onClick={this.props.onMarkerClick}
          />
         
       
         
        )}
       
         <Marker
          position={{ lat: 40.709558, lng: -74.003873 }}
          onClick={this.props.onMarkerClick}
        />
         <Marker
        position={{ lat: 40.7101763, lng: -74.0092265 }}
        onClick={this.props.onMarkerClick}
      />
      </GoogleMap>
    );
  }
}
export default withScriptjs(withGoogleMap(Map));
