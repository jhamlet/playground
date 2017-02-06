import webpack from 'webpack';
import { join as joinPath } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const { env: ENV } = process;
const { PROJECT_DIR } = ENV;

module.exports = {

  context:   PROJECT_DIR,

  // debug:     true,
  //
  // bail:      false,
  //
  // colors:    true,
  //
  // progress:  true,
  //--------------------------------------------------------------------------
  // Entry Points and Output
  //--------------------------------------------------------------------------
  entry: {
    app: './entry/app.js'
  },

  output: {
    path:          joinPath(PROJECT_DIR, 'dist'),
    filename:      '[name].js',
    // publicPath:    'localhost',
    chunkFilename: '[name].js'
  },

  devtool: 'source-map',
  //--------------------------------------------------------------------------
  // Loaders
  //--------------------------------------------------------------------------
  module: {

    loaders: [
      { test: /\.less/, loader: 'style/useable!css!less' },
      { test: /\.css$/, exclude: /node_modules/, loader: 'style/useable!css' },
      { test: /\.js$/, exclude: [ /node_modules/, ], loader: 'babel-loader' }
    ]

  },

  resolve: {
    modules: [
      joinPath(PROJECT_DIR, 'src'),
      joinPath(PROJECT_DIR, 'node_modules')
    ],
    extensions: ['.js', '.less', '.css', '.svg']
  },
  //--------------------------------------------------------------------------
  // Plugins
  //--------------------------------------------------------------------------
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Web Application',
      minify: false,
      filename: 'index.html',
      chunks: ['app']
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  //--------------------------------------------------------------------------
  // Dev Server Configuration
  //--------------------------------------------------------------------------
  devServer: {
    host: 'localhost',
    port: 8080,
    https: true,
    contentBase: PROJECT_DIR,
    // contentBase: './src',
    hot: true,
    inline: true,
    stats: {
      modules: false,
      cached: false,
      colors: true,
      chunk: false
    }
  }
};

