/**
 * Created by desmond on 12/10/16.
 */
'use strict';

import React from 'react';
import PageContainer from '../containers/PageContainer';

const PageWrapper = (props) => {
  console.log('Render location:', props.location);
  return (
      <PageContainer path={props.location.pathname}/>
  );
};

export default PageWrapper;

