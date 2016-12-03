/**
 * Created by desmond on 12/3/16.
 */
import React from 'react'

const File = (props) => (
  <div>
    <h1>{props.name}</h1>
    <h2>{props.isDir}</h2>
  </div>
);

export default File;