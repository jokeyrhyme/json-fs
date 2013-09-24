/*jslint es5:true, indent:2, maxlen:80, node:true*/
/*global suite, test, suiteSetup, suiteTeardown, setup, teardown*/ // Mocha
'use strict';

// Node.JS standard modules

var path;
path = require('path');

// 3rd-party modules

var chai, assert, sinon, temp;

chai = require('chai');
chai.use(require('sinon-chai'));
assert = require('chai').assert;
sinon = require('sinon');

temp = require('temp');

// custom modules

// promise-bound anti-callbacks

// this module

suite('main module', function () {

  test('requires without issue', function () {
    var FSBuilder = require(path.join('..', 'lib', 'fsbuilder'));
    assert.isFunction(FSBuilder, 'got Function');
  });

});

suite('main object', function () {
  var /*FSBuilder,*/ tempDir;

  suiteSetup(function (done) {
//    FSBuilder = require(path.join('..', 'lib', 'fsbuilder'));
    temp.track();
    temp.mkdir('fsbuilder', function (err, dirPath) {
      if (err) {
        throw err;
      }
      tempDir = dirPath;
      process.chdir(tempDir);
      done();
    });
  });

//  test('', function () {
//  });

});
