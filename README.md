[js-adjacency-matrix](http://aureooms.github.io/js-adjacency-matrix)
==

Adjacency matrix code bricks for JavaScript.
Follows the specification in
[js-graph-spec](https://github.com/aureooms/js-graph-spec).
Parent is [js-gn](https://github.com/aureooms/js-gn).

```js
for ( let v of V( G ) ) ... ;
```

[![License](https://img.shields.io/github/license/aureooms/js-adjacency-matrix.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-adjacency-matrix/master/LICENSE)
[![NPM version](https://img.shields.io/npm/v/@aureooms/js-adjacency-matrix.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-adjacency-matrix)
[![Bower version](https://img.shields.io/bower/v/@aureooms/js-adjacency-matrix.svg?style=flat)](http://bower.io/search/?q=@aureooms/js-adjacency-matrix)
[![Build Status](https://img.shields.io/travis/aureooms/js-adjacency-matrix.svg?style=flat)](https://travis-ci.org/aureooms/js-adjacency-matrix)
[![Coverage Status](https://img.shields.io/coveralls/aureooms/js-adjacency-matrix.svg?style=flat)](https://coveralls.io/r/aureooms/js-adjacency-matrix)
[![Dependencies Status](https://img.shields.io/david/aureooms/js-adjacency-matrix.svg?style=flat)](https://david-dm.org/aureooms/js-adjacency-matrix#info=dependencies)
[![devDependencies Status](https://img.shields.io/david/dev/aureooms/js-adjacency-matrix.svg?style=flat)](https://david-dm.org/aureooms/js-adjacency-matrix#info=devDependencies)
[![Code Climate](https://img.shields.io/codeclimate/github/aureooms/js-adjacency-matrix.svg?style=flat)](https://codeclimate.com/github/aureooms/js-adjacency-matrix)
[![NPM downloads per month](https://img.shields.io/npm/dm/@aureooms/js-adjacency-matrix.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-adjacency-matrix)
[![GitHub issues](https://img.shields.io/github/issues/aureooms/js-adjacency-matrix.svg?style=flat)](https://github.com/aureooms/js-adjacency-matrix/issues)
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
jspm install npm:@aureooms/js-adjacency-matrix
```
### duo
No install step needed for duo!

### component
```terminal
component install aureooms/js-adjacency-matrix
```

### bower
```terminal
bower install @aureooms/js-adjacency-matrix
```

### ender
```terminal
ender add @aureooms/js-adjacency-matrix
```

### jam
```terminal
jam install @aureooms/js-adjacency-matrix
```

### spm
```terminal
spm install @aureooms/js-adjacency-matrix --save
```

### npm
```terminal
npm install @aureooms/js-adjacency-matrix --save
```

## Require
### jspm
```js
let adjacencymatrix = require( "github:aureooms/js-adjacency-matrix" ) ;
// or
import adjacencymatrix from '@aureooms/js-adjacency-matrix' ;
```
### duo
```js
let adjacencymatrix = require( "aureooms/js-adjacency-matrix" ) ;
```

### component, ender, spm, npm
```js
let adjacencymatrix = require( "@aureooms/js-adjacency-matrix" ) ;
```

### bower
The script tag exposes the global variable `adjacencymatrix`.
```html
<script src="bower_components/@aureooms/js-adjacency-matrix/js/dist/adjacency-matrix.min.js"></script>
```
Alternatively, you can use any tool mentioned [here](http://bower.io/docs/tools/).

### jam
```js
require( [ "@aureooms/js-adjacency-matrix" ] , function ( adjacencymatrix ) { ... } ) ;
```

## Use


```js
let Graph = adjacencymatrix.Graph ;
// use `adjacencymatrix.DiGraph` for directed graphs

let { V , E , N } = require( "@aureooms/js-graph-theory-notation" ) ;

let G = new Graph( ) ;

let u = G.vadd( ) ;

let v = G.vadd( ) ;

let e = G.eadd( u , v ) ;

for ( let w of V( G ) ) ... ;

for ( let e of E( G ) ) ... ;

for ( let w of N( G , u ) ) ... ;

G.edel( e ) ;

G.vdel( v ) ;

G.vdel( u ) ;
```
