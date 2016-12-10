/**
 * Created by desmond on 12/10/16.
 */
'use strict';

export const combinePath = (path1, path2) => {
  path1 = path1.endsWith('/') ? path1 : (path1 + '/');
  path2 = path2.startsWith('/') ? path2.slice(1) : path2;
  return path1 + path2;
};
