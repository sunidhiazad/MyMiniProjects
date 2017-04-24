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
		return recursiveFibonacci(number-1)+recursiveFibonacci(number-2);
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