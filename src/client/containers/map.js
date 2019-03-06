import React, { Component } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

import {MarkerWithLabel} from "react-google-maps/lib/components/addons/MarkerWithLabel";


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
              />  
            );
          })
        }
      </GoogleMap>
    );
  }
}
export default withScriptjs(withGoogleMap(Map));
