import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { map } from "lodash";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { SearchPost,getUsersGeoLocation,getUserInfo } from "../redux/actions";
import SitterPost from "./sitter_post";
import styles from "./styles/searchStyle";
import Map from "./map";
//const FaAnchor = require("react-icons/lib/fa/anchor");


const types = [
  {
    value: "cat",
    label: "cat"
  },
  {
    value: "dog",
    label: "dog"
  }
];
const ranges_obj = {
  "0~20": "20",
  "20~50": "50",
  "50~100": "100"
};

const ranges = map(ranges_obj, (value, key) => {
  return {
    value,
    label: key
  };
});

const number = [
  {
    value: "1",
    label: "1"
  },
  {
    value: "2",
    label: "2"
  },
  {
    value: "3",
    label: "3"
  }
];

class Search extends Component {
  constructor(props) {
    super(props);
    const payload = {};
    this.props.getUsersGeoLocation(payload).then(() => {
    });
  }

  state = {
    pet_type: "",
    hour_rate: "",
    pets_num: "",
    avai_start_date: "",
    avai_end_date: ""
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.SearchPost(this.state).then(() => {
      window.location.replace((window.location.hash = "/search#anchorId"));
    });
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes, posts, geoLocation, lat, lng } = this.props;
    return (
      <div id="top">
        <h1>Search</h1>   
       <Map
          //onMarkerClick={this.handleMarkerClick}
          isMarkerShown
          center={{lat:lat, lng: lng}}
          zoom={16}
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCUQjqXLGPcvOkrxO_0MNh_HouBRwlxqwA"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          geoLocation={geoLocation}
        /> 
        <form
          className={classes.container}
          noValidate
          autoComplete="off"
          onSubmit={e => this.handleSubmit(e)}
        >
          <TextField
            id="outlined-select-pet_type"
            select
            label="Pet Type"
            className={classes.textField}
            type="type"
            name="pet_type"
            margin="normal"
            fullWidth
            variant="outlined"
            value={this.state.pet_type}
            onChange={this.handleChange("pet_type")}
            SelectProps={{
              MenuProps: {
                className: classes.menu
              }
            }}
          >
            {types.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id="outlined-select-hour_rate"
            select
            label="Hour rate"
            className={classes.textField}
            type="rate"
            name="hour_rate"
            margin="normal"
            fullWidth
            variant="outlined"
            value={this.state.hour_rate}
            onChange={this.handleChange("hour_rate")}
            SelectProps={{
              MenuProps: {
                className: classes.menu
              }
            }}
          >
            {ranges.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id="outlined-number"
            select
            label="Pet Number"
            className={classes.textField}
            type="number"
            name="pets_num"
            value={this.state.pets_num}
            onChange={this.handleChange("pets_num")}
            margin="normal"
            fullWidth
            variant="outlined"
          >
            {number.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

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

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
            <a href="#cardpost" />
          </Button>

          <Button
            variant="outlined"
            fullWidth
            color="primary"
            className={classes.button}
            onClick={() => {
              this.props.history.push("/home");
            }}
          >
            Cancel
          </Button>
        </form>
        <div id="anchorId" className={classes.postanchor} />
        {posts.length != 0 ? (
          <SitterPost posts={posts} />    
        ) : (
          <h1 className={classes.alert}>Sorry, no match</h1>
        )}
      </div>
    );
  }
}

Search.propTypes = {
  classes: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  lat: PropTypes.number,
  lng: PropTypes.number,
  geoLocation: PropTypes.array,
};

Search.defaultProps = {
  posts: [],
  lat: 40.7104852,
  lng: -74.0063939,
  geoLocation: [],
};

function mapStateToProps({ post,user }) {
  return {
    posts: post.posts,
    lat: user.lat,
    lng: user.lng,
    geoLocation: user.geoLocation,
  };
}

export default withRouter(
  withStyles(styles)(
    connect(
      mapStateToProps,
      { SearchPost,getUsersGeoLocation }
    )(Search)
  )
);
