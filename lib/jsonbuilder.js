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

/**
 * @constructor
 * @classdesc a JSONBuilder reads from the file-system and outputs JavaScript
 *   values
 */
function JSONBuilder() {
  /**
   * the String path to the directory to read form
   * @readonly
   */
  this.source = null;
}

/** convention: convenient access to constructor */
JSONBuilder.prototype.constructor = JSONBuilder;

/**
 * @param {String} source the directory to read from
 * @throws {TypeError} source should only be a string
 */
JSONBuilder.prototype.setSource = function (source) {
  if (typeof source !== 'string' || !source.length) {
    throw new TypeError('not String path');
  }
  this.source = source;
};

/**
 * @param {JSONBuilder~buildCallback} callback for the build process.
 * @throws {Error} need to use {@link JSONBuilder#setSource} before calling
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
