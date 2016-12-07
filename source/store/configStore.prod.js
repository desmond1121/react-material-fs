/**
 * Created by desmond on 12/4/16.
 */
'use strict';

import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { createStore, applyMiddleware } from 'redux';

const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log('dispatching', action);
      let result = next(action);
      console.log('next state', store.getState());
      return result;
    };
  };
};

const enhancer = applyMiddleware(thunk, logger);

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
};