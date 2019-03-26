import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SitterPost from "./sitter_post";
import { getUsersGeoLocation, getPetInfo, getAllSitterPostInfo } from "../redux/actions";

class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.props.getAllSitterPostInfo();
    this.props.getUsersGeoLocation();
    this.props.getPetInfo(this.props.uid);  
  }

  render() {
    const { sitterPosts,pets,uid } = this.props;
    return (
      <div>
        <h1>Home</h1>
        <SitterPost posts={sitterPosts} uid={uid} />   
      </div>
    );
  }
}

HelloWorld.propTypes = {
  sitterPosts: PropTypes.array,
  uid : PropTypes.number,
  pets : PropTypes.array,
};

HelloWorld.defaultProps = {
  sitterPosts: [],
  uid : 0,
  pets: []
};

function mapStateToProps({ post, user, pet }) {
  return {
    sitterPosts: post.sitterPosts,
    uid : user.uid,
    pets : pet.pets
  };
}

export default connect(
  mapStateToProps,
  { getUsersGeoLocation, getPetInfo, getAllSitterPostInfo }
)(HelloWorld);
