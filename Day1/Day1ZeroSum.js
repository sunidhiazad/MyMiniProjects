zeroSum([1, 5, 0, -5, 3, -1]) // => [[0, 5], [1, 3]]
zeroSum([1, -1]) // => [[0, 1]]
zeroSum([0, 4, 3, 5]) // => []

function zeroSum(nums) {
	var pairs = [];
	for (var i = 0; i < nums.length; i++) {
		for (var j = i+1; j < nums.length; j++) {
			if(nums[i]==-1*nums[j]){
				pairs.push([i,j]);
			}
		}
	}
	console.log(pairs);
	return pairs;
}