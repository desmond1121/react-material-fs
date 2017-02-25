/**
 * Created by desmond on 12/11/16.
 */
'use strict';

export default (store) => {
  return (next) => {
    return (action) => {
      console.log('[REDUX] dispatching', action);
      let result = next(action);
      console.log('[REDUX] next state', store.getState());
      return result;
    };
  };
};