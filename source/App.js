/**
 * Created by desmond on 12/3/16.
 */
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Router, Route, browserHistory } from 'react-router';
import FolderContainer from './containers/FolderContainer';
import TextViewContainer from './containers/TextViewContainer';
import { Provider } from 'react-redux';
import { FileType } from 'store/constants';
import configureStore from './store/configStore.dev';

require('jquery');
require('materialize-css');
require('stylesheet/main.scss');

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let location = this.props.location;
    let path = location.pathname;
    let type = location.query.type ? location.query.type : FileType.DIRECTORY;
    console.log('Location', location);
    console.log('Type', type);
    let component = type == FileType.DIRECTORY ?
      <FolderContainer /> : <TextViewContainer />;
    console.log('Render component', type == FileType.DIRECTORY ? 'Dir' : 'File');
  
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            {this._renderNav(path)}
          </div>
        </nav>
        
        <ReactCSSTransitionGroup
          component="div"
          className="content-container"
          transitionName="folder"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          {React.cloneElement(component, {
            key: path,
            uri: path
          })}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
  
  _renderNav(path) {
    let content;
    if (path == '/') {
      content = (
        <a className="breadcrumb">Root</a>
      );
    } else {
      let paths = path.split('/');
      content = paths.map((item, index) => {
        if (index < paths.length - 1) {
          return (<a key={index} className="breadcrumb">{item}</a>);
        } else {
          return (<a key={index} className="breadcrumb active">{item}</a>);
        }
      });
    }
    return (
      <div>
        {content}
        <a href="/" className="brand-logo right nav-title">Material File Server</a>
      </div>
    );
  }
}

const RouterApp = () => (
  <Provider store={configureStore({})}>
    <Router history={browserHistory}>
      <Route path="*" component={App}/>
    </Router>
  </Provider>
);

ReactDOM.render(
  <RouterApp />,
  document.getElementById('root')
);