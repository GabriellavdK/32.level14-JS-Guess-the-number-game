let person = prompt("Welkom! Wat is je naam?");

alert("Hey " + person);

let guessNumber = Math.floor(Math.random() * 26);

let guess = prompt("Voer een nummer van 0 tot 25 in, om te beginnen met raden... Je krijgt in totaal 5 pogingen om het getal te raden.");

let attempts = 4;

while ((attempts != 0) && (guess != guessNumber))
{
	if (attempts > 1) {
		alert("Dat is niet correct");
		guess = prompt("Voer een ander nummer in van 0 tot 25 in, je hebt nog " + attempts + " pogingen over.");
		attempts--;
	} else {
		alert("Dat is niet correct");
		guess = prompt("Voer een ander nummer in van 0 tot 25 in, dit is je laatste poging!");
		attempts--;
	}
}

if (guess === guessNumber) {
	alert("Gefeliciteerd je hebt gewonnen!");
} else {
	alert("Dat is niet correct.");
	alert("Helaas zijn je pogingen op en heb je het getal niet geraden...");
	alert("Het juiste nummer was " + guessNumber + ".");
}

alert("Doei " + person + ". Tot de volgende keer!")