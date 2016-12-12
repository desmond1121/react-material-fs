/**
 * Created by desmond on 12/10/16.
 */
'use strict';

import React from 'react';
import Loading from './Loading';
import BottomBar from './BottomBar';
import { getFilePath } from 'actions/api';

class TextView extends React.Component {
    
  render() {
    let data = this.props.data;
    let path = this.props.uri;
    let origin = this.uri;
    if (!data || !origin || (origin && origin != path)) {
      this.uri = path;
      this.props.fetchFileDetail(path);
      return (
        <Loading />
      );
    } else {
      return (
        <div className="content-page">
          <div className="content-wrapper">
            <p className="text-view">{data}</p>
          </div>
          <BottomBar>
            <a
              href={getFilePath(path)}
              className="waves-effect waves-green btn-flat bottom-bar-btn"
              download>
              Download
            </a>
          </BottomBar>
        </div>
      );
    }
  }
}

TextView.propTypes = {
  uri: React.PropTypes.string.isRequired,
  fetchFileDetail : React.PropTypes.func,
  data : React.PropTypes.string
};


export default TextView;