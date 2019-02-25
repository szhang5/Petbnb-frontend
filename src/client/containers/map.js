import React, { Component } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import {MarkerWithLabel} from "react-google-maps/lib/components/addons/MarkerWithLabel"


class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      map: null
    };
   console.log(this.props);
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
    const { classes, geoLocation } = this.props;
   // const markers = this.props.markers || [];
    return (
      <GoogleMap
        ref={this.mapLoaded.bind(this)}
        onDragEnd={this.mapMoved.bind(this)}
        onZoomChanged={this.zoomChanged.bind(this)}
        defaultZoom={this.props.zoom}
        defaultCenter={this.props.center}
      >
        {geoLocation.map(mark=> <Marker
          key={mark.uid}
          position={{ lat: mark.lat, lng: mark.lng }}
        >
        </Marker> 
          )}
      </GoogleMap>
    );
  }
}
export default withScriptjs(withGoogleMap(Map));
