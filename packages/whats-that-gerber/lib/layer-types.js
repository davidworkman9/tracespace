'use strict'

var c = require('./constants')

module.exports = [
  {
    id: c.ID_TOP_COPPER,
    type: c.TYPE_COPPER,
    side: c.SIDE_TOP,
    matchers: [
      {ext: 'cmp', cad: c.CAD_EAGLE_LEGACY},
      {ext: 'top', cad: [c.CAD_EAGLE_LEGACY, c.CAD_ORCAD]},
      {ext: 'gtl', cad: [c.CAD_KICAD, c.CAD_ALTIUM]},
      {ext: 'toplayer.ger', cad: c.CAD_EAGLE_OSHPARK},
      {ext: 'top.gbr', cad: c.CAD_GEDA_PCB},
      {match: /f[._]cu/, cad: c.CAD_KICAD},
      {match: /copper_top/, cad: c.CAD_EAGLE},
      {match: /top copper/, cad: null}
    ]
  },
  {
    id: c.ID_TOP_SOLDERMASK,
    type: c.TYPE_SOLDERMASK,
    side: c.SIDE_TOP,
    matchers: [
      {ext: 'stc', cad: c.CAD_EAGLE_LEGACY},
      {ext: 'tsm', cad: c.CAD_EAGLE_LEGACY},
      {ext: 'gts', cad: [c.CAD_KICAD, c.CAD_ALTIUM]},
      {ext: 'smt', cad: c.CAD_ORCAD},
      {ext: 'topsoldermask\\.ger', cad: c.CAD_EAGLE_OSHPARK},
      {ext: 'topmask\\.gbr', cad: c.CAD_GEDA_PCB},
      {match: /f[._]mask/, cad: c.CAD_KICAD},
      {match: /soldermask_top/, cad: c.CAD_EAGLE},
      {match: /top solder resist/, cad: null}
    ]
  },
  {
    id: c.ID_TOP_SILKSCREEN,
    type: c.TYPE_SILKSCREEN,
    side: c.SIDE_TOP,
    matchers: [
      {ext: 'plc', cad: c.CAD_EAGLE_LEGACY},
      {ext: 'tsk', cad: c.CAD_EAGLE_LEGACY},
      {ext: 'gto', cad: [c.CAD_KICAD, c.CAD_ALTIUM]},
      {ext: 'sst', cad: c.CAD_ORCAD},
      {ext: 'topsilkscreen\\.ger', cad: c.CAD_EAGLE_OSHPARK},
      {ext: 'topsilk\\.gbr', cad: c.CAD_GEDA_PCB},
      {match: /f[._]silks/, cad: c.CAD_KICAD},
      {match: /silkscreen_top/, cad: c.CAD_EAGLE},
      {match: /top silk screen/, cad: null}
    ]
  },
  {
    id: c.ID_TOP_SOLDERPASTE,
    type: c.TYPE_SOLDERPASTE,
    side: c.SIDE_TOP,
    matchers: [
      {ext: 'crc', cad: c.CAD_EAGLE_LEGACY},
      {ext: 'tsp', cad: c.CAD_EAGLE_LEGACY},
      {ext: 'gtp', cad: [c.CAD_KICAD, c.CAD_ALTIUM]},
      {ext: 'spt', cad: c.CAD_ORCAD},
      {ext: 'tcream\\.ger', cad: c.CAD_EAGLE_OSHPARK},
      {ext: 'toppaste\\.gbr', cad: c.CAD_GEDA_PCB},
      {match: /f[._]paste/, cad: c.CAD_KICAD},
      {match: /solderpaste_top/, cad: c.CAD_EAGLE}
    ]
  },
  {
    id: c.ID_BOTTOM_COPPER,
    type: c.TYPE_COPPER,
    side: c.SIDE_BOTTOM,
    matchers: [
      {ext: 'sol', cad: c.CAD_EAGLE_LEGACY},
      {ext: 'bot', cad: [c.CAD_EAGLE_LEGACY, c.CAD_ORCAD]},
      {ext: 'gbl', cad: [c.CAD_KICAD, c.CAD_ALTIUM]},
      {ext: 'bottomlayer.ger', cad: c.CAD_EAGLE_OSHPARK},
      {ext: 'bottom.gbr', cad: c.CAD_GEDA_PCB},
      {match: /b[._]cu/, cad: c.CAD_KICAD},
      {match: /copper_bottom/, cad: c.CAD_EAGLE},
      {match: /bottom copper/, cad: null}
    ]
  },
  {
    id: c.ID_BOTTOM_SOLDERMASK,
    type: c.TYPE_SOLDERMASK,
    side: c.SIDE_BOTTOM,
    matchers: [
      {ext: 'sts', cad: c.CAD_EAGLE_LEGACY},
      {ext: 'bsm', cad: c.CAD_EAGLE_LEGACY},
      {ext: 'gbs', cad: [c.CAD_KICAD, c.CAD_ALTIUM]},
      {ext: 'smb', cad: c.CAD_ORCAD},
      {ext: 'bottomsoldermask\\.ger', cad: c.CAD_EAGLE_OSHPARK},
      {ext: 'bottommask\\.gbr', cad: c.CAD_GEDA_PCB},
      {match: /b[._]mask/, cad: c.CAD_KICAD},
      {match: /soldermask_bottom/, cad: c.CAD_EAGLE},
      {match: /bottom solder resist/, cad: null}
    ]
  },
  {
    id: c.ID_BOTTOM_SILKSCREEN,
    type: c.TYPE_SILKSCREEN,
    side: c.SIDE_BOTTOM,
    matchers: [
      {ext: 'pls', cad: c.CAD_EAGLE_LEGACY},
      {ext: 'bsk', cad: c.CAD_EAGLE_LEGACY},
      {ext: 'gbo', cad: [c.CAD_KICAD, c.CAD_ALTIUM]},
      {ext: 'ssb', cad: c.CAD_ORCAD},
      {ext: 'bottomsilkscreen\\.ger', cad: c.CAD_EAGLE_OSHPARK},
      {ext: 'bottomsilk\\.gbr', cad: c.CAD_GEDA_PCB},
      {match: /b[._]silks/, cad: c.CAD_KICAD},
      {match: /silkscreen_bottom/, cad: c.CAD_EAGLE},
      {match: /bottom silk screen/, cad: null}
    ]
  },
  {
    id: c.ID_BOTTOM_SOLDERPASTE,
    type: c.TYPE_SOLDERPASTE,
    side: c.SIDE_BOTTOM,
    matchers: [
      {ext: 'crs', cad: c.CAD_EAGLE_LEGACY},
      {ext: 'bsp', cad: c.CAD_EAGLE_LEGACY},
      {ext: 'gbp', cad: [c.CAD_KICAD, c.CAD_ALTIUM]},
      {ext: 'spb', cad: c.CAD_ORCAD},
      {ext: 'bcream\\.ger', cad: c.CAD_EAGLE_OSHPARK},
      {ext: 'bottompaste\\.gbr', cad: c.CAD_GEDA_PCB},
      {match: /b[._]paste/, cad: c.CAD_KICAD},
      {match: /solderpaste_bottom/, cad: c.CAD_EAGLE}
    ]
  },
  {
    id: c.ID_INNER_COPPER,
    type: c.TYPE_COPPER,
    side: c.SIDE_INNER,
    matchers: [
      {ext: 'ly\\d+', cad: c.CAD_EAGLE_LEGACY},
      {ext: 'gp?\\d+', cad: [c.CAD_KICAD, c.CAD_ALTIUM]},
      {ext: 'in\\d+', cad: c.CAD_ORCAD},
      {ext: 'internalplane\\d+\\.ger', cad: c.CAD_EAGLE_OSHPARK},
      {match: /in(?:ner)?\d+[._]cu/, cad: c.CAD_KICAD}
    ]
  },
  {
    id: c.ID_OUTLINE,
    type: c.TYPE_OUTLINE,
    side: c.SIDE_ALL,
    matchers: [
      {ext: 'dim', cad: c.CAD_EAGLE_LEGACY},
      {ext: 'mil', cad: c.CAD_EAGLE_LEGACY},
      {ext: 'gml', cad: c.CAD_EAGLE_LEGACY},
      {ext: 'gm\\d+', cad: [c.CAD_KICAD, c.CAD_ALTIUM]},
      {ext: 'gko', cad: c.CAD_ALTIUM},
      {ext: 'fab', cad: c.CAD_ORCAD},
      {ext: 'boardoutline\\.ger', cad: c.CAD_EAGLE_OSHPARK},
      {ext: 'outline\\.gbr', cad: c.CAD_GEDA_PCB},
      {match: /edge[._]cuts/, cad: c.CAD_KICAD},
      {match: /profile/, cad: c.CAD_EAGLE},
      {match: /mechanical \d+/, cad: null}
    ]
  },
  {
    id: c.ID_DRILL,
    type: c.TYPE_DRILL,
    side: c.SIDE_ALL,
    matchers: [
      {ext: 'txt', cad: [c.CAD_EAGLE_LEGACY, c.CAD_ALTIUM]},
      {ext: 'xln', cad: [c.CAD_EAGLE, c.CAD_EAGLE_LEGACY, c.CAD_EAGLE_OSHPARK]},
      {ext: 'exc', cad: c.CAD_EAGLE_LEGACY},
      {ext: 'drd', cad: c.CAD_EAGLE_LEGACY},
      {ext: 'drl', cad: c.CAD_KICAD},
      {ext: 'tap', cad: c.CAD_ORCAD},
      {ext: 'fab\\.gbr', cad: c.CAD_GEDA_PCB},
      {ext: 'plated-drill\\.cnc', cad: c.CAD_GEDA_PCB},
      {match: /npth/, cad: c.CAD_KICAD}
    ]
  },
  {
    id: c.ID_DRAWING,
    type: c.TYPE_DRAWING,
    side: null,
    matchers: [
      {ext: 'pos', cad: c.CAD_KICAD},
      {ext: 'gbr', cad: null},
      {ext: 'ger', cad: null}
    ]
  }
]
