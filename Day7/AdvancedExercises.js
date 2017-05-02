// Math randomInt
var myMath = Object.create(Math);

myMath.randomInt = function(number1, number2){
	if(typeof number2 === 'number')
		return number2 + this.round(this.random()*number1);
	else
		return this.round(this.random()*number1);
}

console.log(myMath.randomInt(10)); // 10 for example
console.log(myMath.random());
console.log(myMath.round(0.5));
console.log(myMath.randomInt(10, -4)); // -3 for example

// String reverse
String.prototype.reverse = function(){
	var chars = this.split('');
	var reverseChars = [];

	var j=0;
	for (var i = chars.length - 1 ; i >=0 ; i--) {
		reverseChars[j++] = chars[i];
	}

	return reverseChars.join('');
}

console.log('hello'.reverse());

// Array myEach
Array.prototype.myEach = function(myFunction){
	var myArray = [];
	for (var i = 0; i < this.length; i++) {
		item = myFunction(this[i], i);
		if(item != null)
			myArray.push(item);
	}
	return myArray;
}

function display(element, index){
	return 'array['+index+']: '+element;
}

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var returnedArray = fruits.myEach(display);
console.log(returnedArray);

// Array myMap
Array.prototype.myMap = function(myFunction){
	return this.myEach(myFunction);
}

var array = [1,2,3,4,5];
var newarray = array.myMap(function(x){
	return x*2;
});

console.log(newarray);

// Array myFilter
Array.prototype.myFilter = function(myFunction){
	var myArray = [];
	for (var i = 0; i < this.length; i++) {
		if(myFunction(this[i], i))
			myArray.push(this[i]);
	}
	return myArray;
}

function isBigEnough(value) {
  return value >= 10;
}

var filtered = [12, 5, 8, 130, 44].myFilter(isBigEnough);
console.log(filtered);

//merge
function merge(){
	var parent = {};
	var objects = [].slice.call(arguments,0);
	var currentObject;
	var currentObjectProperties;
	var currentProperty;
	var k = 0;
	for (var i = 0; i < objects.length; i++) {
		currentObject = objects[i];
		currentObjectProperties = Object.getOwnPropertyNames(currentObject);
		for (var j = 0; j < currentObjectProperties.length; j++) {
			currentProperty = currentObjectProperties[j];
			if(!parent.hasOwnProperty(currentProperty)){
				parent[currentProperty] = currentObject[currentProperty];
			}
		}	
	}
	return parent;
}

var obj1 = merge({ a: 3, b: 2 }, { a: 5, c: 4 }); // { a: 3, b: 2, c: 4 }
var obj2 = merge({ a: 3, b: 2 }, { a: 2, c: 4 }, { e: 8, c: 5}); // { a: 3, b: 2, c: 4, e: 8 }

console.log(obj1);
console.log(obj2);

// invert
function invert(myObject){
	var newObject = {};
	var properties = Object.getOwnPropertyNames(myObject);
	for (var i = 0; i < properties.length; i++) {
		key = properties[i];
		value = parseInt(myObject[key]);
		newObject[value] = key;
	}
	return newObject;
}

console.log(invert({ a: 3, b: 2 }));








