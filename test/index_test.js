'use strict'

// Node.JS standard modules

var path
path = require('path')

// 3rd-party modules

var assert

assert = require('chai').assert

// custom modules

// promise-bound anti-callbacks

// this module

suite('main module', function () {
  test('requires without issue', function () {
    var jsonFs = require(path.join('..', 'lib'))
    assert.isObject(jsonFs, 'got Object')
  })
})

suite('main object', function () {
  var jsonFs = require(path.join('..', 'lib'))

  test('exposes FSBuilder constructor', function () {
    var FSBuilder = require(path.join('..', 'lib', 'fsbuilder'))
    assert.equal(jsonFs.FSBuilder, FSBuilder, 'FSBuilder available')
  })

  test('exposes JSONBuilder constructor', function () {
    var JSONBuilder = require(path.join('..', 'lib', 'jsonbuilder'))
    assert.equal(jsonFs.JSONBuilder, JSONBuilder, 'JSONBuilder available')
  })
})
