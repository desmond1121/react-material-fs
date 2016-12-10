/**
 * Created by desmond on 12/3/16.
 */
'use strict';
import React from 'react';
import FileItem from './FileItem';
import Loading from './Loading';

const ROW_ITEM = 6;

class Page extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let fileList = this.props.fileList;
    let path = this.props.path;
    if (!fileList) {
      this.props.fetchPathDetail(path);
      return (
        <Loading />
      );
    } else {
      let rows = [];
      let rowCount = fileList.length / ROW_ITEM;
      for (let i = 0; i < rowCount; i++) {
        let start = i * ROW_ITEM;
        let end = start + ROW_ITEM;
        rows.push(this._renderRow(fileList.slice(start, end), i, start));
      }
      return (
        <div className="folder-page">
          {rows}
        </div>
      );
    }
  }
  
  _renderRow(pathList, key, start) {
    return (
      <div key={key} className="row">
        {
          pathList.map((item, index) => {
            return (
              <div key={start + index}
                   className="col s12 m2">
                <FileItem
                  data={item}
                />
              </div>);
          })
        }
      </div>);
  }
}

Page.propTypes = {
  path: React.PropTypes.string.isRequired,
  fetchPathDetail : React.PropTypes.func,
  fileList : React.PropTypes.array
};

export default Page;