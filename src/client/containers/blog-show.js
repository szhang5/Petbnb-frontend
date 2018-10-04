import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../redux/actions';
import { Link } from 'react-router-dom';

class BlogShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;

    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { blog } = this.props;

    if(!blog) {
      return (
        <div>Loading...</div>
      );
    }
    return (
      <div>
        <Link to="/" className="btn btn-secondary" >Back to blogs</Link>
        <button 
        className="btn btn-danger pull-xs-right"
        onClick={this.onDeleteClick.bind(this)}>
        Delete Posts
        </button>
        <h3>{blog.title}</h3>
        <h6>Categories: {blog.categories}</h6>
        <p>{blog.content}</p>
      </div>
    );
  }
}

function mapStateToProps( { blogs }, ownProps ) {
  return { blog: blogs[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(BlogShow);