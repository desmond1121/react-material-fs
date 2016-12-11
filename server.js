/**
 * Created by desmond on 12/3/16.
 */
'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');
const fileUtils = require('./server/fileutils');

if (process.argv.length < 3) {
  console.log('You must specify a root directory by command line!');
  process.exit();
} else if (process.argv.length > 3) {
  console.log('Too much arguments!');
  process.exit();
}

const root = process.argv[2];
const staticPrefix = '/static';

global.rootPath = root;
const host = process.env.npm_package_config_host || 'localhost';
const port = process.env.npm_package_config_port || '8333';

// Create an HTTP tunneling proxy
const server = http.createServer();
server.on('request', (req, res) => {
  console.log('Request come', req.url);
  let filePath;
  
  function serveHtml() {
    if (req.url == '/') {
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=UTF-8'
      });
      res.end(fs.readFileSync(path.join(__dirname, 'index.html')));
    } else if (req.url.startsWith('/build')) {
      res.end(fs.readFileSync(path.join(__dirname, req.url)));
    } else {
      res.writeHead(404);
      res.end();
    }
  }
  
  function serveResource() {
    filePath = path.join(root, req.url.slice(staticPrefix.length));
    console.log('Request', filePath);
  
    let stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      fileUtils.writePathDetailToRes(filePath, res);
    } else if (stat.isFile()) {
      fileUtils.writeFileToRes(filePath, res);
    }
  }
  
  if (req.url.startsWith(staticPrefix)) {
    try {
      serveResource();
    } catch (e) {
      if (e.code === 'ENOENT') {
        res.writeHead(404, `No such file or directory: \"${filePath}\"`);
      } else {
        res.writeHead(400, `Read file \"${filePath}\" error!`);
      }
      res.end();
    }
  } else {
    serveHtml();
  }
  
});

// now that proxy is running
server.listen(port, host);
console.log(`Serve dist folder(${root} in http://${host}:${port}/, press Ctrl+C to stop.`);
