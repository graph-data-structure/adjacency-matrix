'use strict';

(function () {

	'use strict';

	var definition = function definition(exports, undefined) {

		/* js/src/Matrix */
		(function (exports) {

			/* js/src/Matrix/References.js */

			var References = function References() {

				this.v = [];
				this.e = [];
			};

			/**
    * O(n²), amortized O(n)
    * @param {label} label a label for the vertex to add
    * @return {vertex} a vertex reference
    */
			References.prototype.vadd = function (label) {
				var _this = this;

				var len = this.e.length;
				var ref = [len, label];

				// add a vertex
				this.v.push(ref);

				// add a row
				this.e.push((function () {
					var _e$push = [];
					var _iteratorNormalCompletion = true;
					var _didIteratorError = false;
					var _iteratorError = undefined;

					try {
						for (var _iterator = _this.v[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
							var v = _step.value;

							_e$push.push([null, null, -1]);
						}
					} catch (err) {
						_didIteratorError = true;
						_iteratorError = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion && _iterator['return']) {
								_iterator['return']();
							}
						} finally {
							if (_didIteratorError) {
								throw _iteratorError;
							}
						}
					}

					return _e$push;
				})());

				// add a column (undirected graph:(i,j) = (j,i))
				for (var j = 0; j < len; ++j) {
					this.e[j].push(this.e[len][j]);
				}return ref;
			};

			/**
    * O(n²), amortized O(n)
    * Fast if removing vertices in LIFO order.
    * @param {vertex} v is a vertex reference
    */
			References.prototype.vdel = function (v) {

				// id to delete
				var i = v[0];

				var len = this.v.length;

				// last id
				var j = len - 1;

				if (i < j) {

					// swap deleted row and column
					// with last row and column

					// move vertex reference
					this.v[i] = this.v[j];

					// change vertex id
					this.v[i][0] = i;

					// move column
					for (var k = 0; k < i; ++k) {
						this.e[k][i] = this.e[k][j];
					}for (var k = i; k < j; ++k) {
						this.e[k][i] = this.e[k + 1][j];
					} // move row
					for (var k = 0; k < i; ++k) {
						this.e[i][k] = this.e[j][k];
					}for (var k = i; k < j; ++k) {
						this.e[i][k] = this.e[j][k + 1];
					}
				}

				// remove last vertex
				this.v.splice(j, 1);

				// remove last row
				this.e.splice(j, 1);

				// remove last column
				// NB : after removing row k < len - 1 = j
				for (var k = 0; k < j; ++k) {
					this.e[k].splice(j, 1);
				}
			};

			/**
    * O(1)
    * @param {vertex} u is a vertex reference
    * @param {vertex} v is a vertex reference
    * @param {weight} w
    * @return {edge} an edge reference
    */
			References.prototype.eadd = function (u, v, w) {

				var i = u[0],
				    j = v[0];

				this.e[i][j][0] = u;
				this.e[i][j][1] = v;
				this.e[i][j][2] = w;

				return this.e[i][j];
			};

			/**
    * O(1)
    * @param {edge} e is an edge reference
    */
			References.prototype.edel = function (e) {

				var i = e[0][0],
				    j = e[1][0];

				this.e[i][j][0] = null;
				this.e[i][j][1] = null;
				this.e[i][j][2] = -1;
			};

			/**
    * O(n)
    */
			References.prototype.vitr = regeneratorRuntime.mark(function callee$3$0() {
				return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
					while (1) switch (context$4$0.prev = context$4$0.next) {
						case 0:
							return context$4$0.delegateYield(this.v, 't0', 1);

						case 1:
						case 'end':
							return context$4$0.stop();
					}
				}, callee$3$0, this);
			});

			/**
    * O(n)
    */
			References.prototype.eitr = regeneratorRuntime.mark(function callee$3$0(v) {
				var i, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, e;

				return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
					while (1) switch (context$4$0.prev = context$4$0.next) {
						case 0:
							i = v[0];
							_iteratorNormalCompletion2 = true;
							_didIteratorError2 = false;
							_iteratorError2 = undefined;
							context$4$0.prev = 4;
							_iterator2 = this.e[i][Symbol.iterator]();

						case 6:
							if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
								context$4$0.next = 15;
								break;
							}

							e = _step2.value;

							if (!(e[0] === null)) {
								context$4$0.next = 10;
								break;
							}

							return context$4$0.abrupt('continue', 12);

						case 10:
							context$4$0.next = 12;
							return e;

						case 12:
							_iteratorNormalCompletion2 = true;
							context$4$0.next = 6;
							break;

						case 15:
							context$4$0.next = 21;
							break;

						case 17:
							context$4$0.prev = 17;
							context$4$0.t0 = context$4$0['catch'](4);
							_didIteratorError2 = true;
							_iteratorError2 = context$4$0.t0;

						case 21:
							context$4$0.prev = 21;
							context$4$0.prev = 22;

							if (!_iteratorNormalCompletion2 && _iterator2['return']) {
								_iterator2['return']();
							}

						case 24:
							context$4$0.prev = 24;

							if (!_didIteratorError2) {
								context$4$0.next = 27;
								break;
							}

							throw _iteratorError2;

						case 27:
							return context$4$0.finish(24);

						case 28:
							return context$4$0.finish(21);

						case 29:
						case 'end':
							return context$4$0.stop();
					}
				}, callee$3$0, this, [[4, 17, 21, 29], [22,, 24, 28]]);
			});

			References.prototype['in'] = References.prototype.eitr;
			References.prototype.out = References.prototype.eitr;

			/**
    * O(n)
    */
			References.prototype.nitr = regeneratorRuntime.mark(function callee$3$0(v) {
				var i, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, e;

				return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
					while (1) switch (context$4$0.prev = context$4$0.next) {
						case 0:
							i = v[0];
							_iteratorNormalCompletion3 = true;
							_didIteratorError3 = false;
							_iteratorError3 = undefined;
							context$4$0.prev = 4;
							_iterator3 = this.e[i][Symbol.iterator]();

						case 6:
							if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
								context$4$0.next = 15;
								break;
							}

							e = _step3.value;

							if (!(e[0] === null)) {
								context$4$0.next = 10;
								break;
							}

							return context$4$0.abrupt('continue', 12);

						case 10:
							context$4$0.next = 12;
							return e[0] === v ? e[1] : e[0];

						case 12:
							_iteratorNormalCompletion3 = true;
							context$4$0.next = 6;
							break;

						case 15:
							context$4$0.next = 21;
							break;

						case 17:
							context$4$0.prev = 17;
							context$4$0.t0 = context$4$0['catch'](4);
							_didIteratorError3 = true;
							_iteratorError3 = context$4$0.t0;

						case 21:
							context$4$0.prev = 21;
							context$4$0.prev = 22;

							if (!_iteratorNormalCompletion3 && _iterator3['return']) {
								_iterator3['return']();
							}

						case 24:
							context$4$0.prev = 24;

							if (!_didIteratorError3) {
								context$4$0.next = 27;
								break;
							}

							throw _iteratorError3;

						case 27:
							return context$4$0.finish(24);

						case 28:
							return context$4$0.finish(21);

						case 29:
						case 'end':
							return context$4$0.stop();
					}
				}, callee$3$0, this, [[4, 17, 21, 29], [22,, 24, 28]]);
			});

			/**
    * O(n²)
    */
			References.prototype.aeitr = regeneratorRuntime.mark(function callee$3$0() {
				var len, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, v, i, _e, j, e;

				return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
					while (1) switch (context$4$0.prev = context$4$0.next) {
						case 0:
							len = this.v.length;
							_iteratorNormalCompletion4 = true;
							_didIteratorError4 = false;
							_iteratorError4 = undefined;
							context$4$0.prev = 4;
							_iterator4 = this.v[Symbol.iterator]();

						case 6:
							if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
								context$4$0.next = 23;
								break;
							}

							v = _step4.value;
							i = v[0];
							_e = this.e[i];
							j = i;

						case 11:
							if (!(j < len)) {
								context$4$0.next = 20;
								break;
							}

							e = _e[j];

							if (!(e[0] === null)) {
								context$4$0.next = 15;
								break;
							}

							return context$4$0.abrupt('continue', 17);

						case 15:
							context$4$0.next = 17;
							return e;

						case 17:
							++j;
							context$4$0.next = 11;
							break;

						case 20:
							_iteratorNormalCompletion4 = true;
							context$4$0.next = 6;
							break;

						case 23:
							context$4$0.next = 29;
							break;

						case 25:
							context$4$0.prev = 25;
							context$4$0.t0 = context$4$0['catch'](4);
							_didIteratorError4 = true;
							_iteratorError4 = context$4$0.t0;

						case 29:
							context$4$0.prev = 29;
							context$4$0.prev = 30;

							if (!_iteratorNormalCompletion4 && _iterator4['return']) {
								_iterator4['return']();
							}

						case 32:
							context$4$0.prev = 32;

							if (!_didIteratorError4) {
								context$4$0.next = 35;
								break;
							}

							throw _iteratorError4;

						case 35:
							return context$4$0.finish(32);

						case 36:
							return context$4$0.finish(29);

						case 37:
						case 'end':
							return context$4$0.stop();
					}
				}, callee$3$0, this, [[4, 25, 29, 37], [30,, 32, 36]]);
			});

			exports.References = References;
		})(exports['Matrix'] = {});
		return exports;
	};
	if (typeof exports === 'object') {
		definition(exports);
	} else if (typeof define === 'function' && define.amd) {
		define('aureooms-js-adjacency-matrix', [], function () {
			return definition({});
		});
	} else if (typeof window === 'object' && typeof window.document === 'object') {
		definition(window['adjacencymatrix'] = {});
	} else console.error('unable to detect type of module to define for aureooms-js-adjacency-matrix');
})();