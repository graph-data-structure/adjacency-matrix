import Vertex from './Vertex.js';
import Edge from './Edge.js';

export default function DiGraph ( ) {
	this.V = [ ] ;
	this.E = [ ] ;
}

/**
 * O(n²), amortized O(n)
 * f this.iitr( v ) ) yield [ e.u , e.v , e ] ;
 *
 * @return {Vertex} a vertex reference
 */
DiGraph.prototype.vadd = function ( ) {

	const len = this.V.length ;
	const ref = new Vertex( len ) ;

	// add a vertex
	this.V.push( ref ) ;

	// add a row
	this.E.push( this.V.map(() => new Edge( null , null )) ) ;

	// add a column (last row already has a cell for this column)
	for ( let j = 0 ; j < len ; ++j ) this.E[j].push( new Edge( null , null ) ) ;

	return ref ;

}

/**
 * O(n²), amortized O(n)
 * Fast if removing vertices in LIFO order.
 * @param {Vertex} v is a vertex reference
 */
DiGraph.prototype.vdel = function ( v ) {

	// id to delete
	const i = v.id ;

	const len = this.V.length ;

	// last id
	const j = len - 1 ;

	if ( i < j ) {

		// swap deleted row and column
		// with last row and column

		// move vertex reference
		this.V[i] = this.V[j] ;

		// change vertex id
		this.V[i].id = i ;

		// move column
		for ( let k = 0 ; k < i ; ++k ) this.E[k][i] = this.E[ k ][j] ;
		for ( let k = i ; k < j ; ++k ) this.E[k][i] = this.E[k+1][j] ;

		// move row
		for ( let k = 0 ; k < i ; ++k ) this.E[i][k] = this.E[j][k] ;
		for ( let k = i ; k < j ; ++k ) this.E[i][k] = this.E[j][k+1] ;

	}

	// remove last vertex
	this.V.splice( j , 1 ) ;

	// remove last row
	this.E.splice( j , 1 ) ;

	// remove last column
	// NB : after removing row k < len - 1 = j
	for ( let k = 0 ; k < j ; ++k ) this.E[k].splice( j , 1 ) ;

}

/**
 * O(1)
 * @param {Vertex} u is a vertex reference
 * @param {Vertex} v is a vertex reference
 * @param {weight} w
 * @return {Edge} an edge reference
 */
DiGraph.prototype.eadd = function ( u , v ) {

	const i = u.id , j = v.id ;

	const e = this.E[i][j] ;

	e.u = u ;
	e.v = v ;

	return e ;

}

/**
 * O(1)
 * @param {Edge} e is an edge reference
 */
DiGraph.prototype.edel = function ( e ) {

	e.u = null ;
	e.v = null ;

}

/**
 * O(n)
 */
DiGraph.prototype.vitr = function* ( ) {

	yield* this.V ;

}


/**
 * O(n²)
 */
DiGraph.prototype.eitr = function* ( ) {

	const len = this.V.length ;

	for ( let i = 0 ; i < len ; ++i ) {

		const _e = this.E[i] ;

		for ( let j = 0 ; j < len ; ++j ) {

			const e = _e[j] ;

			if ( e.u === null ) continue ;

			yield e ;

		}

	}

}

/**
 * O(n)
 */
DiGraph.prototype.iitr = function* ( v ) {

	yield* this.initr( v ) ;
	yield* this.outitr( v ) ;

}

DiGraph.prototype.initr = function* ( v ) {

	const i = v.id ;

	for ( let _e of this.E ) {

		const e = _e[i] ;

		if ( e.u === null ) continue ;

		yield e ;

	}

}

DiGraph.prototype.outitr = function* ( v ) {

	const i = v.id ;

	for ( let e of this.E[i] ) {

		if ( e.u === null ) continue ;

		yield e ;

	}

}

/**
 * O(n)
 */
DiGraph.prototype.nitr = function* ( w ) {

	yield* this.dsitr( w ) ;
	yield* this.dpitr( w ) ;

}

DiGraph.prototype.dsitr = function* ( w ) {

	for ( let { v } of this.E[w.id] ) {

		if ( v !== null ) yield v ;

	}

}

DiGraph.prototype.dpitr = function* ( w ) {

	const j = w.id ;

	for ( let _e of this.E ) {

		const { u } = _e[j] ;

		if ( u !== null ) yield u ;

	}

}

DiGraph.prototype.vertices = DiGraph.prototype.vitr ;

DiGraph.prototype.edges = function* ( ) {

	for ( let e of this.eitr( ) ) yield [ e.u , e.v , e ] ;

}

DiGraph.prototype.incident = function* ( v ) {

	yield* this.ingoing( v ) ;
	yield* this.outgoing( v ) ;

}

DiGraph.prototype.ingoing = function* ( v ) {

	for ( let e of this.initr( v ) ) yield [ e.u , e.v , e ] ;

}

DiGraph.prototype.outgoing = function* ( v ) {

	for ( let e of this.outitr( v ) ) yield [ e.u , e.v , e ] ;

}

DiGraph.prototype.endpoints = function ( e ) {

	return [ e.u , e.v ] ;

}

/**
 * O(n²)
 */
DiGraph.prototype.reverse = function ( ) {

	const len = this.V.length ;

	for ( let i = 0 ; i < len ; ++i ) {

		for ( let j = i + 1 ; j < len ; ++j ) {

			[ this.E[i][j] , this.E[j][i] ] = [ this.E[j][i] , this.E[i][j] ] ;

			[ this.E[i][j].u , this.E[i][j].v ] = [ this.E[i][j].v , this.E[i][j].u ] ;

			[ this.E[j][i].u , this.E[j][i].v ] = [ this.E[j][i].v , this.E[j][i].u ] ;

		}

	}

}

