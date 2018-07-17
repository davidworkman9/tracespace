# what's that gerber?

[![version][npm-badge]][npm]

> Identify Gerber and drill files by filename

Have you got a bunch of Gerber files lying around without any idea what they're for? We've all been there. `whats-that-gerber` is here to help.

Part of the [tracespace][] collection of PCB visualization tools.

[tracespace]: https://github.com/tracespace/tracespace
[npm]: https://www.npmjs.com/package/whats-that-gerber
[npm-badge]: https://img.shields.io/npm/v/whats-that-gerber.svg?style=flat-square&maxAge=3600

## install

```shell
npm install --save whats-that-gerber
# or
yarn add whats-that-gerber
```

## usage

Pass `whatsThatGerber` an array of filenames from a PCB, and it will give you back an object keyed by filename with the best guess it can make for each file, or `null` if the file appears not to be a Gerber / drill file.

```js
const whatsThatGerber = require('whats-that-gerber')

const filenames = ['my-board-F_Cu.gbr', 'my-board-B_Cu.gbr', 'foo.bar']
const typeByFilename = whatsThatGerber(filenames)
// {
//   'my-board-F_Cu.gbr': {id: 'tcu', type: 'copper', side: 'top'},
//   'my-board-B_Cu.gbr': {id: 'bcu', type: 'copper', side: 'bottom'},
//   'foo.bar': null
// }
```

### layer types and names

There are 12 available layer types, were a type is an object of the format:

```js
{
  id: 'tcu' | 'tsm' | 'tss' | 'tsp' | 'bcu' | 'bsm' | 'bss' | 'bsp' | 'icu' | 'out' | 'drl' | 'drw',
  side: 'top' | 'bottom' | 'inner' | 'all',
  type: 'copper' | 'soldermask' | 'silkscreen' | 'solderpaste' | 'drill' | 'outline' | 'drawing',
}
```

You can get an array of all types with:

```js
const whatsThatGerber = require('whats-that-gerber')
const allLayerTypes = whatsThatGerber.getAllTypes()
```

| id    | side     | type          |
| ----- | -------- | ------------- |
| `tcu` | `top`    | `copper`      |
| `tsm` | `top`    | `soldermask`  |
| `tss` | `top`    | `silkscreen`  |
| `tsp` | `top`    | `solderpaste` |
| `bcu` | `bottom` | `copper`      |
| `bsm` | `bottom` | `soldermask`  |
| `bss` | `bottom` | `silkscreen`  |
| `bsp` | `bottom` | `solderpaste` |
| `icu` | `inner`  | `copper`      |
| `out` | `all`    | `outline`     |
| `drl` | `all`    | `drill`       |
| `drw` | `null`   | `drawing`     |

#### checking if a layer type is valid

You can check if any given string is a valid layer type with:

```js
const whatsThatGerber = require('whats-that-gerber')
const isValidType = whatsThatGerber.isValidType

const type1 = {id: 'tsm'}
const type2 = {id: 'hello'}

console.log(isValidType(type1)) // true
console.log(isValidType(type2)) // false
```

#### getting layer type from id

You can get the full type object from its ID string with:

```js
const whatsThatGerber = require('whats-that-gerber')
const getTypeById = whatsThatGerber.getTypeById

const type1 = 'tsm'
const type2 = 'hello'

console.log(getTypeById(type1)) // {id: 'tsm', side: 'top', type: 'copper'}
console.log(getTypeById(type2)) // null
```

### supported cad programs

We should be able to identify files output by the following programs:

* KiCad
* Eagle
* Altium
* Orcad
* gEDA PCB

## contributing

Please read the [Contributing Section](../README.md#contributing) of the main README for development setup instructions.

If you're adding or modifying a filetype matcher, please remember to add or modify an example filename in [`@tracespace/fixtures/gerber-filenames.json`](../fixtures/gerber-filenames.json) to ensure your change is tested.
