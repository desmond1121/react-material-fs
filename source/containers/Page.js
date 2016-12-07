/**
 * Created by desmond on 12/4/16.
 */
'use strict';

import { connect } from 'react-redux';
import Page from '../components/Page';
import { thunkGetPathDetail } from '../actions';

const mapStateToProps = (state) => {
  return {
    path: state.apiReducer.path,
    pathDetail : state.apiReducer.detail
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPathDetail : (path) => dispatch(thunkGetPathDetail(path))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);