import * as actions from '../actions/status-notification';

const initialState = {
  success: {
    open: false,
    message: 'Success!',
  },
  failure: {
    open: false,
    message: 'Failed!',
  },
  autoDisappear: true,
  isMessageHtml: false,
};

const setStatusNotification = (message) => {
  return { open: true, message };
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.SET_SUCCESS_NOTIFICATION: {
      return {
        ...state,
        success: setStatusNotification(action.message),
        failure: initialState.failure,
        autoDisappear: action.autoDisappear && initialState.autoDisappear,
        isMessageHtml: action.isMessageHtml || initialState.isMessageHtml,
      };
    }
    case actions.SET_FAILURE_NOTIFICATION: {
      return {
        ...state,
        success: initialState.success,
        failure: setStatusNotification(action.message),
        autoDisappear: action.autoDisappear && initialState.autoDisappear,
        isMessageHtml: action.isMessageHtml || initialState.isMessageHtml,
      };
    }
    case actions.CLOSE_SUCCESS_NOTIFICATION: {
      return {
        ...state,
        success: initialState.success,
        autoDisappear: initialState.autoDisappear,
        isMessageHtml: initialState.isMessageHtml,
      };
    }
    case actions.CLOSE_FAILURE_NOTIFICATION: {
      return {
        ...state,
        failure: initialState.failure,
        autoDisappear: initialState.autoDisappear,
        isMessageHtml: initialState.isMessageHtml,
      };
    }
    default:
      return state;
  }
}
