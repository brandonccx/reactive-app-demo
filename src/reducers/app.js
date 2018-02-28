import uuid from 'uuid/v4';
import update from 'immutability-helper';
import { ADD_APP, UPDATE_STATUS, REMOVE_APP } from '../actions/actionTypes';
import { AppStatus } from '../constants';

export const apps = (state = [], action) => {
  let index;
  switch (action.type) {
    case ADD_APP:
      return update(state, {$push: [{
        id: uuid(),
        name: action.name,
        status: AppStatus.STOPPED
      }]});
    case REMOVE_APP:
      index = state.findIndex(app => app.id === action.id);
      return update(state, {$splice: [[index, 1]]});
    case UPDATE_STATUS:
      index = state.findIndex(app => app.id === action.id);
      return update(state, {[index]: {
        status: {$set: action.status}
      }});
    default:
      return state;
  }
};
