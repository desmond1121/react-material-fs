/**
 * Created by desmond on 12/3/16.
 */
'use strict';

import React from 'react';

import { Router, Route, browserHistory } from 'react-router';
import PageWrapper from './components/PageWrapper';
import { Provider } from 'react-redux';
import configureStore from './store/configStore.dev';

const App = () => (
  <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo center nav-title">Material File Server</a>
    </div>
    <div className="root">
      <Provider store={configureStore({})}>
        <Router history={browserHistory}>
          <Route path="/(:uri)" component={PageWrapper} />
        </Router>
      </Provider>
    </div>
  </nav>
);

export default App;