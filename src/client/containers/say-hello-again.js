import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sayHelloAgain } from '../redux/actions';
import { Link } from 'react-router-dom';

class SayHelloAgain extends Component {
  componentDidMount() {
    this.props.sayHelloAgain();
  }

  render() {
    return (
      <div>
        Hello again Shiyun!
      </div>
    );
  }
}

function mapStateToProps({ hello }) {
  return { hello };
}

export default connect(mapStateToProps, { sayHelloAgain })(SayHelloAgain);