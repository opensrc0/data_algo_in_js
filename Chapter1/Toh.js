
function TOHUtil(num, from, to, temp) {
	if (num < 1) {
		return;
	}
	TOHUtil(num - 1, from, temp, to);
	console.log("Move disk " + num + " from peg " + from + " to peg " + to);
	TOHUtil(num - 1, temp, to, from);
};

function TowersOfHanoi(num) {
	console.log("The sequence of moves involved in the Tower of Hanoi are :");
	TOHUtil(num, 'A', 'C', 'B');
};

TowersOfHanoi(3);