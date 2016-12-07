/**
 * Created by desmond on 12/4/16.
 */
'use strict';

const fs = require('fs');
const ft = require('./constants');

const getExt = (name) => name.substr(name.lastIndexOf('.')+1);

const mapFileType = (name, stat) => {
  if (stat.isDirectory()) {
    return ft.FileType.DIRECTORY;
  } else {
    let ext = getExt(name);
    switch (ext) {
      case 'png':
      case 'jpg':
      case 'jpeg':
      case 'gif':
        return ft.FileType.IMAGE;
      case 'txt':
        return ft.FileType.TEXT;
      default:
        return ft.FileType.OTHER;
    }
  }
};

exports.getDir = (root, url) => {
  let dir = root + url;
  if (!dir.endsWith('/')) {
    dir += '/';
  }
  return dir;
};

exports.getDirFiles = (path) => {
  let list = fs.readdirSync(path);
  let stat = [];
  list.forEach(item => {
    let itemPath = path + item;
    stat.push({
      type: mapFileType(item, fs.statSync(itemPath)),
      path: itemPath
    });
  });
  return stat;
};

