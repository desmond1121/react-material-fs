module.exports = {
  entry: __dirname + '/source/main.js',
  output: {
    path: __dirname + '/build',
    publicPath: '/build/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }, {
        test: /\.css$/,
        loader: 'style!css'
      }, {
        test: /\.js/,
        loader: 'babel-loader',
        include: __dirname + '/source',
        query: {
          presets: ['es2015', 'react']
        }
      }, {
        test: /\.(ttf|eot|svg|jpg|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader?name=[name]-[md5:hash:6].[ext]"
      }, {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      }
    ]
  },
  resolve: {
    root: __dirname,
    alias: {
      assets : 'source/assets',
      actions : 'source/actions',
      store : 'source/store',
      stylesheet : 'source/stylesheet'
    }
  },
  devServer: {
    historyApiFallback: true,
  }
};
