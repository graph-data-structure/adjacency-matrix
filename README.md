[@aureooms/js-adjacency-matrix](https://make-github-pseudonymous-again.github.io/js-adjacency-matrix)
==

Adjacency matrix code bricks for JavaScript.
Follows the specification in
[@graph-data-structure/specification](https://github.com/graph-data-structure/specification).
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


## Use


```js
import {Graph, DiGraph} from '@aureoms/js-adjacency-matrix';
// use `DiGraph` for directed graphs

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
