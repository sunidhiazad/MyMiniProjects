areSameType(['hello', 'world', 'long sentence']) // => true
areSameType([1, 2, 9, 10]) // => true
areSameType([['hello'], 'hello', ['bye']]) // => false
areSameType([['hello'], [1, 2, 3], [{ a: 2 }]]) // => true
areSameType('hello') // => false
areSameType([['hello'], [1, 2, 3], { a: 2 }]) // => false

function areSameType(variable){
	if(!Array.isArray(variable)){
		console.log(variable, 'is not an array.');
	}else{
		var isSame=true;
		for (var i = 1; i < variable.length; i++) {
			if(Array.isArray(variable[0])){
				if(!Array.isArray(variable[i])){
					isSame=false;
					break;
				}
			}else{
				if(typeof variable[i] !== typeof variable[0]){
					isSame=false;
					break;
				}	
			}	
		}
		if(isSame)
			console.log(variable,'-->All items in array are the same');
		else
			console.log(variable,'-->All items in array are not the same');
	}
}