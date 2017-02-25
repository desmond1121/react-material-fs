/**
 * Created by desmond on 12/10/16.
 */
'use strict';

import React from 'react';
import BottomBar from './BottomBar';
import {getFilePath} from 'actions/api';

const ImageView = ({uri}) => {
  console.log('Render image of', uri);
  return (
    <div className="content-page">
      <div className="image-wrapper">
        <img className="image-view" src={getFilePath(uri)}/>
      </div>
      <BottomBar>
        <a
          href={getFilePath(uri)}
          className="waves-effect waves-green btn-flat bottom-bar-btn"
          download>
          Download
        </a>
      </BottomBar>
    </div>
  );
};

ImageView.propTypes = {
  uri: React.PropTypes.string.isRequired,
};


export default ImageView;