'use strict'

var constants = require('./lib/constants')
var flatMap = require('./lib/flat-map')
var getCommonCad = require('./lib/get-common-cad')
var getMatches = require('./lib/get-matches')
var layerTypes = require('./lib/layer-types')

module.exports = whatsThatGerber
module.exports.getAllTypes = getAllTypes
module.exports.getTypeById = getTypeById
module.exports.isValidType = isValidType

Object.keys(constants).forEach(function (constantName) {
  module.exports[constantName] = constants[constantName]
})

function whatsThatGerber (filenames) {
  if (typeof filenames === 'string') filenames = [filenames]

  var matches = flatMap(filenames, getMatches)
  var commonCad = getCommonCad(matches)

  return filenames.reduce(function (result, filename) {
    var match = _selectMatch(matches, filename, commonCad)
    result[filename] = match
      ? {id: match.id, type: match.type, side: match.side}
      : null

    return result
  }, {})
}

function getAllTypes () {
  return layerTypes.map(function (layer) {
    return {id: layer.id, type: layer.type, side: layer.side}
  })
}

function getTypeById (id) {
  return (
    getAllTypes().find(function (type) {
      return type.id === id
    }) || null
  )
}

function isValidType (type) {
  return layerTypes.some(function (layer) {
    return layer.id === type.id
  })
}

function _selectMatch (matches, filename, cad) {
  var filenameMatches = matches.filter(function (match) {
    return match.filename === filename
  })

  var result = filenameMatches.find(function (match) {
    return match.cad === cad
  })

  return result || matches[0] || null
}
