/**
 * Created by desmond on 12/3/16.
 * @flow
 */

import File from './component/File';
import React from 'react';
import ReactDOM from 'react-dom';

require('materialize-css/dist/css/materialize.css');

class Demo extends React.Component {
  render() {
    return (
      <div>
        <a className="waves-effect waves-light btn">
          Hello World
        </a>
        <File />
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />,
  document.getElementById('root')
);