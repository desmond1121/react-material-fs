/**
 * Created by desmond on 12/10/16.
 */
'use strict';

import React from 'react';
import Loading from './Loading';
import BottomBar from './BottomBar';
import { getFilePath } from 'actions/api';

class ImageView extends React.Component {
  constructor(props) {
    super(props);
  }
    
  render() {
    let path = this.props.uri;
    console.log('Render image of', path);
    return (
      <div>
        <div className="content-wrapper">
          <img className="image-view" src={getFilePath(path)}/>
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

ImageView.propTypes = {
  uri: React.PropTypes.string.isRequired,
  fetchFileDetail : React.PropTypes.func,
  data : React.PropTypes.string
};


export default ImageView;