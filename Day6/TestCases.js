var DataType = require('data-type');
var TapeTest = require( 'tape' ) ;

// Function 1
function isStringFunction(arg){
	return typeof arg=='string';
}

// Test Cases 1
TapeTest( 'Check if the input is string', function( assert ) {
  assert.true( isStringFunction('My world'), 'Yes, it is a string' ) ;
  assert.true( isStringFunction(''), 'Yes, it is a string' ) ;
  assert.true( isStringFunction('12'), 'Yes, it is a string' ) ;
  assert.false( isStringFunction(null), 'No, it is not a string' ) ;
  assert.false( isStringFunction(undefined), 'No, it is not a string' ) ;
  assert.false( isStringFunction(), 'No, it is not a string' ) ;
  assert.false( isStringFunction(911), 'No, it is not a string' ) ;
  assert.end() ;
} ) ;

// Function 2
function isArrayFunction(arg){
	return Array.isArray(arg);
}

// Test Cases 2
TapeTest( 'Check if the input is an array', function( assert ) {
  assert.true( isArrayFunction([1,2,3]), 'Yes, it is an array' ) ;
  assert.false( isArrayFunction({}), 'No, it is not an array' ) ;
  assert.true( isArrayFunction([]), 'Yes, it is an array' ) ;
  assert.true( isArrayFunction([[[]]]), 'Yes, it is an array' ) ;
  assert.true( isArrayFunction(['hello']), 'Yes, it is an array' ) ;
  assert.end() ;
} ) ;

// Function 3
function areSameType(variable){
	if(!Array.isArray(variable)){
		return false;
	}else{
		for (var i = 1; i < variable.length; i++) {
			if(Array.isArray(variable[0])){
				if(!Array.isArray(variable[i])){
					return false
				}
			}else{
				if(typeof variable[i] !== typeof variable[0]){
					return false;
				}	
			}	
		}
		return true;
	}
}

// Test Cases 3
TapeTest( 'Check if all elements in an array are same', function( assert ) {
  assert.true( areSameType([1,2,3]), 'Yes, all elements are of the same data type' ) ;
  assert.true( areSameType([[1],[2],[3]]), 'Yes, all elements are of the same data type' ) ;
  assert.true( areSameType([]), 'Yes, all elements are of the same data type' ) ;
  assert.false( areSameType([1,2,'hello']), 'No, all elements are not of the same data type' ) ;
  assert.false( areSameType([[],{}]), 'No, all elements are not of the same data type' ) ;
  assert.end() ;
} ) ;


// Exercise 4
function longest(string1,string2){
	var charArray=[];
	var string1Array=string1.split("");
	var string2Array=string2.split("");

	for (var i = 0; i < string1Array.length; i++) {
		if(charArray.indexOf(string1Array[i])<0){
			charArray.push(string1Array[i]);
		}
	}

	for (var i = 0; i < string2Array.length; i++) {
		if(charArray.indexOf(string2Array[i])<0){
			charArray.push(string2Array[i]);
		}
	}

	return charArray.sort().join('');
}

// Test Cases 4
TapeTest( 'Longest character string', function( assert ) {
  assert.equal( longest('abcccaa', 'acddddffzzz'),'abcdfz', 'Yes, it is correct' ) ;
  assert.equal( longest('xyaabbbccccdefww', 'xxxxyyyyabklmopq'),'abcdefklmopqwxy', 'Yes, it is correct'  ) ;
  assert.equal( longest('abcdefghijklmnopqrstuvwxyz', 'abcdefghijklmnopqrstuvwxyz'),'abcdefghijklmnopqrstuvwxyz', 'Yes, it is correct'  ) ;
  assert.end() ;
} ) ;

// Exercise 5
function convert(number){
	if(number === 0){
		return [0];
	}
	var digitArray=[];
	var digit;
	while(number!==0){
		digit=number%10;
		digitArray.push(digit);
		number=Math.floor(number/10);
	}
	return digitArray.sort().reverse();
}

// Test Cases 5
TapeTest( 'Convert number into decreasing order array', function( assert ) {
  assert.deepEqual( convert(429563),[9,6,5,4,3,2], 'Yes, it is correct' ) ;
  assert.deepEqual( convert(324),[4,3,2], 'Yes, it is correct'  ) ;
  assert.deepEqual( convert(918273),[9,8,7,3,2,1], 'Yes, it is correct'  ) ;
  assert.deepEqual( convert(125000),[5,2,1,0,0,0], 'Yes, it is correct'  ) ;
  //assert.deepEqual( convert(-125),[5,2,1], 'Yes, it is correct'  ) ;
  assert.deepEqual( convert(0),[0], 'Yes, it is correct'  ) ;
  assert.end() ;
} ) ;

// Exercise 6
function countRepetitions(inputArray){
	var map={};
	for (var i = 0; i < inputArray.length; i++) {
	 	if(inputArray[i] in map){
	 		map[inputArray[i]]++;
	 	}else{
	 		map[inputArray[i]]=1;
	 	}
	 } 
	 return map;
}

// Test Cases 6
TapeTest( 'Count repetition', function( assert ) {
  assert.deepEqual( countRepetitions(['kerouac', 'fante', 'fante', 'buk', 'hemingway', 'hornby', 'kerouac', 'buk', 'fante']),{kerouac:2, fante:3, buk:2, hemingway:1, hornby:1}, 'Yes, it is correct' ) ;
  assert.deepEqual( countRepetitions(['abc', 'sahil', 'abc', 'richu', 'abc', 'xyz', 'whats', 'xyz', 'whats']),{abc:3, sahil:1, xyz:2, richu:1, whats:2}, 'Yes, it is correct'  ) ;
  assert.deepEqual( countRepetitions([]),{}, 'Yes, it is correct'  ) ;
  assert.end() ;
} ) ;

// Exercise 7
function isCaught(input){
	var charArray=input.split('');
	var canCatch=false;
	for (var i = 0; i < charArray.length; i++) {
		if(charArray[i]=='C'){
			for (var j = 1; j <=3 ; j++) {
				if(i+j>=charArray.length)
					break;
				if(charArray[i+j]=='m')
					canCatch=true;
			}
		}	
	}
	return canCatch;
}

// Test Cases 7
TapeTest( 'Cat catches mouse', function( assert ) {
  assert.false( isCaught('C.....m'), 'Cat does not catch mouse' ) ;
  assert.true( isCaught('C..m'), 'Cat catches up to mouse' ) ;
  assert.true( isCaught('..C..m'), 'Cat catches up to mouse' ) ;
  assert.false( isCaught(''), 'Cat does not catch mouse' ) ;
  assert.end() ;
} ) ;

// Exercise 8
function splitTheBill(group){
	var totalAmount=0;
	var people=0;
	var average=0;

	for(i in group){
		totalAmount+=group[i];
		people++;
	}

	average=totalAmount/people;

	var balances={};

	for (i in group) {
		balances[i]=average-group[i];
	}
	return balances;
}

// Test Cases 8
TapeTest( 'Split the Bill', function( assert ) {
  assert.deepEqual( splitTheBill({ Amy: 20, Bill: 15, Chris: 10}),{ Amy: -5, Bill: 0, Chris: 5 }, 'Yes, it is correct' ) ;
  assert.deepEqual( splitTheBill({ Amy: 20, Bill: 20, Chris: 20}),{ Amy: 0, Bill: 0, Chris: 0 }, 'Yes, it is correct' ) ;
  assert.deepEqual( splitTheBill({ Amy: 0, Bill: 0, Chris: 0}),{ Amy: 0, Bill: 0, Chris: 0 }, 'Yes, it is correct' ) ;
  assert.deepEqual( splitTheBill({ Amy: -30, Bill: -30, Chris: 30}),{ Amy: 20, Bill: 20, Chris: -40 }, 'Yes, it is correct' ) ;
  assert.end() ;
} ) ;

// Exercise 9
function recursiveExp(number,power){
	if(power==0)
		return 1;
	else{
		return number*recursiveExp(number,power-1);
	}
}

function iterativeExp(number,power){
	var result=1;
	for (var i = 0; i < power; i++) {
		result=result*number;
	}
	return result;
}

// Test Cases 9
TapeTest( 'Exponential', function( assert ) {
  assert.equal( recursiveExp(5,3),125, 'Yes, it is correct' ) ;
  assert.equal( recursiveExp(15,0),1, 'Yes, it is correct' ) ;
  assert.equal( recursiveExp(7,2),49, 'Yes, it is correct' ) ;
  assert.equal( iterativeExp(5,3),125, 'Yes, it is correct' ) ;
  assert.equal( iterativeExp(15,0),1, 'Yes, it is correct' ) ;
  assert.equal( iterativeExp(7,2),49, 'Yes, it is correct' ) ;
  assert.end() ;
} ) ;

// Exercise 10
function recursiveFactorial(number){
	if(number==0)
		return 1;
	else{
		return number*recursiveFactorial(number-1);
	}
}

function iterativeFactorial(number){
	var result=1;
	for (var i = number; i >0; i--) {
		result=result*i;
	}
	return result;
}

// Test Cases 10
TapeTest( 'Factorial', function( assert ) {
  assert.equal( recursiveFactorial(5),120, 'Yes, it is correct' ) ;
  assert.equal( recursiveFactorial(2),2, 'Yes, it is correct' ) ;
  assert.equal( recursiveFactorial(1),1, 'Yes, it is correct' ) ;
  assert.equal( iterativeFactorial(0),1, 'Yes, it is correct' ) ;
  assert.equal( iterativeFactorial(3),6, 'Yes, it is correct' ) ;
  assert.equal( iterativeFactorial(7),5040, 'Yes, it is correct' ) ;
  assert.end() ;
} ) ;

// Exercise 11
function printRecursiveFibonacci(){
	for (var i = 0; i < 10; i++)
		console.log(recursiveFibonacciSum(i));
}

function recursiveFibonacciSum(number){
	if(number==0 || number==1){
		return number;
	}
	else{
		return recursiveFibonacciSum(number-1)+recursiveFibonacciSum(number-2);
	}
}

function iterativeFibonacci(number){
	var series=[];
	var num1=0;
	var num2=1;
	var sum;

	for (var i = 0; i<number; i++) {
		if(i==0){
			series.push(num1);
		}else if(i==1){
			series.push(num2);
		}else{
			sum=num1+num2;
			series.push(sum);
			num1=num2;
			num2=sum;
		}
	}

	return series;
}

// Test Cases 11
TapeTest( 'Fibonacci', function( assert ) {
  assert.deepEqual( iterativeFibonacci(5),[0, 1, 1, 2, 3], 'Yes, it is correct' ) ;
  assert.deepEqual( iterativeFibonacci(10),[0, 1, 1, 2, 3, 5, 8, 13, 21, 34], 'Yes, it is correct' ) ;
  assert.deepEqual( iterativeFibonacci(1),[0], 'Yes, it is correct' ) ;
  assert.end() ;
} ) ;

// Exercise 12
zeroSum([1, 5, 0, -5, 3, -1]) // => [[0, 5], [1, 3]]
zeroSum([1, -1]) // => [[0, 1]]
zeroSum([0, 4, 3, 5]) // => []

function zeroSum(nums) {
	var pairs = [];
	for (var i = 0; i < nums.length; i++) {
		for (var j = i+1; j < nums.length; j++) {
			if(nums[i]==-1*nums[j]){
				pairs.push([i,j]);
			}
		}
	}
	console.log(pairs);
	return pairs;
}

// Test Cases 11
TapeTest( 'Zero Sum', function( assert ) {
  assert.deepEqual( zeroSum([1, 5, 0, -5, 3, -1]),[[0, 5], [1, 3]], 'Yes, it is correct' ) ;
  assert.deepEqual( zeroSum([1, -1]),[[0, 1]], 'Yes, it is correct' ) ;
  assert.deepEqual( zeroSum([0, 4, 3, 5]),[], 'Yes, it is correct' ) ;
  assert.end() ;
} ) ;
