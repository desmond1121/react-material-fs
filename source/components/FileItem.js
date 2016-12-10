/**
 * Created by desmond on 12/3/16.
 */
'use strict';

import React from 'react';
import { FileType } from '../store/constants';

const getIcon = (type) => {
  switch (type) {
    case FileType.DIRECTORY:
      return require('assets/ic_folder.png');
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
      <div className="card waves-effect" onClick={this._handleClick.bind(this)}>
        <div className="card-image file-icon">
          <img src={getIcon(this.props.data.type)} className="file-icon"/>
        </div>
        <div className="card-content">
          <p className="file-name">{this.props.data.name}</p>
        </div>
      </div>
    );
  }
  
  _handleClick() {
    console.log(this.props.data.name, 'was clicked.');
  }
}

FileItem.propTypes = {
  data : React.PropTypes.object.isRequired,
};

export default FileItem;