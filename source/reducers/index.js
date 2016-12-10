/**
 * Created by desmond on 12/3/16.
 */
'use strict';

import { combineReducers } from 'redux';
import * as Actions from '../actions';

function pageReducer(state = {}, action) {
  switch (action.type) {
    case Actions.RECEIVE_DETAILS:
      return Object.assign({}, action.detail);
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  pageReducer
});

export default rootReducer;
