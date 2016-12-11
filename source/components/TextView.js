/**
 * Created by desmond on 12/10/16.
 */
'use strict';

import React from 'react';
import Loading from './Loading';

class TextView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
    
  render() {
    let data = this.props.data;
    let path = this.props.uri;
    let origin = this.uri;
    if (!data || (origin && origin != path)) {
      this.props.fetchFileDetail(path);
      this.uri = path;
      return (
        <Loading />
      );
    } else {
      return (
        <div className="text-wrapper">
          <p className="text-view">{data}</p>
        </div>);
    }
  }
}

TextView.propTypes = {
  uri: React.PropTypes.string.isRequired,
  fetchFileDetail : React.PropTypes.func,
  data : React.PropTypes.string
};


export default TextView;