const path = require('path');

module.exports = {
  entry: {

    index: './src/index.js',
    script: './src/scripts.js',
    register: './src/register.js',
    login: './src/login.js'


  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs'),
  },
  mode: 'development'
};