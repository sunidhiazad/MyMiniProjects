function Question(title,choices,correctAns,category){
	this.title=title;
	this.choices=choices;
	this.correctAns=correctAns;
	this.category=category;
}

Question.prototype.toString = function(){
	return this.title+' ['+this.choices+'] ';
}

function Player(pName){
	this.pName=pName;
	this.scoreCard=[];
}

function ScoreItem(category,isCorrect){
	this.category=category;
	this.isCorrect=isCorrect;
}

function Trivial(){
	this.questionList=[];
	this.playerList=[];
}

Trivial.prototype.addQuestion = function(question){
	this.questionList.push(question);
}

Trivial.prototype.addPlayer = function(player){
	this.playerList.push(player);
}

Trivial.prototype.setPlayers = function(){
	var howManyPlayers = window.prompt('How many players want to play?');
	var playerName;
	for (var i = 0; i < howManyPlayers; i++) {
		playerName = window.prompt('Enter name for Player#'+i);
		this.addPlayer(new Player(playerName));
	}
}

Trivial.prototype.play = function(){
	var totalPlayers=this.playerList.length;
	var totalQuestionsToAsk= this.questionList.length;
	var message='';
	
	// While all the questions have been asked
	while(totalQuestionsToAsk>0){

		// Alternate questions between all the players
		for (var i = 0; i < totalPlayers; i++) {
			var currQues=this.questionList[totalQuestionsToAsk-1];
			var currentScore;

			message='Question for ' + this.playerList[i].pName + ': ' + currQues.toString();

			console.log('Question#',totalQuestionsToAsk,message)

			if(currQues.category == 'Binary'){

				var binResult = window.confirm(message);

				if(binResult == currQues.correctAns){

					currentScore = new ScoreItem(currQues.category,true);
					console.log('Hurrah! You are right! -->',binResult);

				}else{

					currentScore = new ScoreItem(currQues.category,false);
					console.log('Oops! Wrong Answer! --> You said',binResult,'Correct option is',currQues.correctAns);

				}	

				this.playerList[i].scoreCard.push(currentScore);
				binResult=null;

			}else{

				var promptResult = window.prompt(message);

				if(promptResult !== ''){

					if(promptResult.toUpperCase() === currQues.correctAns){

						currentScore = new ScoreItem(currQues.category,true);
						console.log('Hurrah! You are right! -->',promptResult.toUpperCase());

					}else{

						currentScore = new ScoreItem(currQues.category,false);
						console.log('Oops! Wrong Answer! --> You said',promptResult.toUpperCase(),'Correct option is',currQues.correctAns);

					}	

					this.playerList[i].scoreCard.push(currentScore);
					promptResult = null;

				}else{

					console.log('No answer given for this one! -->','Correct option is',currQues.correctAns);

				}
			}
			
			message='';
			totalQuestionsToAsk--;
		}	
	}
}

Trivial.prototype.printScore = function(){
	console.log('Printing scores...');
	var corrects = 0;
	var wrongs = 0;

	for (var i = 0; i < this.playerList.length; i++) {
		var player = this.playerList[i];

		for (var j = 0; j < player.scoreCard.length; j++) {
			if(player.scoreCard[j].isCorrect)
				corrects++;
			else 
				wrongs++;
		}

		console.log('Player:',player.pName,'Score:',corrects,'/',corrects+wrongs);
		corrects = 0;
		wrongs = 0;
	}
}

Trivial.prototype.printScoreByCategory = function(){
	console.log('Printing scores by category...');

	var player;
	var categories=[];
	var corrects = 0;
	var wrongs = 0;

	for (var i = 0; i < this.playerList.length; i++) {
		player = this.playerList[i];
		console.log('Score of',player.pName);
		// Get all the categories from the score
		for (var j = 0; j < player.scoreCard.length; j++) {
			if(categories.indexOf(player.scoreCard[j].category) < 0){
				categories.push(player.scoreCard[j].category);
			}
		}

		for (var k = 0; k < categories.length; k++) {
			
			for (var l = 0; l < player.scoreCard.length; l++) {

				if(player.scoreCard[l].category === categories[k]){
					if(player.scoreCard[l].isCorrect)
						corrects++;
					else
						wrongs++;
				}
			}
			console.log('Category:',categories[k],'--> Score:',corrects,'/',corrects+wrongs);
			corrects = 0;
			wrongs = 0;
		}
		categories = [];
	}
}

var question1 = new Question('Capital of France', ['A - Paris', 'B - Rome'], 'A', 'Geography');
var question2 = new Question('Capital of Canada', ['A - Toronto', 'B - Ottawa','C - Vancouver'], 'B', 'Geography');
var question3 = new Question('Capital of Switzerland', ['A - Bern', 'B - Zurich'], 'A', 'Geography');
var question4 = new Question('Capital of Bulgaria', ['A - Gimi', 'B - Veliko Turnovo', 'C - Sofia'], 'C', 'Geography');
var question5 = new Question('Capital of Portugal', ['A - Porto', 'B - Lisbon'], 'B', 'Geography');

var question11 = new Question('Formula of Water', ['A - H2O', 'B - HO3'], 'A', 'Science');
var question12 = new Question('Formula of Oxygen', ['A - O2', 'B - O5'], 'A', 'Science');
var question13 = new Question('Formula of Sodium', ['A - Sa', 'B - Na'], 'B', 'Science');
var question14 = new Question('Formula of alcohol', ['A - C2H5OH', 'B - Al'], 'A', 'Science');
var question15 = new Question('Formula of Magnesium', ['A - Ma', 'B - Mg'], 'B', 'Science');

var question6 = new Question('Capital of India', ['A - New Delhi', 'B - Mumbai'], 'A', 'Geography');
var question7 = new Question('Capital of Sweden', ['A - Malmo', 'B - Stockholm'], 'B', 'Geography');
var question8 = new Question('Capital of USA', ['A - New York', 'B - Washington'], 'B', 'Geography');
var question9 = new Question('Capital of Columbia', ['A - Bogota', 'B - Cali'], 'A', 'Geography');
var question10 = new Question('Capital of Mexico', ['A - Mexico City', 'B - Guadalejara'], 'A', 'Geography');

var question16 = new Question('Formula of Barium', ['A - Ba', 'B - Bm'], 'A', 'Science');
var question17 = new Question('Which is an OS', ['A - Windows', 'B - Shell'], 'A', 'Computer Science');
var question18 = new Question('Type of 10', ['A - Integer', 'B - String'], 'A', 'Computer Science');
var question19 = new Question('Which is not boolean value', ['A - True', 'B - Wrong'], 'B', 'Computer Science');
var question20 = new Question('Which is not a programming language', ['A - Ruby', 'B - Emerald'], 'B', 'Computer Science');

var question21 = new Question('Are you a male?', ['Y - Yes', 'N - No'], true, 'Binary');
var question22 = new Question('Are you a male?', ['Y - Yes', 'N - No'], false, 'Binary');

var question23 = new Question('Where is Monalisa?', ['A - Paris', 'B - Rome'], 'A', 'Arts');
var question24 = new Question('Is Mozart spanish?', ['A - Yes', 'B - No'], 'B', 'Arts');

var player1 = new Player('Amy');
var player2 = new Player('Bob');

var trivObj = new Trivial();
trivObj.addQuestion(question1);
trivObj.addQuestion(question2);
trivObj.addQuestion(question3);
trivObj.addQuestion(question4);
trivObj.addQuestion(question5);
trivObj.addQuestion(question6);
trivObj.addQuestion(question7);
trivObj.addQuestion(question8);
trivObj.addQuestion(question9);
trivObj.addQuestion(question10);
trivObj.addQuestion(question11);
trivObj.addQuestion(question12);
trivObj.addQuestion(question13);
trivObj.addQuestion(question14);
trivObj.addQuestion(question15);
trivObj.addQuestion(question16);
trivObj.addQuestion(question17);
trivObj.addQuestion(question18);
trivObj.addQuestion(question19);
trivObj.addQuestion(question20);
trivObj.addQuestion(question21);
trivObj.addQuestion(question22);
trivObj.addQuestion(question23);
trivObj.addQuestion(question24);

trivObj.addPlayer(player1);
trivObj.addPlayer(player2);
//trivObj.setPlayers();

trivObj.play();
trivObj.printScore();
trivObj.printScoreByCategory();