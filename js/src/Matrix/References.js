
const References = function ( ) {

	this.v = [ ] ;
	this.e = [ ] ;

} ;

/**
 * O(n²), amortized O(n)
 * @param {label} label a label for the vertex to add
 * @return {vertex} a vertex reference
 */
References.prototype.vadd = function ( label ) {

	const len = this.e.length ;
	const ref = [ len , label ] ;

	// add a vertex
	this.v.push( ref ) ;

	// add a row
	this.e.push( [ for ( v of this.v ) [ null , null , -1 ] ] ) ;

	// add a column (undirected graph:(i,j) = (j,i))
	for ( let j = 0 ; j < len ; ++j ) this.e[j].push( this.e[len][j] ) ;

	return ref ;

} ;

/**
 * O(n²), amortized O(n)
 * Fast if removing vertices in LIFO order.
 * @param {vertex} v is a vertex reference
 */
References.prototype.vdel = function ( v ) {

	// id to delete
	const i = v[0] ;

	const len = this.v.length ;

	// last id
	const j = len - 1 ;

	if ( i < j ) {

		// swap deleted row and column
		// with last row and column

		// move vertex reference
		this.v[i] = this.v[j] ;

		// change vertex id
		this.v[i][0] = i ;

		// move column
		for ( let k = 0 ; k < i ; ++k ) this.e[k][i] = this.e[ k ][j] ;
		for ( let k = i ; k < j ; ++k ) this.e[k][i] = this.e[k+1][j] ;

		// move row
		for ( let k = 0 ; k < i ; ++k ) this.e[i][k] = this.e[j][k] ;
		for ( let k = i ; k < j ; ++k ) this.e[i][k] = this.e[j][k+1] ;

	}

	// remove last vertex
	this.v.splice( j , 1 ) ;

	// remove last row
	this.e.splice( j , 1 ) ;

	// remove last column
	// NB : after removing row k < len - 1 = j
	for ( let k = 0 ; k < j ; ++k ) this.e[k].splice( j , 1 ) ;

} ;

/**
 * O(1)
 * @param {vertex} u is a vertex reference
 * @param {vertex} v is a vertex reference
 * @param {weight} w
 * @return {edge} an edge reference
 */
References.prototype.eadd = function ( u , v , w ) {

	const i = u[0] , j = v[0] ;

	this.e[i][j][0] = u ;
	this.e[i][j][1] = v ;
	this.e[i][j][2] = w ;

	return this.e[i][j] ;

} ;

/**
 * O(1)
 * @param {edge} e is an edge reference
 */
References.prototype.edel = function ( e ) {

	var i = e[0][0] , j = e[1][0] ;

	this.e[i][j][0] = null ;
	this.e[i][j][1] = null ;
	this.e[i][j][2] = -1 ;

} ;

/**
 * O(n)
 */
References.prototype.vitr = function* ( ) {

	yield* this.v ;

} ;

/**
 * O(n)
 */
References.prototype.eitr = function* ( v ) {

	const i = v[0] ;

	for ( let e of this.e[i] ) {

		if ( e[0] === null ) continue ;

		yield e ;

	}

} ;

References.prototype.in  = References.prototype.eitr ;
References.prototype.out = References.prototype.eitr ;

/**
 * O(n)
 */
References.prototype.nitr = function* ( v ) {

	const i = v[0] ;

	for ( let e of this.e[i] ) {

		if ( e[0] === null ) continue ;

		yield e[0] === v ? e[1] : e[0] ;

	}

} ;

/**
 * O(n²)
 */
References.prototype.aeitr = function* ( ) {

	const len = this.v.length ;

	for ( let v of this.v ) {

		const i = v[0] ;
		const _e = this.e[i] ;

		for ( let j = i ; j < len ; ++j ) {

			const e = _e[j] ;

			if ( e[0] === null ) continue ;

			yield e ;

		}

	}

} ;

exports.References = References ;
