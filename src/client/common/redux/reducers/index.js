import { combineReducers } from 'redux';
import statusNotification from './status-notification';

const common = combineReducers({
  statusNotification,
});

export default common;
