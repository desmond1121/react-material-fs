/**
 * Created by desmond on 12/4/16.
 */
'use strict';

import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { createStore, applyMiddleware } from 'redux';
import logger from './logger';

const enhancer = applyMiddleware(thunk, logger);

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
};