import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";
import { closeSuccessNotification } from '../../../redux/actions/status-notification';
import formatMessage from '../utils/format-message';
import styles from './success-notification-style';
import Notification from './../Notification';


class SuccessNotification extends Component {
  handleCloseNotification = () => {
    this.props.closeSuccessNotification();
  };

  render() {
    const { open, message, classes, isMessageHtml, autoDisappear } = this.props;
    const successMessage = formatMessage(message, isMessageHtml);
    return (
      <Notification
        notificationType="success"
        open={open}
        message={successMessage}
        autoDisappear={autoDisappear}
        handleCloseNotification={this.handleCloseNotification}
        notificationStyles={classes.successNotification}
      />
    );
  }
}

SuccessNotification.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool,
  message: PropTypes.string,
  closeSuccessNotification: PropTypes.func.isRequired,
  autoDisappear: PropTypes.bool,
  isMessageHtml: PropTypes.bool,
};

SuccessNotification.defaultProps = {
  open: false,
  message: '',
  autoDisappear: true,
  isMessageHtml: false,
};


function mapStateToProps({ common }) {
  return {
    open: common.statusNotification.success.open,
    message: common.statusNotification.success.message,
    autoDisappear: common.statusNotification.autoDisappear,
    isMessageHtml: common.statusNotification.isMessageHtml,
  };
}

export default withStyles(styles)(connect(mapStateToProps, { closeSuccessNotification })(SuccessNotification));
