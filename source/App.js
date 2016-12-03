/**
 * Created by desmond on 12/3/16.
 */

import React from 'react';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, browserHistory } from 'react-router';
import Page from './component/Page';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

const App = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/(:uri)" component={Page} />
    </Router>
  </Provider>
);

export default App;