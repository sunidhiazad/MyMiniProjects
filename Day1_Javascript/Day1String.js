isString('hello'); // => true
isString(['hello']); // => false
isString('this is a long sentence'); // => true
isString({ a: 2 }); // => false

function isString(arg){
	var isStringFlag = (typeof arg=='string');
	console.log(isStringFlag);
}