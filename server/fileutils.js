/**
 * Created by desmond on 12/4/16.
 */
'use strict';

const fs = require('fs');
const ft = require('./constants');

const getExt = (name) => name.substr(name.lastIndexOf('.') + 1);

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

const getFname = (path) => {
  let pathFixed = path;
  if (path.endsWith('/')) {
    pathFixed = path.slice(0, -1);
  }
  return pathFixed.substr(pathFixed.lastIndexOf('/') + 1);
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
  let flist = [];
  list.forEach(item => {
    let itemPath = path + item;
    let stat = fs.statSync(itemPath);
    flist.push({
      type: mapFileType(item, stat),
      path: itemPath,
      name: getFname(itemPath),
      size: stat.size,
      mtime: stat.mtime
    });
  });
  return {
    root: global.rootPath,
    path,
    list: flist
  };
};

