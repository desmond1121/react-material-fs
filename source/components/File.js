/**
 * Created by desmond on 12/3/16.
 */
'use strict';

import React from 'react';

const File = (props) => (
  <div className="card">
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">{props.name}</span>
      <a>{props.type}</a>
    </div>
  </div>
);

File.propTypes = {
  name : React.PropTypes.string.isRequired,
  type : React.PropTypes.number
};

export default File;