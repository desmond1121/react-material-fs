/**
 * Created by desmond on 12/3/16.
 */
'use strict';

const http = require('http');
const fs = require('fs');
const fileUtils = require('./fileutils');

const root = '/Users/desmond/CodeFiles';
global.rootPath = root;

// Create an HTTP tunneling proxy
const server = http.createServer();
server.on('request', (req, res) => {
  let path = fileUtils.getDir(root, req.url);
  try {
    let stat = fs.statSync(path);
    if (stat.isDirectory()) {
      let list = fileUtils.getDirFiles(path);
      res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*'
      });
      res.end(JSON.stringify(list));
    } else if (stat.isFile()){
      let list = fs.getDirFiles(path);
      res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*'
      });
      res.end(JSON.stringify(list));
    }
  } catch (e) {
    if (e.code === 'ENOENT') {
      res.writeHead(404, `No such file or directory: \"${path}\"`);
    } else {
      res.writeHead(400, `Read file \"${path}\" error!`);
    }
    res.end();
  }
});

// now that proxy is running
server.listen(2333);
console.log('Serve file in http://localhost:2333/');
