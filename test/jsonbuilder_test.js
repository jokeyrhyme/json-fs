/*jslint es5:true, indent:2, maxlen:80, node:true*/
/*global suite, test, suiteSetup, suiteTeardown, setup, teardown*/ // Mocha
/*jslint nomen:true*/ // Node.JS global __dirname
'use strict';

// Node.JS standard modules

var fs, path;
fs = require('fs');
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

temp.track();

suite('JSONBuilder module', function () {

  test('requires without issue', function () {
    var JSONBuilder = require(path.join('..', 'lib', 'jsonbuilder'));
    assert.isFunction(JSONBuilder, 'got Function');
  });

});

suite('JSONBuilder object', function () {
  var JSONBuilder, tempDir;

  suiteSetup(function (done) {
    JSONBuilder = require(path.join('..', 'lib', 'jsonbuilder'));
    temp.mkdir('jsonbuilder', function (err, dirPath) {
      if (err) {
        throw err;
      }
      tempDir = dirPath;
      process.chdir(tempDir);
      done();
    });
  });

  test('call build() before setSource()', function () {
    assert.throws(function () {
      var jsonbuilder = new JSONBuilder();
      jsonbuilder.build();
    }, Error, 'no source');
  });

});

suite('jsonBuilder.setSource()', function () {
  var JSONBuilder, jsonBuilder;

  suiteSetup(function () {
    JSONBuilder = require(path.join('..', 'lib', 'fsbuilder'));
    jsonBuilder = new JSONBuilder();
  });

  test('setSource() with no param', function () {
    assert.throws(function () {
      jsonBuilder.setSource();
    }, Error, 'not Array or Object');
  });

  test('setSource() with null', function () {
    assert.throws(function () {
      jsonBuilder.setSource(null);
    }, Error, 'not Array or Object');
  });

  test('setSource() with String', function () {
    assert.doesNotThrow(function () {
      jsonBuilder.setSource({});
    });
  });

});

suite('jsonBuilder.build()', function () {
  var JSONBuilder, jsonBuilder;

  suiteSetup(function () {
    JSONBuilder = require(path.join('..', 'lib', 'jsonbuilder'));
    jsonBuilder = new JSONBuilder();
  });

  test('with non-existant source path', function (done) {
    jsonBuilder.setSource(path.join(__dirname, 'path', 'to', 'nowhere'));
    jsonBuilder.build(function (err) {
      assert.instanceOf(err, Error);
      assert.equal(err.message, 'bad source path');
      done();
    });
  });

  suite('from temporary source path', function () {
    var tempDir;

    setup(function (done) {
      temp.mkdir('jsonbuilder', function (err, dirPath) {
        if (err) {
          throw err;
        }
        tempDir = dirPath;
        process.chdir(tempDir);
        done();
      });
    });

    test('with Null file', function (done) {
      fs.writeFile(path.join(tempDir, 'abc.null.txt'), 'null', function (err) {
        assert.isNull(err);
        done();
      });
    });

  });

});

