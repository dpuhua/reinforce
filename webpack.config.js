const path = require('path')
const nodeExternal = require('webpack-node-externals')
const UglifyESWebpackPlugin = require('uglify-es-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  // 表明node环境
  target: 'node',
  entry: {
    'app': './src/app.ts'
  },
  output: {
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', 'json', '.ts', '.tsx'],
    alias: {
      '~': path.resolve(__dirname, 'src')
    }
  },
  mode: 'none',
  externals: [
    // 不打包node的部分
    nodeExternal(),
  ],
  plugins: [
    new UglifyESWebpackPlugin(),
    new CleanWebpackPlugin()
  ],
  module: {
    unknownContextCritical: false,
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader'
        }
      }
    ]
  }
} 
