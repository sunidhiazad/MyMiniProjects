//FIRST IMPLEMENTATION

function createCurryCalc(){
    return function (a,b,c) {
      return function (d,e) {
        return a * b * c * d * e;
    }
  }
}

var curryCalc = createCurryCalc();
var partial = curryCalc(2, 3, 4);
console.log('FIRST: ',partial(1, 3));

//SECOND IMPLEMENTATION

function createCurryCalc2(){
    return function (a) {
      	return function (b,c) {
      		return function (d,e){
        		return a * b * c * d * e;
    		}
  		}
	}
}

var curryCalc2 = createCurryCalc2();
var partial2 = curryCalc2(2);
partial2 = partial2(4, 5)
console.log('SECOND: ',partial2(1, 3));

//THIRD IMPLEMENTATION

var curry = require('curry');

function mutltiplyFive(a , b, c, d, e){
	return a * b * c * d * e;
}

var curriedMultiplier = curry(mutltiplyFive);
var partialMult = curriedMultiplier(3 , 4);
var anotherPartial = partialMult(5, 6)
var product = anotherPartial(2); 

console.log('THIRD: ',product);