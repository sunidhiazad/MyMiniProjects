var group = {
    Amy: 20,
    Bill: 15,
    Chris: 10
}

console.log(splitTheBill(group)); // => { Amy: -5, Bill: 0, Chris: 5 }

function splitTheBill(group){
	var totalAmount=0;
	var people=0;
	var average=0;

	for(i in group){
		totalAmount+=group[i];
		people++;
	}

	average=totalAmount/people;

	var balances={};

	for (i in group) {
		balances[i]=average-group[i];
	}
	return balances;
}