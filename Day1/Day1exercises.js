// Exercise 1
isString('hello'); // => true
isString(['hello']); // => false
isString('this is a long sentence'); // => true
isString({ a: 2 }); // => false

function isString(arg){
	var isStringFlag = (typeof arg=='string');
	console.log('Is',arg,'a String?',isStringFlag);
}

// Exercise 2
isArray('hello'); // => false
isArray(['hello']); // => true
isArray([2, {}, 10]); // => true
isArray({ a: 2 }); // => false

function isArray(arg){
	var isArrayFlag = (Array.isArray(arg));
	console.log('Is',arg,'an array?',isArrayFlag);
}

// Exercise 3

areSameType(['hello', 'world', 'long sentence']) // => true
areSameType([1, 2, 9, 10]) // => true
areSameType([['hello'], 'hello', ['bye']]) // => false
areSameType([['hello'], [1, 2, 3], [{ a: 2 }]]) // => true
areSameType('hello') // => false
areSameType([['hello'], [1, 2, 3], { a: 2 }]) // => false

function areSameType(variable){
	if(!Array.isArray(variable)){
		console.log(variable, 'is not an array.');
	}else{
		var isSame=true;
		for (var i = 1; i < variable.length; i++) {
			if(Array.isArray(variable[0])){
				if(!Array.isArray(variable[i])){
					isSame=false;
					break;
				}
			}else{
				if(typeof variable[i] !== typeof variable[0]){
					isSame=false;
					break;
				}	
			}	
		}
		if(isSame)
			console.log(variable,'-->All items in array are the same');
		else
			console.log(variable,'-->All items in array are not the same');
	}
}

// Exercise 4
longest('abcccaa', 'acddddffzzz') // => 'abcdfz'

a = 'xyaabbbccccdefww'
b = 'xxxxyyyyabklmopq'
longest(a, b) // => 'abcdefklmopqwxy'

a = 'abcdefghijklmnopqrstuvwxyz'
longest(a, a) // => 'abcdefghijklmnopqrstuvwxyz'

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

	console.log(charArray.sort().join(''));

}

// Exercise 5
convert(429563) // => [9, 6, 5, 4, 3, 2]
convert(324) // => [4, 3, 2]

function convert(number){

	var digitArray=[];
	var digit;
	while(number!==0){
		digit=number%10;
		digitArray.push(digit);
		number=Math.floor(number/10);
	}
	console.log(digitArray.sort().reverse());
}

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
	 console.log(map);
}

countRepetitions(['kerouac', 'fante', 'fante', 'buk', 'hemingway', 'hornby', 'kerouac', 'buk', 'fante']);

// Exercise 7
console.log('C.....m',isCaught('C.....m'));
console.log('C..m',isCaught('C..m'));
console.log('..C..m',isCaught('..C..m'));

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

// Exercise 8
var group = {
    Amy: 20,
    Bill: 15,
    Chris: 10
}

console.log(splitTheBill(group)); // => { Amy: -5, Bill: 0, Chris: 5 }

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

// Exercise 9
console.log('Recursive:');
console.log('exp(5, 3)',recursiveExp(5,3));
console.log('exp(2, 4)',recursiveExp(2,4));
console.log('exp(5, 1)',recursiveExp(5,1));
console.log('exp(6, 0)',recursiveExp(6,0));

console.log('Iterative:');
console.log('exp(5, 3)',iterativeExp(5,3));
console.log('exp(2, 4)',iterativeExp(2,4));
console.log('exp(5, 1)',iterativeExp(5,1));
console.log('exp(6, 0)',iterativeExp(6,0));

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

// Exercise 10
console.log('Recursive:');
console.log('Factorial(5)',recursiveFactorial(5));
console.log('Factorial(4)',recursiveFactorial(4));
console.log('Factorial(0)',recursiveFactorial(0));
console.log('Factorial(7)',recursiveFactorial(7));

console.log('Iterative:');
console.log('Factorial(5)',iterativeFactorial(5));
console.log('Factorial(4)',iterativeFactorial(4));
console.log('Factorial(0)',iterativeFactorial(0));
console.log('Factorial(7)',iterativeFactorial(7));

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

// Exercise 11
console.log('Iterative:');
console.log('Fibonacci(5)',iterativeFibonacci(5));
console.log('Fibonacci(4)',iterativeFibonacci(4));
console.log('Fibonacci(0)',iterativeFibonacci(0));
console.log('Fibonacci(7)',iterativeFibonacci(7));
console.log('Fibonacci(1)',iterativeFibonacci(1));

for (var i = 0; i < 10; i++) {
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
