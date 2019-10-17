module.exports = {
  devtool: false,
  entry: './index.js',
  mode: 'development',
  target: 'web',
  devServer: {
    contentBase: 'dist',
    overlay: true,
    writeToDisk: true // false = no lock
    //inline: false,  // false = no lock
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  }
}
