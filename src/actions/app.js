import { AppStatus } from '../constants';
import { ADD_APP, ASYNC_UPDATE_STATUS } from './actionTypes';

export const addApp = name => ({
  type: ADD_APP,
  name
});

export const startApp = id => ({
  type: ASYNC_UPDATE_STATUS,
  id,
  status: AppStatus.RUNNING
});
