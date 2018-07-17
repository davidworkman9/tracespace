'use strict'

module.exports = {
  // layer ids
  ID_TOP_COPPER: 'tcu',
  ID_TOP_SOLDERMASK: 'tsm',
  ID_TOP_SILKSCREEN: 'tss',
  ID_TOP_SOLDERPASTE: 'tsp',
  ID_BOTTOM_COPPER: 'bcu',
  ID_BOTTOM_SOLDERMASK: 'bsm',
  ID_BOTTOM_SILKSCREEN: 'bss',
  ID_BOTTOM_SOLDERPASTE: 'bsp',
  ID_INNER_COPPER: 'icu',
  ID_OUTLINE: 'out',
  ID_DRILL: 'drl',
  ID_DRAWING: 'drw',

  // layer types
  TYPE_COPPER: 'copper',
  TYPE_SOLDERMASK: 'soldermask',
  TYPE_SILKSCREEN: 'silkscreen',
  TYPE_SOLDERPASTE: 'solderpaste',
  TYPE_DRILL: 'drill',
  TYPE_OUTLINE: 'outline',
  TYPE_DRAWING: 'drawing',

  // board sides
  SIDE_TOP: 'top',
  SIDE_BOTTOM: 'bottom',
  SIDE_INNER: 'inner',
  SIDE_ALL: 'all',

  // cad packages
  CAD_KICAD: 'kicad',
  CAD_ALTIUM: 'altium',
  CAD_EAGLE_LEGACY: 'eagle-legacy',
  CAD_EAGLE_OSHPARK: 'eagle-oshpark',
  CAD_EAGLE: 'eagle',
  CAD_GEDA_PCB: 'geda-pcb',
  CAD_ORCAD: 'orcad'
}
