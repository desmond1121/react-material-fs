/**
 * Created by desmond on 12/3/16.
 */
'use strict';
import React from 'react';
import FileItem from './FileItem';
import Loading from './Loading';
import { connect } from 'react-redux';
import { thunkGetPathDetail } from '../actions';

const mapStateToProps = (state) => {
  return {
    fileList : state.folderReducer.list
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPathDetail : (path) => dispatch(thunkGetPathDetail(path))
  };
};

const ROW_ITEM = 6;

class FolderView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    let fileList = this.state.fileList;
    let path = this.props.uri;
    let origin = this.uri;
    if (!fileList || fileList.length == 0 || origin != path) {
      this.props.fetchPathDetail(path);
      this.uri = path;
      return (
        <Loading />
      );
    } else {
      let rows = [];
      let rowCount = fileList.length / ROW_ITEM;
      for (let i = 0; i < rowCount; i++) {
        let start = i * ROW_ITEM;
        let end = start + ROW_ITEM;
        rows.push(this._renderRow.bind(this)(fileList.slice(start, end), i, start));
      }
      return (
        <div className="folder-page">
          {rows}
        </div>
      );
    }
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({
      fileList: nextProps.fileList
    });
  }
  
  _renderRow(pathList, key, start) {
    return (
      <div key={key} className="row">
        {
          pathList.map((item, index) => (
              <div key={start + index}
                   className="col s12 m2">
                <FileItem
                  uri={this.uri}
                  data={item}
                />
              </div>
          ))
        }
      </div>);
  }
}

FolderView.propTypes = {
  uri: React.PropTypes.string.isRequired,
  fetchPathDetail : React.PropTypes.func,
  fileList : React.PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(FolderView);