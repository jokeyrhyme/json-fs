/*jslint es5:true, indent:2, maxlen:80, node:true*/
/*global suite, test, suiteSetup, suiteTeardown, setup, teardown*/ // Mocha
'use strict';

// Node.JS standard modules

var path;
path = require('path');

// 3rd-party modules

var chai, assert, sinon;

chai = require('chai');
chai.use(require('sinon-chai'));
assert = require('chai').assert;
sinon = require('sinon');

// custom modules

// promise-bound anti-callbacks

// this module

suite('main module', function () {

  test('requires without issue', function () {
    var jsonFs = require(path.join('..', 'lib'));
    assert.isObject(jsonFs, 'got Object');
  });

});
