longest('abcccaa', 'acddddffzzz') // => 'abcdfz'

a = 'xyaabbbccccdefww'
b = 'xxxxyyyyabklmopq'
longest(a, b) // => 'abcdefklmopqwxy'

a = 'abcdefghijklmnopqrstuvwxyz'
longest(a, a) // => 'abcdefghijklmnopqrstuvwxyz'

function longest(string1,string2){
	var charArray=[];
	var string1Array=string1.split("");
	var string2Array=string2.split("");

	for (var i = 0; i < string1Array.length; i++) {
		if(charArray.indexOf(string1Array[i])<0){
			charArray.push(string1Array[i]);
		}
	}

	for (var i = 0; i < string2Array.length; i++) {
		if(charArray.indexOf(string2Array[i])<0){
			charArray.push(string2Array[i]);
		}
	}

	console.log(charArray.sort().join(''));

}