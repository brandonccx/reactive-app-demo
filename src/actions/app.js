import { AppStatus } from '../constants';
import {
  ADD_APP,
  ASYNC_UPDATE_STATUS,
  ASYNC_REMOVE_STATUS
} from './actionTypes';

export const addApp = name => ({
  type: ADD_APP,
  name
});

export const removeApp = id => ({
  type: ASYNC_REMOVE_STATUS,
  id
});

export const startApp = id => ({
  type: ASYNC_UPDATE_STATUS,
  id,
  status: AppStatus.RUNNING
});

export const stopApp = id => ({
  type: ASYNC_UPDATE_STATUS,
  id,
  status: AppStatus.STOPPED
});
