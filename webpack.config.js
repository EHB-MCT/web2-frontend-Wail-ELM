const {
  watch
} = require('fs');
const path = require('path');

module.exports = {
  entry: {

    index: './src/index.js',
    script: './src/scripts.js',
    register: './src/register.js',
    login: './src/login.js',
    PlayChallenge: './src/PlayChallenge.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs'),
  },
  mode: 'development',
  watch: true
};