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