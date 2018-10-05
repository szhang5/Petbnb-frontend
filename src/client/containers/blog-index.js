import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../redux/actions';
import { Link } from 'react-router-dom';

class BlogIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPost() {
    return _.map(this.props.blogs, (blog) => {
      return (
        <li className="list-group-item" key={blog.id}>
          <Link to={`/blog/${blog.id}`}> 
            {blog.title}
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/blog/new" className="btn btn-primary">
            Add New Blog
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPost()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ blogs }) {
  return { blogs };
}

export default connect(mapStateToProps, { fetchPosts })(BlogIndex); // shortcut of mapDispachToProps.