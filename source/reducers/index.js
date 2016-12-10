/**
 * Created by desmond on 12/3/16.
 */
'use strict';

import { combineReducers } from 'redux';
import * as Actions from '../actions';

function folderReducer(state = {}, action) {
  switch (action.type) {
    case Actions.RECEIVE_DETAILS:
      return Object.assign({}, action.detail);
    default:
      return state;
  }
}

function fileReducer(state = {}, action) {
  switch (action.type) {
    case Actions.RECEIVE_FILE_DETAIL:
      return {
        data : action.data
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  folderReducer,
  fileReducer
});

export default rootReducer;
