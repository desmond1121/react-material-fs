/**
 * Created by desmond on 12/3/16.
 */
'use strict';
import React from 'react';
import File from './File';

class Page extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    console.log('Location ', this.props.location);
    let pathDetail = this.props.pathDetail;
    let path = this.props.location.pathname;
    if (!pathDetail) {
      this.props.fetchPathDetail(path);
      return (
        <a className="waves-effect btn">Loading!</a>
      );
    } else {
      return (
        <div>
          {
            pathDetail.map((item, index) => (
              <File
                key={index}
                name={item.path}
                type={item.type}
              />
            ))
          }
        </div>
      );
    }
  }
}

Page.propTypes = {
  fetchPathDetail : React.PropTypes.func,
  pathDetail : React.PropTypes.array
};

export default Page;