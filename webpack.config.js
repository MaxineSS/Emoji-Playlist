const path = require('path')
const SRC = path.join(__dirname, 'client/src')
const DIST = path.join(__dirname, 'client/dist')

module.exports = {
  mode: 'development',
  entry: `${SRC}/index.js`,
  output: {
    filename: 'main.js',
    path: DIST
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          },
        },
      }
    ]
  }
}