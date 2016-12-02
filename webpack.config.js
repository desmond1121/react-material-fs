module.exports = {
    entry: __dirname + "/source/main.js",
    output: {
        path: __dirname + '/build',
        publicPath: '/build/',
        filename: "bundle.js"
    },
    module: {
        loaders: [
          {
              test: /\.css$/, 
              loader: "style!css?modules" 
          }, {
              test: /\.js/,
              loader: 'babel-loader',
              include: __dirname + '/source',
              query: {
                presets: ['es2015', 'react']
              }
          }
        ]
    }
};
