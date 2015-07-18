"use strict";

(function () {

	"use strict";

	var definition = function definition(exports, undefined) {

		/* js/src/Edge.js */

		var Edge = function Edge(u, v) {

			this.u = u;
			this.v = v;
		};

		exports.Edge = Edge;

		/* js/src/Matrix.js */

		var Matrix = function Matrix() {

			this.V = [];
			this.E = [];
		};

		/**
   * O(n²), amortized O(n)
   * @return {vertex} a vertex reference
   */
		Matrix.prototype.vadd = function () {
			var _this = this;

			var len = this.E.length;
			var ref = new Vertex(len);

			// add a vertex
			this.V.push(ref);

			// add a row
			this.E.push((function () {
				var _E$push = [];
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = _this.V[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var v = _step.value;

						_E$push.push(new Edge(null, null));
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator["return"]) {
							_iterator["return"]();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}

				return _E$push;
			})());

			// add a column (undirected graph:(i,j) = (j,i))
			for (var j = 0; j < len; ++j) {
				this.E[j].push(this.E[len][j]);
			}return ref;
		};

		/**
   * O(n²), amortized O(n)
   * Fast if removing vertices in LIFO order.
   * @param {vertex} v is a vertex reference
   */
		Matrix.prototype.vdel = function (v) {

			// id to delete
			var i = v.id;

			var len = this.V.length;

			// last id
			var j = len - 1;

			if (i < j) {

				// swap deleted row and column
				// with last row and column

				// move vertex reference
				this.V[i] = this.V[j];

				// change vertex id
				this.V[i].id = i;

				// move column
				for (var k = 0; k < i; ++k) {
					this.E[k][i] = this.E[k][j];
				}for (var k = i; k < j; ++k) {
					this.E[k][i] = this.E[k + 1][j];
				} // move row
				for (var k = 0; k < i; ++k) {
					this.E[i][k] = this.E[j][k];
				}for (var k = i; k < j; ++k) {
					this.E[i][k] = this.E[j][k + 1];
				}
			}

			// remove last vertex
			this.V.splice(j, 1);

			// remove last row
			this.E.splice(j, 1);

			// remove last column
			// NB : after removing row k < len - 1 = j
			for (var k = 0; k < j; ++k) {
				this.E[k].splice(j, 1);
			}
		};

		/**
   * O(1)
   * @param {vertex} u is a vertex reference
   * @param {vertex} v is a vertex reference
   * @param {weight} w
   * @return {edge} an edge reference
   */
		Matrix.prototype.eadd = function (u, v) {

			var i = u.id,
			    j = v.id;

			this.E[i][j].u = u;
			this.E[i][j].v = v;

			return this.E[i][j];
		};

		/**
   * O(1)
   * @param {edge} e is an edge reference
   */
		Matrix.prototype.edel = function (e) {

			var i = e.u.id,
			    j = e.v.id;

			this.E[i][j].u = null;
			this.E[i][j].v = null;
		};

		/**
   * O(n)
   */
		Matrix.prototype.vitr = regeneratorRuntime.mark(function callee$2$0() {
			return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						return context$3$0.delegateYield(this.V, "t0", 1);

					case 1:
					case "end":
						return context$3$0.stop();
				}
			}, callee$2$0, this);
		});

		/**
   * O(n)
   */
		Matrix.prototype.iitr = regeneratorRuntime.mark(function callee$2$0(v) {
			var i, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, e;

			return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						i = v.id;
						_iteratorNormalCompletion2 = true;
						_didIteratorError2 = false;
						_iteratorError2 = undefined;
						context$3$0.prev = 4;
						_iterator2 = this.E[i][Symbol.iterator]();

					case 6:
						if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
							context$3$0.next = 15;
							break;
						}

						e = _step2.value;

						if (!(e.u === null)) {
							context$3$0.next = 10;
							break;
						}

						return context$3$0.abrupt("continue", 12);

					case 10:
						context$3$0.next = 12;
						return e;

					case 12:
						_iteratorNormalCompletion2 = true;
						context$3$0.next = 6;
						break;

					case 15:
						context$3$0.next = 21;
						break;

					case 17:
						context$3$0.prev = 17;
						context$3$0.t0 = context$3$0["catch"](4);
						_didIteratorError2 = true;
						_iteratorError2 = context$3$0.t0;

					case 21:
						context$3$0.prev = 21;
						context$3$0.prev = 22;

						if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
							_iterator2["return"]();
						}

					case 24:
						context$3$0.prev = 24;

						if (!_didIteratorError2) {
							context$3$0.next = 27;
							break;
						}

						throw _iteratorError2;

					case 27:
						return context$3$0.finish(24);

					case 28:
						return context$3$0.finish(21);

					case 29:
					case "end":
						return context$3$0.stop();
				}
			}, callee$2$0, this, [[4, 17, 21, 29], [22,, 24, 28]]);
		});

		/**
   * O(n)
   */
		Matrix.prototype.nitr = regeneratorRuntime.mark(function callee$2$0(w) {
			var _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, _step3$value, u, v;

			return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						_iteratorNormalCompletion3 = true;
						_didIteratorError3 = false;
						_iteratorError3 = undefined;
						context$3$0.prev = 3;
						_iterator3 = this.E[w.id][Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
							context$3$0.next = 16;
							break;
						}

						_step3$value = _step3.value;
						u = _step3$value.u;
						v = _step3$value.v;

						if (!(u === null)) {
							context$3$0.next = 11;
							break;
						}

						return context$3$0.abrupt("continue", 13);

					case 11:
						context$3$0.next = 13;
						return u === w ? v : u;

					case 13:
						_iteratorNormalCompletion3 = true;
						context$3$0.next = 5;
						break;

					case 16:
						context$3$0.next = 22;
						break;

					case 18:
						context$3$0.prev = 18;
						context$3$0.t0 = context$3$0["catch"](3);
						_didIteratorError3 = true;
						_iteratorError3 = context$3$0.t0;

					case 22:
						context$3$0.prev = 22;
						context$3$0.prev = 23;

						if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
							_iterator3["return"]();
						}

					case 25:
						context$3$0.prev = 25;

						if (!_didIteratorError3) {
							context$3$0.next = 28;
							break;
						}

						throw _iteratorError3;

					case 28:
						return context$3$0.finish(25);

					case 29:
						return context$3$0.finish(22);

					case 30:
					case "end":
						return context$3$0.stop();
				}
			}, callee$2$0, this, [[3, 18, 22, 30], [23,, 25, 29]]);
		});

		/**
   * O(n²)
   */
		Matrix.prototype.eitr = regeneratorRuntime.mark(function callee$2$0() {
			var len, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, v, i, _e, j, e;

			return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						len = this.V.length;
						_iteratorNormalCompletion4 = true;
						_didIteratorError4 = false;
						_iteratorError4 = undefined;
						context$3$0.prev = 4;
						_iterator4 = this.V[Symbol.iterator]();

					case 6:
						if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
							context$3$0.next = 23;
							break;
						}

						v = _step4.value;
						i = v.id;
						_e = this.E[i];
						j = i;

					case 11:
						if (!(j < len)) {
							context$3$0.next = 20;
							break;
						}

						e = _e[j];

						if (!(e.u === null)) {
							context$3$0.next = 15;
							break;
						}

						return context$3$0.abrupt("continue", 17);

					case 15:
						context$3$0.next = 17;
						return e;

					case 17:
						++j;
						context$3$0.next = 11;
						break;

					case 20:
						_iteratorNormalCompletion4 = true;
						context$3$0.next = 6;
						break;

					case 23:
						context$3$0.next = 29;
						break;

					case 25:
						context$3$0.prev = 25;
						context$3$0.t0 = context$3$0["catch"](4);
						_didIteratorError4 = true;
						_iteratorError4 = context$3$0.t0;

					case 29:
						context$3$0.prev = 29;
						context$3$0.prev = 30;

						if (!_iteratorNormalCompletion4 && _iterator4["return"]) {
							_iterator4["return"]();
						}

					case 32:
						context$3$0.prev = 32;

						if (!_didIteratorError4) {
							context$3$0.next = 35;
							break;
						}

						throw _iteratorError4;

					case 35:
						return context$3$0.finish(32);

					case 36:
						return context$3$0.finish(29);

					case 37:
					case "end":
						return context$3$0.stop();
				}
			}, callee$2$0, this, [[4, 25, 29, 37], [30,, 32, 36]]);
		});

		Matrix.prototype.edges = regeneratorRuntime.mark(function callee$2$0() {
			var _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, e;

			return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						_iteratorNormalCompletion5 = true;
						_didIteratorError5 = false;
						_iteratorError5 = undefined;
						context$3$0.prev = 3;
						_iterator5 = this.eitr()[Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
							context$3$0.next = 12;
							break;
						}

						e = _step5.value;
						context$3$0.next = 9;
						return [e.u, e.v, e];

					case 9:
						_iteratorNormalCompletion5 = true;
						context$3$0.next = 5;
						break;

					case 12:
						context$3$0.next = 18;
						break;

					case 14:
						context$3$0.prev = 14;
						context$3$0.t0 = context$3$0["catch"](3);
						_didIteratorError5 = true;
						_iteratorError5 = context$3$0.t0;

					case 18:
						context$3$0.prev = 18;
						context$3$0.prev = 19;

						if (!_iteratorNormalCompletion5 && _iterator5["return"]) {
							_iterator5["return"]();
						}

					case 21:
						context$3$0.prev = 21;

						if (!_didIteratorError5) {
							context$3$0.next = 24;
							break;
						}

						throw _iteratorError5;

					case 24:
						return context$3$0.finish(21);

					case 25:
						return context$3$0.finish(18);

					case 26:
					case "end":
						return context$3$0.stop();
				}
			}, callee$2$0, this, [[3, 14, 18, 26], [19,, 21, 25]]);
		});

		Matrix.prototype.incident = regeneratorRuntime.mark(function callee$2$0(v) {
			var _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator6, _step6, e;

			return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						_iteratorNormalCompletion6 = true;
						_didIteratorError6 = false;
						_iteratorError6 = undefined;
						context$3$0.prev = 3;
						_iterator6 = this.iitr(v)[Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done) {
							context$3$0.next = 12;
							break;
						}

						e = _step6.value;
						context$3$0.next = 9;
						return [e.u, e.v, e];

					case 9:
						_iteratorNormalCompletion6 = true;
						context$3$0.next = 5;
						break;

					case 12:
						context$3$0.next = 18;
						break;

					case 14:
						context$3$0.prev = 14;
						context$3$0.t0 = context$3$0["catch"](3);
						_didIteratorError6 = true;
						_iteratorError6 = context$3$0.t0;

					case 18:
						context$3$0.prev = 18;
						context$3$0.prev = 19;

						if (!_iteratorNormalCompletion6 && _iterator6["return"]) {
							_iterator6["return"]();
						}

					case 21:
						context$3$0.prev = 21;

						if (!_didIteratorError6) {
							context$3$0.next = 24;
							break;
						}

						throw _iteratorError6;

					case 24:
						return context$3$0.finish(21);

					case 25:
						return context$3$0.finish(18);

					case 26:
					case "end":
						return context$3$0.stop();
				}
			}, callee$2$0, this, [[3, 14, 18, 26], [19,, 21, 25]]);
		});

		Matrix.prototype.endpoints = function (e) {

			return [e.u, e.v];
		};

		exports.Matrix = Matrix;

		/* js/src/Vertex.js */

		var Vertex = function Vertex(id) {

			this.id = id;
		};

		exports.Vertex = Vertex;

		return exports;
	};
	if (typeof exports === "object") {
		definition(exports);
	} else if (typeof define === "function" && define.amd) {
		define("aureooms-js-adjacency-matrix", [], function () {
			return definition({});
		});
	} else if (typeof window === "object" && typeof window.document === "object") {
		definition(window["adjacencymatrix"] = {});
	} else console.error("unable to detect type of module to define for aureooms-js-adjacency-matrix");
})();