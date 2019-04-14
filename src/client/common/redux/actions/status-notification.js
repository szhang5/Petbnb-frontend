export const SET_SUCCESS_NOTIFICATION = 'common/status-notification/SET_SUCCESS_NOTIFICATION';
export const SET_FAILURE_NOTIFICATION = 'common/status-notification/SET_FAILURE_NOTIFICATION';
export const CLOSE_SUCCESS_NOTIFICATION = 'common/status-notification/CLOSE_SUCCESS_NOTIFICATION';
export const CLOSE_FAILURE_NOTIFICATION = 'common/status-notification/CLOSE_FAILURE_NOTIFICATION';

export const setSuccessNotification = (message, autoDisappear, isMessageHtml) => {
  return { type: SET_SUCCESS_NOTIFICATION, message, autoDisappear, isMessageHtml };
};

export const setFailureNotification = (message, autoDisappear, isMessageHtml) => {
  return { type: SET_FAILURE_NOTIFICATION, message, autoDisappear, isMessageHtml };
};

export const closeSuccessNotification = () => {
  return { type: CLOSE_SUCCESS_NOTIFICATION };
};

export const closeFailureNotification = () => {
  return { type: CLOSE_FAILURE_NOTIFICATION };
};
