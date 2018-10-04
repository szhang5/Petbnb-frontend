import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sayHello } from '../redux/actions';
import { Link } from 'react-router-dom';

class SayHello extends Component {
  componentDidMount() {
    this.props.sayHello();
  }

  render() {
    return (
      <div>
        {this.props}
      </div>
    );
  }
}

function mapStateToProps({ blogs }) {
  return { blogs };
}

export default connect(mapStateToProps, { sayHello })(SayHello); // shortcut of mapDispachToProps.