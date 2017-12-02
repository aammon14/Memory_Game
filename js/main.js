var cards = ["queen" , "king" , "queen" , "king"];

var cardsInPlay = [];

var cardOne = cards[0];

cardsInPlay.push(cardOne);
	console.log("User flipped a queen");

var cardTwo = cards[1];

cardsInPlay.push(cardTwo);
	console.log("user flipped a king");

if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!")
} else {
	alert("Sorry, try again.")
}
