import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sayHelloAgain } from '../redux/actions';
import { Link } from 'react-router-dom';

class SayHelloAgain extends Component {
  componentDidMount() {
    this.props.sayHelloAgain();
  }

  render() {
    console.log(this.props.hello);
    const { message } = this.props.hello;
    console.log(message)
    if(message) {
        return (
          <div>
          {message}
          </div>
      );
    } 
    return (
        <div>
        loading...
        </div>
      );
    
  }
}

function mapStateToProps({ hello }) {
  return {
    hello
  };
}

export default connect(mapStateToProps, { sayHelloAgain })(SayHelloAgain);