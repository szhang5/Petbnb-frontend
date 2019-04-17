import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getNewNotification } from "../redux/actions";
import { FailureNotification, SuccessNotification } from '../common/components/Messages/';
// import asyncPoll from 'react-async-poll';


class NotificationWrapper extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
  	var self = this;
  	if (self.props.userType === 0) {
  		setInterval(function() {
  		  self.props.getNewNotification(self.props.uid);
  		}, 5000);
  	}
  }

  render() {
    const { sitterPosts,pets,uid } = this.props;
    return (
      <div>
        <FailureNotification />
      	<SuccessNotification />
      </div>
    );
  }
}

NotificationWrapper.propTypes = {
};

NotificationWrapper.defaultProps = {
};

function mapStateToProps({ user }) {
  return {
    uid : user.uid,
    userType: user.user_type,
  };
}

export default connect(
  mapStateToProps,
  { getNewNotification }
)(NotificationWrapper);