console.log('START');

for (var i = 0; i < 5; i++) {
	setTimeout(function(){
		console.log('MIDDLE')
	},0);
}

console.log('END');

//forEach demo

var nums = [1,2,4,6];

nums.forEach(function(element, index, arrray){
	console.log(element,'in',index);
});

//reduce demo

var result = nums.reduce(function(accumulator, num, index, array){
	console.log('accumulator',accumulator);
	console.log('number',num);
	return accumulator+num;
},0);

console.log('result',result);

// new keyword
// method style
// constructor style
// indirect invocation

function yell(){
	console.log('AAAHAAHHA');
}

console.log('With new',new yell());
console.log('Without new',yell());

var newContext = {a:2};
yell.call(newContext,'aaaaa');

var Writer = function(name,books){
	this.name=name;
	this.books=books;
}

Writer.prototype.printBooks = function(){
	console.log('Books from: '+this.name);
	this.books.forEach(function(book){
		//console.log(this);
		console.log(this.name,'wrote',book)
	});
}

Writer.prototype.printBooksContext = function(){
	console.log('Books from: '+this.name+' inside writer context');
	var writer = this;
	this.books.forEach(function(book){
		console.log(writer);
		console.log(writer.name,'wrote',book)
	});
}

Writer.prototype.printBooksBoundContext = function(){
	console.log('Books from: '+this.name+' inside writer context');
	function printBook(book){
		console.log(writer);
		console.log(writer.name,'wrote',book)
	}
	var boundPrint = printBook.bind(this);
	this.books.forEach(boundPrint);

	// Another way to do it
	// this.books.forEach(printBook.bind(this));
}

//yet another way
Writer.prototype.printBook = function(book){
	console.log(writer);
	console.log(writer.name,'wrote',book)
}

Writer.prototype.printBooksBoundContext = function(){
	console.log('Books from: '+this.name+' inside writer context');
	this.books.forEach(this.printBook.bind(this));
}
// -------------

var fante = new Writer('John Fante',['Book1','Book2']);
fante.printBooks();
fante.printBooksContext();

// bind method


