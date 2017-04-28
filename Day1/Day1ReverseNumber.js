convert(429563) // => [9, 6, 5, 4, 3, 2]
convert(324) // => [4, 3, 2]

function convert(number){

	var digitArray=[];
	var digit;
	while(number!==0){
		digit=number%10;
		digitArray.push(digit);
		number=Math.floor(number/10);
	}
	console.log(digitArray.sort(function(a, b){return b-a}));
}