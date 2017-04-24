function countRepetitions(inputArray){
	var map={};
	for (var i = 0; i < inputArray.length; i++) {
	 	if(inputArray[i] in map){
	 		map[inputArray[i]]++;
	 	}else{
	 		map[inputArray[i]]=1;
	 	}
	 } 
	 console.log(map);
}

countRepetitions(['kerouac', 'fante', 'fante', 'buk', 'hemingway', 'hornby', 'kerouac', 'buk', 'fante']);