/**
 * Created by desmond on 12/4/16.
 */
'use strict';

import { connect } from 'react-redux';
import Folder from '../components/Folder';
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

export default connect(mapStateToProps, mapDispatchToProps)(Folder);