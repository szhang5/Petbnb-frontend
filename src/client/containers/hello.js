import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SitterPost from "./sitter_post";
import { getPost, getUsersGeoLocation,getPetInfo } from "../redux/actions";

class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.props.getPost();
    this.props.getUsersGeoLocation();
    //this.props.getPetInfo(uid);  
  }

  render() {
    const { posts,pets,uid } = this.props;
    return (
      <div>
        <h1>Home</h1>
        <SitterPost posts={posts} uid={uid} />   
      </div>
    );
  }
}

HelloWorld.propTypes = {
  posts: PropTypes.array,
  uid : PropTypes.number,
  pets : PropTypes.array,
};

HelloWorld.defaultProps = {
  posts: [],
  uid : 0,
  pets: []
};

function mapStateToProps({ post,user,pet }) {
  console.log(user)
  return {
    posts: post.posts,
    uid : user.uid,
    pets : pet.pets
  };
}

export default connect(
  mapStateToProps,
  { getPost, getUsersGeoLocation,getPetInfo }
)(HelloWorld);
