'use strict';

const fs = require('fs');

module.exports = exports = {};

exports.readFile = (paths, callback) => {

  fs.readFile(paths, (err, data) => {
    if(err) return callback(err);
    return callback(null, data);
  });
};

exports.writeFile = (fileName, newBuffer, callback) => {

  fs.writeFile(fileName, newBuffer, (err, data) => {
    if(err) return callback(err);
    return callback(null, data);
  });
};