/**
 * Created by desmond on 12/3/16.
 */
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Router, Route, Link, browserHistory } from 'react-router';
import FolderContainer from './containers/FolderContainer';
import TextViewContainer from './containers/TextViewContainer';
import ImageView from './components/ImageView';
import { Provider } from 'react-redux';
import { FileType } from 'store/constants';
import { combinePaths } from 'store/utils';
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
    console.log('Dir', __dirname);
    let type = location.query.type ? location.query.type : FileType.DIRECTORY;

    let component = this._getCompontentFromType(parseInt(type));
  
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
  
  _getCompontentFromType(type) {
    switch (type) {
      case FileType.DIRECTORY:
        return <FolderContainer />;
      case FileType.IMAGE:
        console.log('Render image of type', type);
        return <ImageView />;
      case FileType.TEXT:
      default:
        console.log('Render text of type', type);
        return <TextViewContainer />;
    }
  }
  
  _renderNav(path) {
    let paths = path.split('/');
    paths.splice(1, 0, '/');
    if (path == '/') {
      paths.pop();
    }
    let content = paths.map((item, index) => {
      if (index == 0) {
        return (<a key={index} className="breadcrumb">{item}</a>);
      } else {
        let path = '/' + combinePaths(paths, 1, index);
        if (index < paths.length - 1) {
          return (<Link key={index} className="breadcrumb" to={path}>{item}</Link>);
        } else {
          return (<Link key={index} className="breadcrumb active" to={path}>{item}</Link>);
        }
      }
    });
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