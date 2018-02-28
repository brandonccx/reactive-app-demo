import uuid from 'uuid/v4';
import update from 'immutability-helper';
import { ADD_APP, UPDATE_STATUS } from '../actions/actionTypes';
import { AppStatus } from '../constants';

export const apps = (state = [], action) => {
  switch (action.type) {
    case ADD_APP:
      return update(state, {$push: [{
        id: uuid(),
        name: action.name,
        status: AppStatus.STOPPED
      }]});
    case UPDATE_STATUS:
      const index = state.findIndex(app => app.id === action.id);
      return update(state, {[index]: {
        status: {$set: action.status}
      }});
    default:
      return state;
  }
};
