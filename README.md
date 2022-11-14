[@aureooms/js-adjacency-matrix](https://make-github-pseudonymous-again.github.io/js-adjacency-matrix)
==

Adjacency matrix code bricks for JavaScript.
Follows the specification in
[@aureooms/js-graph-spec](https://github.com/make-github-pseudonymous-again/js-graph-spec).
Parent is [@aureooms/js-gn](https://github.com/make-github-pseudonymous-again/js-gn).

```js
for ( let v of V( G ) ) ... ;
```

[![License](https://img.shields.io/github/license/make-github-pseudonymous-again/js-adjacency-matrix.svg)](https://raw.githubusercontent.com/make-github-pseudonymous-again/js-adjacency-matrix/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@aureooms/js-adjacency-matrix.svg)](https://www.npmjs.org/package/@aureooms/js-adjacency-matrix)
[![Tests](https://img.shields.io/github/workflow/status/make-github-pseudonymous-again/js-adjacency-matrix/ci:cover?event=push&label=tests)](https://github.com/make-github-pseudonymous-again/js-adjacency-matrix/actions/workflows/ci:cover.yml?query=branch:main)
[![Dependencies](https://img.shields.io/librariesio/github/make-github-pseudonymous-again/js-adjacency-matrix.svg)](https://github.com/make-github-pseudonymous-again/js-adjacency-matrix/network/dependencies)
[![GitHub issues](https://img.shields.io/github/issues/make-github-pseudonymous-again/js-adjacency-matrix.svg)](https://github.com/make-github-pseudonymous-again/js-adjacency-matrix/issues)
[![Downloads](https://img.shields.io/npm/dm/@aureooms/js-adjacency-matrix.svg)](https://www.npmjs.org/package/@aureooms/js-adjacency-matrix)

[![Code issues](https://img.shields.io/codeclimate/issues/make-github-pseudonymous-again/js-adjacency-matrix.svg)](https://codeclimate.com/github/make-github-pseudonymous-again/js-adjacency-matrix/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/make-github-pseudonymous-again/js-adjacency-matrix.svg)](https://codeclimate.com/github/make-github-pseudonymous-again/js-adjacency-matrix/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/make-github-pseudonymous-again/js-adjacency-matrix/main.svg)](https://codecov.io/gh/make-github-pseudonymous-again/js-adjacency-matrix)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/make-github-pseudonymous-again/js-adjacency-matrix.svg)](https://codeclimate.com/github/make-github-pseudonymous-again/js-adjacency-matrix/trends/technical_debt)
[![Documentation](https://make-github-pseudonymous-again.github.io/js-adjacency-matrix//badge.svg)](https://make-github-pseudonymous-again.github.io/js-adjacency-matrix//source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@aureooms/js-adjacency-matrix)](https://bundlephobia.com/result?p=@aureooms/js-adjacency-matrix)

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
