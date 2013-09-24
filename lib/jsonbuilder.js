/*jslint es5:true, indent:2, maxlen:80, node:true*/
'use strict';

// Node.JS standard modules

var fs, path;
fs = require('fs');
path = require('path');

// 3rd-party modules

var Q;
Q = require('q');

// custom modules

// promise-bound anti-callbacks

// this module

function JSONBuilder() {
  this.source = null;
  return this;
}

JSONBuilder.prototype.constructor = JSONBuilder;

JSONBuilder.prototype.setSource = function (source) {
  if (typeof source !== 'string' || !source.length) {
    throw new TypeError('not String path');
  }
  this.source = source;
};

/**
 * @param {JSONBuilder~buildCallback} callback for the build process.
 */
JSONBuilder.prototype.build = function (callback) {
  var dfrd;
  if (!this.source) {
    throw new Error('no source');
  }
  dfrd = Q.defer();
  fs.exists(this.source, function (isThere) {
    var err;
    if (!isThere) {
      err = new Error('bad source path');
      callback(err);
      dfrd.reject(err);
      return;
    }
    callback();
  });
  return dfrd.promise;
};

/**
 * @callback JSONBuilder~buildCallback
 * @param {Error} err
 * @param {Object|Array} result
 */

// exports

module.exports = JSONBuilder;
