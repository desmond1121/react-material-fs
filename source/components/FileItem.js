/**
 * Created by desmond on 12/3/16.
 */
'use strict';

import React from 'react';
import { Link } from 'react-router';
import { combinePath } from 'store/utils';
import { FileType } from 'store/constants';

const getIcon = (type) => {
  switch (type) {
    case FileType.DIRECTORY:
      return require('assets/ic_folder.png');
    case FileType.IMAGE:
      return require('assets/ic_image.png');
    default:
      return require('assets/ic_file.png');
  }
};

class FileItem extends React.Component {
  
  constructor(props) {
    super(props);
  }
    
  render() {
    return (
      <Link to={{
        pathname: combinePath(this.props.uri, this.props.data.name),
        query: { type : this.props.data.type }
      }}>
        <div className="card waves-effect">
          <div className="card-image file-icon">
            <img src={getIcon(this.props.data.type)} className="file-icon"/>
          </div>
          <div className="card-content">
            <p className="file-name">{this.props.data.name}</p>
          </div>
        </div>
      </Link>
    );
  }
}

FileItem.propTypes = {
  uri : React.PropTypes.string.isRequired,
  data : React.PropTypes.object.isRequired,
};

export default FileItem;