isArray('hello'); // => false
isArray(['hello']); // => true
isArray([2, {}, 10]); // => true
isArray({ a: 2 }); // => false

function isArray(arg){
	var isArrayFlag = (arg.constructor==Array);
	console.log(isArrayFlag);
}