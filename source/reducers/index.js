/**
 * Created by desmond on 12/3/16.
 */
'use strict';

import { combineReducers } from 'redux';
import * as Actions from '../actions';

function apiReducer(state = {}, action) {
  switch (action.type) {
    case Actions.RECEIVE_DETAILS:
      return {
        path: action.path,
        detail : action.detail
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  apiReducer
});

export default rootReducer;
