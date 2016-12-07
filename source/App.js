/**
 * Created by desmond on 12/3/16.
 */
'use strict';

import React from 'react';

import { Router, Route, browserHistory } from 'react-router';
import Page from './containers/Page';
import { Provider } from 'react-redux';
import configureStore from './store/configStore.dev';

const App = () => (
  <Provider store={configureStore({})}>
    <Router history={browserHistory}>
      <Route path="/(:uri)" component={Page} />
    </Router>
  </Provider>
);

export default App;