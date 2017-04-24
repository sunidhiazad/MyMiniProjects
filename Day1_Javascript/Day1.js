function yell(){
	console.log('Inside yell');
}

var anotherYell= function(){
	console.log('Inside anotherYell');
}

setTimeout(yell,2000);
setTimeout(anotherYell,100)

setTimeout(function(){
	console.log('In-place function')
},1000);