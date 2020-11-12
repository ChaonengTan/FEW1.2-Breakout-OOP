/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable semi */
const path = require('path')

module.exports = {
 entry: './src/index.js',
 output: {
 filename: 'bundle.js',
 path: path.resolve(__dirname, 'dist')
 }
}