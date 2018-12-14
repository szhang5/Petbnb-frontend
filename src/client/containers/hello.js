import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SitterPost from "./sitter_post";
import Grid from "@material-ui/core/Grid";
import { getPost } from "../redux/actions";

class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.props.getPost();
  }

  render() {
    const { posts } = this.props;
    return (
      <div>
        <h1>Home</h1>
        <SitterPost posts={posts} />
      </div>
    );
  }
}

HelloWorld.propTypes = {
  posts: PropTypes.array
};

HelloWorld.defaultProps = {
  posts: []
};

function mapStateToProps({ post }) {
  return {
    posts: post.posts
  };
}

export default connect(
  mapStateToProps,
  { getPost }
)(HelloWorld);
