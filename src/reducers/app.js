import uuid from 'uuid/v4';
import { ADD_APP, UPDATE_STATUS } from '../actions/actionTypes';

export const apps = (state = [], action) => {
  switch (action.type) {
    case ADD_APP:
      return [
        ...state,
        {
          id: uuid(),
          name: action.name,
          status: 0
        }
      ];
    case UPDATE_STATUS:
      const newState = [].concat(state);
      const index = newState.findIndex(app => app.id === action.id);
      const newApp = Object.assign({}, newState[index], {status: action.status});
      newState.splice(index, 1, newApp);
      return newState;
    default:
      return state;
  }
};
