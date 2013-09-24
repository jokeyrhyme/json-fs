/*jslint es5:true, indent:2, maxlen:80, node:true*/
/*jslint nomen:true*/ // Node.JS global __dirname
'use strict';

// Node.JS standard modules

var path;
path = require('path');

// 3rd-party modules

// custom modules

var FSBuilder, JSONBuilder;
FSBuilder = require(path.join(__dirname, 'fsbuilder'));
JSONBuilder = require(path.join(__dirname, 'jsonbuilder'));

// promise-bound anti-callbacks

// this module

// exports

module.exports = {
  FSBuilder: FSBuilder,
  JSONBuilder: JSONBuilder
};
