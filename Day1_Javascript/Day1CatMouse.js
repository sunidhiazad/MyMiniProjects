console.log('C.....m',isCaught('C.....m'));
console.log('C..m',isCaught('C..m'));
console.log('..C..m',isCaught('..C..m'));

function isCaught(input){
	var charArray=input.split('');
	var canCatch=false;
	for (var i = 0; i < charArray.length; i++) {
		if(charArray[i]=='C'){
			for (var j = 1; j <=3 ; j++) {
				if(i+j>=charArray.length)
					break;
				if(charArray[i+j]=='m')
					canCatch=true;
			}
		}	
	}
	return canCatch;
}