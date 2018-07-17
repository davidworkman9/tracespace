'use strict'

var assert = require('assert')

var cadFilenames = require('@tracespace/fixtures/gerber-filenames.json')
var whatsThatGerber = require('.')

var EXPECTED_TYPE_PROPS = {
  drw: {type: 'drawing', side: null},
  tcu: {type: 'copper', side: 'top'},
  tsm: {type: 'soldermask', side: 'top'},
  tss: {type: 'silkscreen', side: 'top'},
  tsp: {type: 'solderpaste', side: 'top'},
  bcu: {type: 'copper', side: 'bottom'},
  bsm: {type: 'soldermask', side: 'bottom'},
  bss: {type: 'silkscreen', side: 'bottom'},
  bsp: {type: 'solderpaste', side: 'bottom'},
  icu: {type: 'copper', side: 'inner'},
  out: {type: 'outline', side: 'all'},
  drl: {type: 'drill', side: 'all'}
}

describe('whats-that-gerber', function () {
  it('should default to null', function () {
    var result = whatsThatGerber('foobar')

    assert.deepEqual(result, {foobar: null})
  })

  it('should have a list of all layer types', function () {
    var EXPECTED_TYPES = Object.keys(EXPECTED_TYPE_PROPS)
    var allTypes = whatsThatGerber.getAllTypes()

    assert.equal(allTypes.length, EXPECTED_TYPES.length)
    allTypes.forEach(function (layerType) {
      var expected = EXPECTED_TYPE_PROPS[layerType.id]

      assert.deepEqual(layerType, {
        id: layerType.id,
        type: expected.type,
        side: expected.side
      })
    })
  })

  it('should be able to get a layer type by ID', function () {
    var EXPECTED_TYPES = Object.keys(EXPECTED_TYPE_PROPS)

    EXPECTED_TYPES.forEach(function (id) {
      var expected = EXPECTED_TYPE_PROPS[id]

      assert.deepEqual(whatsThatGerber.getTypeById(id), {
        id: id,
        type: expected.type,
        side: expected.side
      })
    })

    assert(whatsThatGerber.getTypeById('foo') === null)
  })

  it('should know which types are valid', function () {
    var allTypes = whatsThatGerber.getAllTypes()

    allTypes.forEach(function (type) {
      assert(
        whatsThatGerber.isValidType(type),
        'Expected ' + type.id + ' to be a valid type'
      )
    })
  })

  it('should know which types are invalid', function () {
    var invalidTypes = [{id: 'foo'}, {id: 'bar'}, {id: 'baz'}, {id: 'quux'}]

    invalidTypes.forEach(function (type) {
      assert.equal(
        whatsThatGerber.isValidType(type),
        false,
        'Expected ' + type.id + ' to not be a valid type'
      )
    })
  })

  cadFilenames.forEach(function (cadSet) {
    var cad = cadSet.cad
    var files = cadSet.files

    it('should identify ' + cad + ' files', function () {
      var result = whatsThatGerber(
        files.map(function (file) {
          return file.name
        })
      )

      files.forEach(function (file) {
        var fileResult = result[file.name]

        assert(
          fileResult || file.type == null,
          `Expected ${file.name} to be recognized as a gerber`
        )

        assert.equal(
          fileResult.id,
          file.type,
          '[' + file.name + ' > ' + fileResult.id + '], expected [' + file.type + ']'
        )
      })
    })
  })
})
