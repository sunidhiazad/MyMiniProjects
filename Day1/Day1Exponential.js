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