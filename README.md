[js-adjacency-matrix](http://aureooms.github.io/js-adjacency-matrix)
==

Adjacency matrix code bricks for JavaScript

[![NPM license](http://img.shields.io/npm/l/aureooms-js-adjacency-matrix.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-adjacency-matrix/master/LICENSE)
[![NPM version](http://img.shields.io/npm/v/aureooms-js-adjacency-matrix.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-adjacency-matrix)
[![Bower version](http://img.shields.io/bower/v/aureooms-js-adjacency-matrix.svg?style=flat)](http://bower.io/search/?q=aureooms-js-adjacency-matrix)
[![Build Status](http://img.shields.io/travis/aureooms/js-adjacency-matrix.svg?style=flat)](https://travis-ci.org/aureooms/js-adjacency-matrix)
[![Coverage Status](http://img.shields.io/coveralls/aureooms/js-adjacency-matrix.svg?style=flat)](https://coveralls.io/r/aureooms/js-adjacency-matrix)
[![Dependencies Status](http://img.shields.io/david/aureooms/js-adjacency-matrix.svg?style=flat)](https://david-dm.org/aureooms/js-adjacency-matrix#info=dependencies)
[![devDependencies Status](http://img.shields.io/david/dev/aureooms/js-adjacency-matrix.svg?style=flat)](https://david-dm.org/aureooms/js-adjacency-matrix#info=devDependencies)
[![Code Climate](http://img.shields.io/codeclimate/github/aureooms/js-adjacency-matrix.svg?style=flat)](https://codeclimate.com/github/aureooms/js-adjacency-matrix)
[![NPM downloads per month](http://img.shields.io/npm/dm/aureooms-js-adjacency-matrix.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-adjacency-matrix)
[![GitHub issues](http://img.shields.io/github/issues/aureooms/js-adjacency-matrix.svg?style=flat)](https://github.com/aureooms/js-adjacency-matrix/issues)
[![Inline docs](http://inch-ci.org/github/aureooms/js-adjacency-matrix.svg?branch=master&style=shields)](http://inch-ci.org/github/aureooms/js-adjacency-matrix)

Can be managed through [jspm](https://github.com/jspm/jspm-cli),
[duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower),
[ender](https://github.com/ender-js/Ender),
[jam](https://github.com/caolan/jam),
[spm](https://github.com/spmjs/spm),
and [npm](https://github.com/npm/npm).

## Install

### jspm
```terminal
jspm install github:aureooms/js-adjacency-matrix
# or
jspm install npm:aureooms-js-adjacency-matrix
```
### duo
No install step needed for duo!

### component
```terminal
component install aureooms/js-adjacency-matrix
```

### bower
```terminal
bower install aureooms-js-adjacency-matrix
```

### ender
```terminal
ender add aureooms-js-adjacency-matrix
```

### jam
```terminal
jam install aureooms-js-adjacency-matrix
```

### spm
```terminal
spm install aureooms-js-adjacency-matrix --save
```

### npm
```terminal
npm install aureooms-js-adjacency-matrix --save
```

## Require
### jspm
```js
let adjacencymatrix = require( "github:aureooms/js-adjacency-matrix" ) ;
// or
import adjacencymatrix from 'aureooms-js-adjacency-matrix' ;
```
### duo
```js
let adjacencymatrix = require( "aureooms/js-adjacency-matrix" ) ;
```

### component, ender, spm, npm
```js
let adjacencymatrix = require( "aureooms-js-adjacency-matrix" ) ;
```

### bower
The script tag exposes the global variable `adjacencymatrix`.
```html
<script src="bower_components/aureooms-js-adjacency-matrix/js/dist/adjacency-matrix.min.js"></script>
```
Alternatively, you can use any tool mentioned [here](http://bower.io/docs/tools/).

### jam
```js
require( [ "aureooms-js-adjacency-matrix" ] , function ( adjacencymatrix ) { ... } ) ;
```