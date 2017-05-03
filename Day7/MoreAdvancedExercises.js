var myBind = function(myFunc, myObj, args){
	var boundFunc1 = function(){
		return myFunc.call(myObj);
	}
	var boundFunc2 = function(){
		return myFunc.call(myObj, args);
	}
	if(args == null)
		return boundFunc1;
	else
		return boundFunc2;
}

var myBind2 = function(fn, ctx, parameters) {
	if(parameters == null){
		return function(){
			fn.call(ctx);
		}
	} else{
		var args = [].slice.call(arguments,2);
		return function(args){
			fn.apply(ctx, args);
		}
	}
}

var obj = {
  name: 'Markov'
}

function printName() {
  console.log('Thy name is: ' + this.name);
}

function printNameWithArguments(args) {
	console.log('Thy argument is',args,'& Thy name is: ' + this.name);
}



console.log('BEFORE');
printName();
var boundPrint1 = myBind(printName, obj);
console.log('AFTER');
boundPrint1();
var args = 'Sunazshine'
var boundPrint2 = myBind(printNameWithArguments, obj, args);
boundPrint2();

console.log('BEFORE 1');
printName();
var boundPrint3 = myBind2(printName, obj);
console.log('AFTER 1');
boundPrint3();
var boundPrint4 = myBind2(printNameWithArguments, obj, 'Sunazshine');
boundPrint4();

var myBind = function(myFunc, myObj, args){
	var boundFunc1 = function(){
		return myFunc.call(myObj);
	}
	var boundFunc2 = function(){
		return myFunc.call(myObj, args);
	}
	if(args == null)
		return boundFunc1;
	else
		return boundFunc2;
}
function myBindImproved(fn, ctx) {
  var args = Array.prototype.slice.call(arguments, 2);
  return function() {
    var otherArgs = Array.prototype.slice.call(arguments);
    var totalArgs = args.concat(otherArgs);
    fn.apply(ctx, totalArgs);
  }
}

var myBind2 = function(fn, ctx, parameters) {
	if(parameters == null){
		return function(){
			fn.call(ctx);
		}
	} else{
		var args = [].slice.call(arguments,2);
		return function(args){
			fn.apply(ctx, args);
		}
	}
}

var obj = {
  name: 'Markov'
}

function greetingsTo(name) {
  console.log('Hello ' + name + ', my name is: ' + this.name);
}

greetingsTo('Fante'); //Hello Fante, my name is: undefined

var boundGreeting = myBindImproved(greetingsTo, obj);
boundGreeting('Fante'); //Hello Fante, my name is: Markov

function greetingsToAll(name, name2) {
  console.log('Hello ' + name + ' and ' + name2 + ', my name is: ' + this.name);
}
greetingsToAll('Fante', 'Hornby'); //Hello Fante and Hornby, my name is: undefined

var boundToAll = myBindImproved(greetingsToAll, obj);
boundToAll('Fante', 'Hornby'); //Hello Fante and Hornby, my name is: Markov

var boundAndFirst = myBindImproved(greetingsToAll, obj, 'Fante');
boundAndFirst('Hornby'); //Hello Fante and Hornby, my name is: Markov