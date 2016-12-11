/**
 * Created by desmond on 12/11/16.
 */
'use strict';

export default (store) => {
  return (next) => {
    return (action) => {
      console.log('dispatching', action);
      let result = next(action);
      console.log('next state', store.getState());
      return result;
    };
  };
};