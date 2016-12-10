/**
 * Created by desmond on 12/10/16.
 */
'use strict';

import { connect } from 'react-redux';
import TextView from '../components/TextView';
import { thunkGetFileDetail } from '../actions';

const mapStateToProps = (state) => {
  return {
    data : state.fileReducer.data
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFileDetail : (path) => dispatch(thunkGetFileDetail(path))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TextView);