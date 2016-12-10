/**
 * Created by desmond on 12/4/16.
 */
'use strict';

const fs = require('fs');
const path = require('path');
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

exports.getDirFiles = (dirPath) => {
  let list = fs.readdirSync(dirPath);
  let flist = [];
  list.forEach(item => {
    let itemPath = path.join(dirPath, item);
    let stat = fs.statSync(itemPath);
    flist.push({
      type: mapFileType(item, stat),
      name: getFname(itemPath),
      size: stat.size,
      mtime: stat.mtime
    });
  });
  return {
    list: flist
  };
};

