"use strict";

(function () {

	'use strict';

	var definition = function definition(exports, undefined) {

		/* js/src/DiGraph.js */

		var DiGraph = function DiGraph() {

			this.V = [];
			this.E = [];
		};

		/**
   * O(n²), amortized O(n)
   * f this.iitr( v ) ) yield [ e.u , e.v , e ] ;
   *
   * @return {vertex} a vertex reference
   */
		DiGraph.prototype.vadd = function () {
			var _this = this;

			var len = this.V.length;
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

			// add a column (last row already has a cell for this column)
			for (var j = 0; j < len; ++j) {
				this.E[j].push(new Edge(null, null));
			}return ref;
		};

		/**
   * O(n²), amortized O(n)
   * Fast if removing vertices in LIFO order.
   * @param {vertex} v is a vertex reference
   */
		DiGraph.prototype.vdel = function (v) {

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
		DiGraph.prototype.eadd = function (u, v) {

			var i = u.id,
			    j = v.id;

			var e = this.E[i][j];

			e.u = u;
			e.v = v;

			return e;
		};

		/**
   * O(1)
   * @param {edge} e is an edge reference
   */
		DiGraph.prototype.edel = function (e) {

			e.u = null;
			e.v = null;
		};

		/**
   * O(n)
   */
		DiGraph.prototype.vitr = regeneratorRuntime.mark(function callee$2$0() {
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
   * O(n²)
   */
		DiGraph.prototype.eitr = regeneratorRuntime.mark(function callee$2$0() {
			var len, i, _e, j, e;

			return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						len = this.V.length;
						i = 0;

					case 2:
						if (!(i < len)) {
							context$3$0.next = 17;
							break;
						}

						_e = this.E[i];
						j = 0;

					case 5:
						if (!(j < len)) {
							context$3$0.next = 14;
							break;
						}

						e = _e[j];

						if (!(e.u === null)) {
							context$3$0.next = 9;
							break;
						}

						return context$3$0.abrupt("continue", 11);

					case 9:
						context$3$0.next = 11;
						return e;

					case 11:
						++j;
						context$3$0.next = 5;
						break;

					case 14:
						++i;
						context$3$0.next = 2;
						break;

					case 17:
					case "end":
						return context$3$0.stop();
				}
			}, callee$2$0, this);
		});

		/**
   * O(n)
   */
		DiGraph.prototype.iitr = regeneratorRuntime.mark(function callee$2$0(v) {
			return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						return context$3$0.delegateYield(this.initr(v), "t0", 1);

					case 1:
						return context$3$0.delegateYield(this.outitr(v), "t1", 2);

					case 2:
					case "end":
						return context$3$0.stop();
				}
			}, callee$2$0, this);
		});

		DiGraph.prototype.initr = regeneratorRuntime.mark(function callee$2$0(v) {
			var i, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _e, e;

			return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						i = v.id;
						_iteratorNormalCompletion2 = true;
						_didIteratorError2 = false;
						_iteratorError2 = undefined;
						context$3$0.prev = 4;
						_iterator2 = this.E[Symbol.iterator]();

					case 6:
						if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
							context$3$0.next = 16;
							break;
						}

						_e = _step2.value;
						e = _e[i];

						if (!(e.u === null)) {
							context$3$0.next = 11;
							break;
						}

						return context$3$0.abrupt("continue", 13);

					case 11:
						context$3$0.next = 13;
						return e;

					case 13:
						_iteratorNormalCompletion2 = true;
						context$3$0.next = 6;
						break;

					case 16:
						context$3$0.next = 22;
						break;

					case 18:
						context$3$0.prev = 18;
						context$3$0.t0 = context$3$0["catch"](4);
						_didIteratorError2 = true;
						_iteratorError2 = context$3$0.t0;

					case 22:
						context$3$0.prev = 22;
						context$3$0.prev = 23;

						if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
							_iterator2["return"]();
						}

					case 25:
						context$3$0.prev = 25;

						if (!_didIteratorError2) {
							context$3$0.next = 28;
							break;
						}

						throw _iteratorError2;

					case 28:
						return context$3$0.finish(25);

					case 29:
						return context$3$0.finish(22);

					case 30:
					case "end":
						return context$3$0.stop();
				}
			}, callee$2$0, this, [[4, 18, 22, 30], [23,, 25, 29]]);
		});

		DiGraph.prototype.outitr = regeneratorRuntime.mark(function callee$2$0(v) {
			var i, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, e;

			return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						i = v.id;
						_iteratorNormalCompletion3 = true;
						_didIteratorError3 = false;
						_iteratorError3 = undefined;
						context$3$0.prev = 4;
						_iterator3 = this.E[i][Symbol.iterator]();

					case 6:
						if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
							context$3$0.next = 15;
							break;
						}

						e = _step3.value;

						if (!(e.u === null)) {
							context$3$0.next = 10;
							break;
						}

						return context$3$0.abrupt("continue", 12);

					case 10:
						context$3$0.next = 12;
						return e;

					case 12:
						_iteratorNormalCompletion3 = true;
						context$3$0.next = 6;
						break;

					case 15:
						context$3$0.next = 21;
						break;

					case 17:
						context$3$0.prev = 17;
						context$3$0.t0 = context$3$0["catch"](4);
						_didIteratorError3 = true;
						_iteratorError3 = context$3$0.t0;

					case 21:
						context$3$0.prev = 21;
						context$3$0.prev = 22;

						if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
							_iterator3["return"]();
						}

					case 24:
						context$3$0.prev = 24;

						if (!_didIteratorError3) {
							context$3$0.next = 27;
							break;
						}

						throw _iteratorError3;

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
		DiGraph.prototype.nitr = regeneratorRuntime.mark(function callee$2$0(w) {
			return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						return context$3$0.delegateYield(this.dsitr(w), "t0", 1);

					case 1:
						return context$3$0.delegateYield(this.dpitr(w), "t1", 2);

					case 2:
					case "end":
						return context$3$0.stop();
				}
			}, callee$2$0, this);
		});

		DiGraph.prototype.dsitr = regeneratorRuntime.mark(function callee$2$0(w) {
			var _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, v;

			return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						_iteratorNormalCompletion4 = true;
						_didIteratorError4 = false;
						_iteratorError4 = undefined;
						context$3$0.prev = 3;
						_iterator4 = this.E[w.id][Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
							context$3$0.next = 13;
							break;
						}

						v = _step4.value.v;

						if (!(v !== null)) {
							context$3$0.next = 10;
							break;
						}

						context$3$0.next = 10;
						return v;

					case 10:
						_iteratorNormalCompletion4 = true;
						context$3$0.next = 5;
						break;

					case 13:
						context$3$0.next = 19;
						break;

					case 15:
						context$3$0.prev = 15;
						context$3$0.t0 = context$3$0["catch"](3);
						_didIteratorError4 = true;
						_iteratorError4 = context$3$0.t0;

					case 19:
						context$3$0.prev = 19;
						context$3$0.prev = 20;

						if (!_iteratorNormalCompletion4 && _iterator4["return"]) {
							_iterator4["return"]();
						}

					case 22:
						context$3$0.prev = 22;

						if (!_didIteratorError4) {
							context$3$0.next = 25;
							break;
						}

						throw _iteratorError4;

					case 25:
						return context$3$0.finish(22);

					case 26:
						return context$3$0.finish(19);

					case 27:
					case "end":
						return context$3$0.stop();
				}
			}, callee$2$0, this, [[3, 15, 19, 27], [20,, 22, 26]]);
		});

		DiGraph.prototype.dpitr = regeneratorRuntime.mark(function callee$2$0(w) {
			var j, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, _e, u;

			return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						j = w.id;
						_iteratorNormalCompletion5 = true;
						_didIteratorError5 = false;
						_iteratorError5 = undefined;
						context$3$0.prev = 4;
						_iterator5 = this.E[Symbol.iterator]();

					case 6:
						if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
							context$3$0.next = 15;
							break;
						}

						_e = _step5.value;
						u = _e[j].u;

						if (!(u !== null)) {
							context$3$0.next = 12;
							break;
						}

						context$3$0.next = 12;
						return u;

					case 12:
						_iteratorNormalCompletion5 = true;
						context$3$0.next = 6;
						break;

					case 15:
						context$3$0.next = 21;
						break;

					case 17:
						context$3$0.prev = 17;
						context$3$0.t0 = context$3$0["catch"](4);
						_didIteratorError5 = true;
						_iteratorError5 = context$3$0.t0;

					case 21:
						context$3$0.prev = 21;
						context$3$0.prev = 22;

						if (!_iteratorNormalCompletion5 && _iterator5["return"]) {
							_iterator5["return"]();
						}

					case 24:
						context$3$0.prev = 24;

						if (!_didIteratorError5) {
							context$3$0.next = 27;
							break;
						}

						throw _iteratorError5;

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

		DiGraph.prototype.vertices = DiGraph.prototype.vitr;

		DiGraph.prototype.edges = regeneratorRuntime.mark(function callee$2$0() {
			var _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator6, _step6, e;

			return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						_iteratorNormalCompletion6 = true;
						_didIteratorError6 = false;
						_iteratorError6 = undefined;
						context$3$0.prev = 3;
						_iterator6 = this.eitr()[Symbol.iterator]();

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

		DiGraph.prototype.incident = regeneratorRuntime.mark(function callee$2$0(v) {
			return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						return context$3$0.delegateYield(this.ingoing(v), "t0", 1);

					case 1:
						return context$3$0.delegateYield(this.outgoing(v), "t1", 2);

					case 2:
					case "end":
						return context$3$0.stop();
				}
			}, callee$2$0, this);
		});

		DiGraph.prototype.ingoing = regeneratorRuntime.mark(function callee$2$0(v) {
			var _iteratorNormalCompletion7, _didIteratorError7, _iteratorError7, _iterator7, _step7, e;

			return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						_iteratorNormalCompletion7 = true;
						_didIteratorError7 = false;
						_iteratorError7 = undefined;
						context$3$0.prev = 3;
						_iterator7 = this.initr(v)[Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done) {
							context$3$0.next = 12;
							break;
						}

						e = _step7.value;
						context$3$0.next = 9;
						return [e.u, e.v, e];

					case 9:
						_iteratorNormalCompletion7 = true;
						context$3$0.next = 5;
						break;

					case 12:
						context$3$0.next = 18;
						break;

					case 14:
						context$3$0.prev = 14;
						context$3$0.t0 = context$3$0["catch"](3);
						_didIteratorError7 = true;
						_iteratorError7 = context$3$0.t0;

					case 18:
						context$3$0.prev = 18;
						context$3$0.prev = 19;

						if (!_iteratorNormalCompletion7 && _iterator7["return"]) {
							_iterator7["return"]();
						}

					case 21:
						context$3$0.prev = 21;

						if (!_didIteratorError7) {
							context$3$0.next = 24;
							break;
						}

						throw _iteratorError7;

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

		DiGraph.prototype.outgoing = regeneratorRuntime.mark(function callee$2$0(v) {
			var _iteratorNormalCompletion8, _didIteratorError8, _iteratorError8, _iterator8, _step8, e;

			return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						_iteratorNormalCompletion8 = true;
						_didIteratorError8 = false;
						_iteratorError8 = undefined;
						context$3$0.prev = 3;
						_iterator8 = this.outitr(v)[Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done) {
							context$3$0.next = 12;
							break;
						}

						e = _step8.value;
						context$3$0.next = 9;
						return [e.u, e.v, e];

					case 9:
						_iteratorNormalCompletion8 = true;
						context$3$0.next = 5;
						break;

					case 12:
						context$3$0.next = 18;
						break;

					case 14:
						context$3$0.prev = 14;
						context$3$0.t0 = context$3$0["catch"](3);
						_didIteratorError8 = true;
						_iteratorError8 = context$3$0.t0;

					case 18:
						context$3$0.prev = 18;
						context$3$0.prev = 19;

						if (!_iteratorNormalCompletion8 && _iterator8["return"]) {
							_iterator8["return"]();
						}

					case 21:
						context$3$0.prev = 21;

						if (!_didIteratorError8) {
							context$3$0.next = 24;
							break;
						}

						throw _iteratorError8;

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

		DiGraph.prototype.endpoints = function (e) {

			return [e.u, e.v];
		};

		/**
   * O(n²)
   */
		DiGraph.prototype.reverse = function () {

			var len = this.V.length;

			for (var i = 0; i < len; ++i) {

				for (var j = i + 1; j < len; ++j) {
					var _ref = [this.E[j][i], this.E[i][j]];
					this.E[i][j] = _ref[0];
					this.E[j][i] = _ref[1];
					var _ref2 = [this.E[i][j].v, this.E[i][j].u];
					this.E[i][j].u = _ref2[0];
					this.E[i][j].v = _ref2[1];
					var _ref3 = [this.E[j][i].v, this.E[j][i].u];
					this.E[j][i].u = _ref3[0];
					this.E[j][i].v = _ref3[1];
				}
			}
		};

		exports.DiGraph = DiGraph;

		/* js/src/Edge.js */

		var Edge = function Edge(u, v) {

			this.u = u;
			this.v = v;
		};

		exports.Edge = Edge;

		/* js/src/Graph.js */

		var Graph = function Graph() {

			this.V = [];
			this.E = [];
		};

		/**
   * O(n²), amortized O(n)
   * @return {vertex} a vertex reference
   */
		Graph.prototype.vadd = function () {
			var _this2 = this;

			var len = this.V.length;
			var ref = new Vertex(len);

			// add a vertex
			this.V.push(ref);

			// add a row
			this.E.push((function () {
				var _E$push2 = [];
				var _iteratorNormalCompletion9 = true;
				var _didIteratorError9 = false;
				var _iteratorError9 = undefined;

				try {
					for (var _iterator9 = _this2.V[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
						var v = _step9.value;

						_E$push2.push(new Edge(null, null));
					}
				} catch (err) {
					_didIteratorError9 = true;
					_iteratorError9 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion9 && _iterator9["return"]) {
							_iterator9["return"]();
						}
					} finally {
						if (_didIteratorError9) {
							throw _iteratorError9;
						}
					}
				}

				return _E$push2;
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
		Graph.prototype.vdel = function (v) {

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
		Graph.prototype.eadd = function (u, v) {

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
		Graph.prototype.edel = function (e) {

			e.u = null;
			e.v = null;
		};

		/**
   * O(n)
   */
		Graph.prototype.vitr = regeneratorRuntime.mark(function callee$2$0() {
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
   * O(n²)
   */
		Graph.prototype.eitr = regeneratorRuntime.mark(function callee$2$0() {
			var len, i, _e, j, e;

			return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						len = this.V.length;
						i = 0;

					case 2:
						if (!(i < len)) {
							context$3$0.next = 17;
							break;
						}

						_e = this.E[i];
						j = i;

					case 5:
						if (!(j < len)) {
							context$3$0.next = 14;
							break;
						}

						e = _e[j];

						if (!(e.u === null)) {
							context$3$0.next = 9;
							break;
						}

						return context$3$0.abrupt("continue", 11);

					case 9:
						context$3$0.next = 11;
						return e;

					case 11:
						++j;
						context$3$0.next = 5;
						break;

					case 14:
						++i;
						context$3$0.next = 2;
						break;

					case 17:
					case "end":
						return context$3$0.stop();
				}
			}, callee$2$0, this);
		});

		/**
   * O(n)
   */
		Graph.prototype.iitr = regeneratorRuntime.mark(function callee$2$0(v) {
			var i, _iteratorNormalCompletion10, _didIteratorError10, _iteratorError10, _iterator10, _step10, e;

			return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						i = v.id;
						_iteratorNormalCompletion10 = true;
						_didIteratorError10 = false;
						_iteratorError10 = undefined;
						context$3$0.prev = 4;
						_iterator10 = this.E[i][Symbol.iterator]();

					case 6:
						if (_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done) {
							context$3$0.next = 15;
							break;
						}

						e = _step10.value;

						if (!(e.u === null)) {
							context$3$0.next = 10;
							break;
						}

						return context$3$0.abrupt("continue", 12);

					case 10:
						context$3$0.next = 12;
						return e;

					case 12:
						_iteratorNormalCompletion10 = true;
						context$3$0.next = 6;
						break;

					case 15:
						context$3$0.next = 21;
						break;

					case 17:
						context$3$0.prev = 17;
						context$3$0.t0 = context$3$0["catch"](4);
						_didIteratorError10 = true;
						_iteratorError10 = context$3$0.t0;

					case 21:
						context$3$0.prev = 21;
						context$3$0.prev = 22;

						if (!_iteratorNormalCompletion10 && _iterator10["return"]) {
							_iterator10["return"]();
						}

					case 24:
						context$3$0.prev = 24;

						if (!_didIteratorError10) {
							context$3$0.next = 27;
							break;
						}

						throw _iteratorError10;

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

		Graph.prototype.initr = Graph.prototype.iitr;
		Graph.prototype.outitr = Graph.prototype.iitr;

		/**
   * O(n)
   */
		Graph.prototype.nitr = regeneratorRuntime.mark(function callee$2$0(w) {
			var _iteratorNormalCompletion11, _didIteratorError11, _iteratorError11, _iterator11, _step11, _step11$value, u, v;

			return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						_iteratorNormalCompletion11 = true;
						_didIteratorError11 = false;
						_iteratorError11 = undefined;
						context$3$0.prev = 3;
						_iterator11 = this.E[w.id][Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done) {
							context$3$0.next = 16;
							break;
						}

						_step11$value = _step11.value;
						u = _step11$value.u;
						v = _step11$value.v;

						if (!(u === null)) {
							context$3$0.next = 11;
							break;
						}

						return context$3$0.abrupt("continue", 13);

					case 11:
						context$3$0.next = 13;
						return u === w ? v : u;

					case 13:
						_iteratorNormalCompletion11 = true;
						context$3$0.next = 5;
						break;

					case 16:
						context$3$0.next = 22;
						break;

					case 18:
						context$3$0.prev = 18;
						context$3$0.t0 = context$3$0["catch"](3);
						_didIteratorError11 = true;
						_iteratorError11 = context$3$0.t0;

					case 22:
						context$3$0.prev = 22;
						context$3$0.prev = 23;

						if (!_iteratorNormalCompletion11 && _iterator11["return"]) {
							_iterator11["return"]();
						}

					case 25:
						context$3$0.prev = 25;

						if (!_didIteratorError11) {
							context$3$0.next = 28;
							break;
						}

						throw _iteratorError11;

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

		Graph.prototype.dsitr = Graph.prototype.nitr;
		Graph.prototype.dpitr = Graph.prototype.nitr;

		Graph.prototype.vertices = Graph.prototype.vitr;

		Graph.prototype.edges = regeneratorRuntime.mark(function callee$2$0() {
			var _iteratorNormalCompletion12, _didIteratorError12, _iteratorError12, _iterator12, _step12, e;

			return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						_iteratorNormalCompletion12 = true;
						_didIteratorError12 = false;
						_iteratorError12 = undefined;
						context$3$0.prev = 3;
						_iterator12 = this.eitr()[Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done) {
							context$3$0.next = 12;
							break;
						}

						e = _step12.value;
						context$3$0.next = 9;
						return [e.u, e.v, e];

					case 9:
						_iteratorNormalCompletion12 = true;
						context$3$0.next = 5;
						break;

					case 12:
						context$3$0.next = 18;
						break;

					case 14:
						context$3$0.prev = 14;
						context$3$0.t0 = context$3$0["catch"](3);
						_didIteratorError12 = true;
						_iteratorError12 = context$3$0.t0;

					case 18:
						context$3$0.prev = 18;
						context$3$0.prev = 19;

						if (!_iteratorNormalCompletion12 && _iterator12["return"]) {
							_iterator12["return"]();
						}

					case 21:
						context$3$0.prev = 21;

						if (!_didIteratorError12) {
							context$3$0.next = 24;
							break;
						}

						throw _iteratorError12;

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

		Graph.prototype.incident = regeneratorRuntime.mark(function callee$2$0(v) {
			var _iteratorNormalCompletion13, _didIteratorError13, _iteratorError13, _iterator13, _step13, e;

			return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						_iteratorNormalCompletion13 = true;
						_didIteratorError13 = false;
						_iteratorError13 = undefined;
						context$3$0.prev = 3;
						_iterator13 = this.iitr(v)[Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done) {
							context$3$0.next = 12;
							break;
						}

						e = _step13.value;
						context$3$0.next = 9;
						return [e.u, e.v, e];

					case 9:
						_iteratorNormalCompletion13 = true;
						context$3$0.next = 5;
						break;

					case 12:
						context$3$0.next = 18;
						break;

					case 14:
						context$3$0.prev = 14;
						context$3$0.t0 = context$3$0["catch"](3);
						_didIteratorError13 = true;
						_iteratorError13 = context$3$0.t0;

					case 18:
						context$3$0.prev = 18;
						context$3$0.prev = 19;

						if (!_iteratorNormalCompletion13 && _iterator13["return"]) {
							_iterator13["return"]();
						}

					case 21:
						context$3$0.prev = 21;

						if (!_didIteratorError13) {
							context$3$0.next = 24;
							break;
						}

						throw _iteratorError13;

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

		Graph.prototype.ingoing = regeneratorRuntime.mark(function callee$2$0(v) {
			var _iteratorNormalCompletion14, _didIteratorError14, _iteratorError14, _iterator14, _step14, e;

			return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						_iteratorNormalCompletion14 = true;
						_didIteratorError14 = false;
						_iteratorError14 = undefined;
						context$3$0.prev = 3;
						_iterator14 = this.initr(v)[Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done) {
							context$3$0.next = 12;
							break;
						}

						e = _step14.value;
						context$3$0.next = 9;
						return [e.u === v ? e.v : e.u, v, e];

					case 9:
						_iteratorNormalCompletion14 = true;
						context$3$0.next = 5;
						break;

					case 12:
						context$3$0.next = 18;
						break;

					case 14:
						context$3$0.prev = 14;
						context$3$0.t0 = context$3$0["catch"](3);
						_didIteratorError14 = true;
						_iteratorError14 = context$3$0.t0;

					case 18:
						context$3$0.prev = 18;
						context$3$0.prev = 19;

						if (!_iteratorNormalCompletion14 && _iterator14["return"]) {
							_iterator14["return"]();
						}

					case 21:
						context$3$0.prev = 21;

						if (!_didIteratorError14) {
							context$3$0.next = 24;
							break;
						}

						throw _iteratorError14;

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

		Graph.prototype.outgoing = regeneratorRuntime.mark(function callee$2$0(v) {
			var _iteratorNormalCompletion15, _didIteratorError15, _iteratorError15, _iterator15, _step15, e;

			return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						_iteratorNormalCompletion15 = true;
						_didIteratorError15 = false;
						_iteratorError15 = undefined;
						context$3$0.prev = 3;
						_iterator15 = this.outitr(v)[Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done) {
							context$3$0.next = 12;
							break;
						}

						e = _step15.value;
						context$3$0.next = 9;
						return [v, e.u === v ? e.v : e.u, e];

					case 9:
						_iteratorNormalCompletion15 = true;
						context$3$0.next = 5;
						break;

					case 12:
						context$3$0.next = 18;
						break;

					case 14:
						context$3$0.prev = 14;
						context$3$0.t0 = context$3$0["catch"](3);
						_didIteratorError15 = true;
						_iteratorError15 = context$3$0.t0;

					case 18:
						context$3$0.prev = 18;
						context$3$0.prev = 19;

						if (!_iteratorNormalCompletion15 && _iterator15["return"]) {
							_iterator15["return"]();
						}

					case 21:
						context$3$0.prev = 21;

						if (!_didIteratorError15) {
							context$3$0.next = 24;
							break;
						}

						throw _iteratorError15;

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

		Graph.prototype.endpoints = function (e) {

			return [e.u, e.v];
		};

		Graph.prototype.reverse = function () {};

		exports.Graph = Graph;

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