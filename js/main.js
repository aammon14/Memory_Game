// Create an array for the playing cards
var cards = [
	{
		rank: 'queen',
		suit: 'hearts',
		cardImage: 'images/queen-of-hearts.png'
	},
	{
		rank: 'queen',
		suit: 'diamonds',
		cardImage: 'images/queen-of-diamonds.png'
	},
	{
		rank:  'king',
		suit: 'hearts',
		cardImage: 'images/king-of-hearts.png'
	},
	{
		rank: 'king',
		suit: 'diamonds',
		cardImage: 'images/king-of-diamonds.png'
	}
];

//create variable for cards in play array
var cardsInPlay = [];

//check for match function, see if 2 cards in play match, alert user results
var checkForMatch = function () {
	//check to see if first card matches the second card
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You've found a match!");
	} else {
		alert("Sorry, try again.");
	}
};

//flipcard function, in console log for now
var flipCard = function () {
	//get data-id attribute of card clicked and store in CardId
	cardId = this.getAttribute('data-id');
	console.log(cardId);
	//push flipped card to cardsInPlay array
	cardsInPlay.push(cards[cardId].rank);
	//display card image
	this.setAttribute('src', cards[cardId].cardImage);
	//check to see if two cards have been played
	if (cardsInPlay.length === 2) {
		checkForMatch();
		cardsInPlay = [];
	}
};

//function to create the game board
var createBoard = function () {
	//for loop gets cards from card array and creates card elements
	for (var i = 0; i < cards.length; i++) {
		//create img element store as cardElement
		var cardElement = document.createElement('img');
		//setAttribute display back of card image
		cardElement.setAttribute('src', 'images/back.png');
		//set card's data-id attribute to be hte index of the current element
		cardElement.setAttribute('data-id', i);
		//addEventListener so when user clicks on card flipCard function is run
		cardElement.addEventListener('click', flipCard);
		//adds cardElement to the game-board
		document.getElementById('game-board').appendChild(cardElement);

	}
}

//call createBoard function
createBoard();




