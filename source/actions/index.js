/**
 * Created by desmond on 12/4/16.
 */
'use strict';

import fetch from 'isomorphic-fetch';
import { combinePath } from 'store/utils';

const url = 'http://localhost:2333';

export const thunkGetPathDetail = (path) => {
  return (dispatch) => (
    fetch(combinePath(url, path))
      .then(response => response.json())
      .then(json => dispatch(receivePathDetail(json)))
      .catch(error => console.log(error))
  );
};

export const RECEIVE_DETAILS = 'RECEIVE_DETAILS';
function receivePathDetail(detail) {
  return {
    type: RECEIVE_DETAILS,
    detail: detail
  };
}

export const thunkGetFileDetail = (path) => {
  return (dispatch) => (
    fetch(combinePath(url, path))
      .then(response => response.text())
      .then(data => dispatch(receiveFileDetail(data)))
      .catch(error => console.log(error))
  );
};

export const RECEIVE_FILE_DETAIL = 'RECEIVE_FILE_DETAIL';
function receiveFileDetail(data) {
  return {
    type: RECEIVE_FILE_DETAIL,
    data: data
  };
}

