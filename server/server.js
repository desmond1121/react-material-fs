/**
 * Created by desmond on 12/3/16.
 * @flow
 */
"use strict";

const fs = require('fs');
const http = require('http');
const net = require('net');
const url = require('url');

const root = '/Users/desmond/CodeFiles';

const getDir = (url) => {
  let dir = root + url;
  if (!dir.endsWith('/')) {
    dir += '/';
  }
  return dir;
};

const getDirFiles = (path)  => {
  let list = fs.readdirSync(path);
  let stat = [];
  list.forEach(item => {
    let itemPath = path + item;
    stat.push({
      isDir: fs.statSync(itemPath).isDirectory(),
      path: itemPath
    });
  });
  return stat;
};

// Create an HTTP tunneling proxy
const server = http.createServer();
server.on('request', (req, res) => {
  let path = getDir(req.url);
  try {
    let list = getDirFiles(path);
    // console.log(getDirFiles(req.url));
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(JSON.stringify(list));
  } catch (e) {
    if (e.code === 'ENOENT') {
      res.writeHead(404, `No such file or directory: \"${path}\"`);
    } else {
      res.writeHead(400, `Read file \"${path}\" error!`);
    }
    res.end();
  }
})
// now that proxy is running
server.listen(2333);
