function Person(firstName, lastName){
	this.firstName = firstName;
	this.lastName = lastName;
	this.isAlive = true;
}

Person.prototype.greet = function(){
	console.log('Person.greet-->','Hello, this is',this.firstName,this.lastName);
}

function Writer(firstName, lastName){
	Person.call(this, firstName, lastName);
	this.pseudonym = lastName+' '+firstName;
	this.constructor = Writer;
}

Writer.prototype = Object.create(Person.prototype);

Writer.prototype.signBook = function(){
	console.log('Writer.signBook-->','Signed by',this.pseudonym);
}

function Developer(firstName, lastName , codename){
	Person.call(this, firstName, lastName);
	this.codename = codename;
	this.constructor = Developer;
}

Developer.prototype = Object.create(Person.prototype);

Developer.prototype.impress = function(){
	console.log('Developer.impress-->');
	for (var i = 0; i < 5; i++) {
		var line = []
		for (var j = 0; j < 10; j++) {
			line.push(Math.round(Math.random(1)));
		}
		console.log(line.join(''));
		line = [];
	}
	console.log('Signed by',this.codename);
}

function Singer(firstName, lastName,melody){
	Person.call(this, firstName, lastName);
	this.artisticName = 'Fancy'+lastName+firstName;
	this.melody = melody;
	this.constructor = Singer;
}

Singer.prototype = Object.create(Person.prototype);

Singer.prototype.sing = function(){
	console.log('Singer.sing-->');
	for (var i = 0; i < 3; i++) {
		console.log('Singing',this.melody);
	}
	
}

function JuniorDeveloper(firstName, lastName , codename){
	Developer.call(this, firstName, lastName, codename);
	this.isStruggling = true;
	this.constructor = JuniorDeveloper;
}

JuniorDeveloper.prototype = Object.create(Developer.prototype);

JuniorDeveloper.prototype.complain = function(){
	console.log('JuniorDeveloper.complain-->');
	console.log(this.codename.toUpperCase());
}

JuniorDeveloper.prototype.workHard = function(){
	console.log('JuniorDeveloper.workHard-->');
	for (var i = 0; i < 10; i++) {
		console.log(this.codename,'is working hard');
	}
	
}

console.log('==============PERSON==============')
var person = new Person('Jane','Doe');
person.greet();

console.log('==============WRITER==============')
var writer = new Writer('John','Smith');
writer.greet();
writer.signBook();

console.log('==============DEVELOPER==============')
var developer = new Developer('Sierra','Bates','Kingdoms');
developer.greet();
developer.impress();

console.log('==============PERSON==============')
var singer = new Singer('Miley','Cyrus','Wrecking Ball');
singer.greet();
singer.sing();

console.log('==============JUNIOR DEVELOPER==============')
var juniorDeveloper = new JuniorDeveloper('Sierra','Bates','Kingdoms');
juniorDeveloper.greet();
juniorDeveloper.impress();
juniorDeveloper.complain();
juniorDeveloper.workHard();