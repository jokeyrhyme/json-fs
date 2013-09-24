/*jslint es5:true, indent:2, maxlen:80, node:true*/
'use strict';

// Node.JS standard modules

// 3rd-party modules

// custom modules

// promise-bound anti-callbacks

// this module

function FSBuilder() {
  this.source = {};
  this.output = '';
  return this;
}

FSBuilder.prototype.constructor = FSBuilder;

FSBuilder.prototype.setSource = function (source) {
  this.source = source;
};

FSBuilder.prototype.setOutput = function (output) {
  this.output = output;
};

// exports

module.exports = FSBuilder;
