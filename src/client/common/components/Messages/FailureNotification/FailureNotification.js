import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";
import { closeFailureNotification } from '../../../redux/actions/status-notification';
import formatMessage from '../utils/format-message';
import styles from './failure-notification-style';
import Notification from './../Notification';


class FailureNotification extends Component {
  handleCloseNotification = () => {
    this.props.closeFailureNotification();
  };

  render() {
    const { open, message, classes, isMessageHtml, autoDisappear } = this.props;
    const failureMessage = formatMessage(message, isMessageHtml);
    return (
      <Notification
        notificationType="failure"
        open={open}
        message={failureMessage}
        autoDisappear={autoDisappear}
        handleCloseNotification={this.handleCloseNotification}
        notificationStyles={classes.failureNotification}
      />
    );
  }
}

FailureNotification.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool,
  message: PropTypes.string,
  closeFailureNotification: PropTypes.func.isRequired,
  autoDisappear: PropTypes.bool,
  isMessageHtml: PropTypes.bool,
};

FailureNotification.defaultProps = {
  open: false,
  message: '',
  autoDisappear: true,
  isMessageHtml: false,
};


function mapStateToProps({ common }) {
  return {
    open: common.statusNotification.failure.open,
    message: common.statusNotification.failure.message,
    autoDisappear: common.statusNotification.autoDisappear,
    isMessageHtml: common.statusNotification.isMessageHtml,
  };
}

export default withStyles(styles)(
  connect(mapStateToProps, { closeFailureNotification })(FailureNotification)
);
