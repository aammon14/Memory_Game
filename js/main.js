var cards = ["queen" , "queen" , "king" , "king"];

var cardsInPlay = [];
cardsInPlay.push(cards[0]);

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You've found a match");
	} else {
		console.log("Sorry, try again.")
	}
};

var flipCard = function (cardId) {
	console.log("User flipped " + cards[cardId]);
	checkForMatch ();
};

flipCard(0);
flipCard(1);

