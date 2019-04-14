import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import BaseIcon from '@material-ui/core/IconButton';
import Fade from '@material-ui/core/Fade';

const anchorOrigin = { vertical: 'top', horizontal: 'center' };

const Notification = (props) => {
  const { open, message, autoDisappear, handleCloseNotification, notificationStyles, notificationType } = props;
  if (autoDisappear) {
    return (
      <div>
        <Snackbar
          key={notificationType}
          anchorOrigin={anchorOrigin}
          open={open}
          onClose={handleCloseNotification}
          TransitionComponent={Fade}
          ContentProps={{ 'aria-describedby': 'message-id', className: `${notificationStyles}` }}
          message={message}
          autoHideDuration={3000}
        />
      </div>
    );
  }
  return (
    <div>
      <Snackbar
        key={notificationType}
        anchorOrigin={anchorOrigin}
        open={open}
        TransitionComponent={Fade}
        ContentProps={{ 'aria-describedby': 'message-id', className: `${notificationStyles}` }}
        message={message}
        autoHideDuration={null}
        action={[
          <BaseIcon
            key="close"
            handleOnClick={handleCloseNotification}
            dataTest={`${notificationType}-message-close-icon`}
            iconName="close"
            isIconBlock={false}
          />
        ]}
      />
    </div>
  );
};

Notification.propTypes = {
  autoDisappear: PropTypes.bool,
  handleCloseNotification: PropTypes.func.isRequired,
  notificationType: PropTypes.string.isRequired,
  message: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
  ]),
  notificationStyles: PropTypes.string,
  open: PropTypes.bool,
};

Notification.defaultProps = {
  autoDisappear: true,
  message: '',
  notificationStyles: '',
  open: false,
};


export default Notification;
