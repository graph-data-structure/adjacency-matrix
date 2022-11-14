import test from 'ava';
import * as adjacencymatrix from '../../src';

import spec from "@aureooms/js-graph-spec" ;

spec.Graph( "Adjacency Matrix Graph" , adjacencymatrix.Graph ) ;
spec.DiGraph( "Adjacency Matrix DiGraph" , adjacencymatrix.DiGraph ) ;
