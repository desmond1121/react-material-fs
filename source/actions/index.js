/**
 * Created by desmond on 12/4/16.
 */
'use strict';

import fetch from 'isomorphic-fetch';

const url = 'http://localhost:2333';

export const thunkGetPathDetail = (path) => {
  return (dispatch) => (
    fetch(url + path)
      .then(response => response.json())
      .then(json => dispatch(receivePathDetail(path, json)))
      .catch(error => console.log(error))
  );
};

export const RECEIVE_DETAILS = 'RECEIVE_DETAILS';
function receivePathDetail(path, detail) {
  return {
    type: RECEIVE_DETAILS,
    path,
    detail
  };
}

