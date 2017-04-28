'Use Strict';

// Hoisting

function printTest() {
  console.log(test); // we will get 'undefined', but not an error.
  if (true) {
    var test = 'hello';
  }
}

printTest(); 

// async

console.log('In the beginning');

function middle(){
setTimeout(function(){
	console.log('In the middle');
},0);
}

const intervalId=setInterval(middle,1000);
setTimeout(function(){
	console.log('In the clearing..');
	clearInterval(intervalId);
},5000);

for (var i = 0; i < 5; i++) {
	console.log(i);
}

console.log('In the end');