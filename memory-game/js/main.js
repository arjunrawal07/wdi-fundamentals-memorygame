let cards = [
{
	"rank": "queen",
	"suit": "hearts",
	"cardImage": "images/queen-of-hearts.png"
},
{
	"rank": "queen",
	"suit": "diamonds",
	"cardImage": "images/queen-of-diamonds.png"
},
{
	"rank": "king",
	"suit": "hearts",
	"cardImage": "images/king-of-hearts.png"
},
{
	"rank": "king",
	"suit": "diamonds",
	"cardImage": "images/king-of-diamonds.png"
},
];

let cardsInPlay = [];
let score = 0;
let resetButton = document.getElementById('reset');
let statusMessage = document.getElementById('statusMessage');
let flipCount = 0;

function checkForMatch() {
	if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
}
};

function flipCard() {
		let cardId = this.getAttribute('data-id');
		cardsInPlay.push(cards[cardId].rank);
		this.setAttribute('src', cards[cardId].cardImage);
		console.log("User flipped" + cards[cardId].rank);
		console.log(cards[cardId].cardImage);
		console.log(cards[cardId].suit);
		checkForMatch();
};

function createBoard() {
	for (let i = 0; i < cards.length; i++) {
	let cardElement = document.createElement('img');
	cardElement.setAttribute('src','images/back.png');
	cardElement.setAttribute('data-id', i);
	cardElement.addEventListener('click', flipCard);
	document.getElementById('game-board').appendChild(cardElement);
}
};

let resetGame = function() {
	for (var i = 0; i < cards.length; i++) {
		let cardElement = document.querySelector('img');
		cardElement.remove();
		console.log('removeboard' + i);
	}
	score = 1;
	cardsInPlay.length = 0;
	updateScore();
	createBoard();
	statusMessage.textContent = "GAME RESET! TRY AGAIN!";
	resetButton.style.visibility = "hidden";
	flipCount = 0;
	}

	let updateScore = () {
		if (score < 2) {
			score++;
			console.log('Score is ' + score);
			document.getElementById('score').textContent = 'Score: " + score';
			if (score === 2) {
				statusMessage.textContent = "YOU WIN!";
				resetButton.style.visibility = "visible";
			}
		}
	}

function clickResetButton () {
	for (let i = 0; i < cards.length; i++) {
	let cardElement = document.createElement('img');
	cardElement.setAttribute('src','images/back.png');
	cardElement.setAttribute('data-id', i);
	cardElement.addEventListener('click',flipCard);
	document.getElementById('button').appendChild(cardElement);
}
};

resetButton.addEventListener('click', resetGame);
createBoard();






