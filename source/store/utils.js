/**
 * Created by desmond on 12/10/16.
 */
'use strict';

export const combinePath = (path1, path2) => {
  path1 = path1.endsWith('/') ? path1 : (path1 + '/');
  path2 = path2.startsWith('/') ? path2.slice(1) : path2;
  return path1 + path2;
};

export const combinePaths = (array, start, end) => {
  if (start == end) {
    return array[start];
  }
  let path = '';
  for (let i = start; i <= end; i++) {
    let arg = array[i];
    if (arg.startsWith('/')) {
      arg = arg.slice(1);
    } else if (!arg.endsWith('/')) {
      arg = arg.concat('/');
    }
    path = path.concat(arg);
  }
  return path;
};
