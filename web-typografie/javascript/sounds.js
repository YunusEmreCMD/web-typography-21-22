// Hier kan je tijden toevoegen in secondes
// Op die mommenten komt er een class op de body.
sounds = [
	0,
	9,
	12,
	15,
	16.5,
	24,
	25.8,
	31,
	32,
	34, 
	75.5,
	86,
	130
];


var playKnop = document.querySelector("button");

function verdwijnPlay() {
	playKnop.classList.add("verdwijn-knop");
}
playKnop.addEventListener("click", verdwijnPlay);
