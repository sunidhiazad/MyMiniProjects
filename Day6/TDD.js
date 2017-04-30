var DataType = require('data-type');
var TapeTest = require( 'tape' ) ;
var Underscore = require( 'underscore' ) ;

TapeTest( 'Check if the input is an anagram', function( assert ) {
  assert.true( isAnagram('hello', 'ollhe'), 'Yes, it is an anagram' ) ;
  assert.false( isAnagram('world', 'ordly'), 'No, it is not an anagram' ) ;
  assert.false( isAnagram('fante', 'tenaff'), 'No, it is not an anagram' ) ;
  assert.end() ;
} ) ;

function isAnagram(string1, string2){
	var string1Array=string1.split('').sort();
	var string2Array=string2.split('').sort();
	return Underscore.isEqual(string1Array,string2Array);
}


TapeTest( 'Box Volume', function( assert ) {
  assert.equal( boxVolume(10, 10, 10), 1,'Yes, it is correct' ) ;
  assert.equal( boxVolume(5, 5, 5), 0.125 ,'Yes, it is correct' ) ;
  assert.equal( boxVolume(5, 5, 5.1), 0.1275,'Yes, it is correct' ) ;
  assert.end() ;
} ) ;

function boxVolume(num1, num2, num3){
	return parseFloat(((num1*num2*num3)/1000).toPrecision(4));
}

function intersect(rectangle1, rectangle2){
	rectangle1.sort();
	rectangle2.sort();

	var pairs = [];

	var x1 = rectangle1[0][0]
	var y1 = rectangle1[0][1]

	var x2 = rectangle1[1][0]
	var y2 = rectangle1[1][1]

	var x3 = rectangle2[0][0]
	var y3 = rectangle2[0][1]

	var x4 = rectangle2[1][0]
	var y4 = rectangle2[1][0]

if(x1 <= x4 && x3 <= x2 && y2 >= y3 && y4 >= y1){
	var point1x = Math.max(x1, x3);
	var point1y = Math.max(y1, y3);
	var point2x = Math.min(x2, x4);
	var point2y = Math.min(y2, y4);

	pairs.push([point1x, point1y]);
	pairs.push([point2x, point2y]);
}
	return pairs;
}

TapeTest( 'Rectangle intersection', function( assert ) {
  assert.deepEqual( intersect([[1, 1], [4, 3]], [[2, 2], [6, 7]]), [[2, 2], [4, 3]],'Yes, it is correct' ) ;
  assert.deepEqual( intersect([[2, 1], [4, 4]], [[1, 1], [8, 8]]), [[2, 1], [4, 4]] ,'Yes, it is correctg' ) ;
  assert.deepEqual( intersect([[1, 1], [3, 3]], [[5, 5], [8, 8]]), [] ,'Yes, it is correct' ) ;
  assert.end() ;
} ) ;