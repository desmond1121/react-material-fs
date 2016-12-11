/**
 * Created by desmond on 12/11/16.
 */
'use strict';

import React from 'react';

const BottomBar = (props) => {
  return (
    <div className="bottom-bar fix-bottom">
      {props.children}
    </div>
  );
};

export default BottomBar;
