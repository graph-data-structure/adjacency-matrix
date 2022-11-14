import Vertex from './Vertex.js';
import Edge from './Edge.js';

export default function Graph() {
	this.V = [];
	this.E = [];
}

/**
 * O(n²), amortized O(n)
 * @return {Vertex} a vertex reference
 */
Graph.prototype.vadd = function () {
	const len = this.V.length;
	const ref = new Vertex(len);

	// Add a vertex
	this.V.push(ref);

	// Add a row
	this.E.push(this.V.map(() => new Edge(null, null)));

	// Add a column (undirected graph:(i,j) = (j,i))
	for (let j = 0; j < len; ++j) this.E[j].push(this.E[len][j]);

	return ref;
};

/**
 * O(n²), amortized O(n)
 * Fast if removing vertices in LIFO order.
 * @param {Vertex} v is a vertex reference
 */
Graph.prototype.vdel = function (v) {
	// Id to delete
	const i = v.id;

	const len = this.V.length;

	// Last id
	const j = len - 1;

	if (i < j) {
		// Swap deleted row and column
		// with last row and column

		// move vertex reference
		this.V[i] = this.V[j];

		// Change vertex id
		this.V[i].id = i;

		// Move column
		for (let k = 0; k < i; ++k) this.E[k][i] = this.E[k][j];
		for (let k = i; k < j; ++k) this.E[k][i] = this.E[k + 1][j];

		// Move row
		for (let k = 0; k < i; ++k) this.E[i][k] = this.E[j][k];
		for (let k = i; k < j; ++k) this.E[i][k] = this.E[j][k + 1];
	}

	// Remove last vertex
	this.V.splice(j, 1);

	// Remove last row
	this.E.splice(j, 1);

	// Remove last column
	// NB : after removing row k < len - 1 = j
	for (let k = 0; k < j; ++k) this.E[k].splice(j, 1);
};

/**
 * O(1)
 * @param {Vertex} u is a vertex reference
 * @param {Vertex} v is a vertex reference
 * @param {weight} w
 * @return {Edge} an edge reference
 */
Graph.prototype.eadd = function (u, v) {
	const i = u.id;
	const j = v.id;

	this.E[i][j].u = u;
	this.E[i][j].v = v;

	return this.E[i][j];
};

/**
 * O(1)
 * @param {Edge} e is an edge reference
 */
Graph.prototype.edel = function (e) {
	e.u = null;
	e.v = null;
};

/**
 * O(n)
 */
Graph.prototype.vitr = function* () {
	yield* this.V;
};

/**
 * O(n²)
 */
Graph.prototype.eitr = function* () {
	const len = this.V.length;

	for (let i = 0; i < len; ++i) {
		const _e = this.E[i];

		for (let j = i; j < len; ++j) {
			const e = _e[j];

			if (e.u === null) continue;

			yield e;
		}
	}
};

/**
 * O(n)
 */
Graph.prototype.iitr = function* (v) {
	const i = v.id;

	for (const e of this.E[i]) {
		if (e.u === null) continue;

		yield e;
	}
};

Graph.prototype.initr = Graph.prototype.iitr;
Graph.prototype.outitr = Graph.prototype.iitr;

/**
 * O(n)
 */
Graph.prototype.nitr = function* (w) {
	for (const {u, v} of this.E[w.id]) {
		if (u === null) continue;

		yield u === w ? v : u;
	}
};

Graph.prototype.dsitr = Graph.prototype.nitr;
Graph.prototype.dpitr = Graph.prototype.nitr;

Graph.prototype.vertices = Graph.prototype.vitr;

Graph.prototype.edges = function* () {
	for (const e of this.eitr()) yield [e.u, e.v, e];
};

Graph.prototype.incident = function* (v) {
	for (const e of this.iitr(v)) yield [e.u, e.v, e];
};

Graph.prototype.ingoing = function* (v) {
	for (const e of this.initr(v)) yield [e.u === v ? e.v : e.u, v, e];
};

Graph.prototype.outgoing = function* (v) {
	for (const e of this.outitr(v)) yield [v, e.u === v ? e.v : e.u, e];
};

Graph.prototype.endpoints = function (e) {
	return [e.u, e.v];
};

Graph.prototype.reverse = function () {};
