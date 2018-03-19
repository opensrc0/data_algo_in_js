main = function(args) {
	var Q = new Array(8);
	NQueens(Q, 0, 8);	
};

function NQueens(Q, k, n) {
	if (k === n) {
		console.info(Q.toString());
		return;
	}
	for (var i = 0; i < n; i++) {
		Q[k] = i;
		if (Feasible(Q, k)) {
			NQueens(Q, k + 1, n);
		}
	}
};

function Feasible(Q, k) {
	for (var i = 0; i < k; i++) {
		if (Q[k] === Q[i] || Math.abs(Q[i] - Q[k]) === Math.abs(i - k)) {
			return false;
		}
	}
	return true;
};



function TOHUtil(num, from, to, temp) {
	if (num < 1) {
		return;
	}
	TOHUtil(num - 1, from, temp, to);
	console.info("Move disk " + num + " from peg " + from + " to peg " + to);
	TOHUtil(num - 1, temp, to, from);
};

function TowersOfHanoi(num) {
	console.info("The sequence of moves involved in the Tower of Hanoi are :");
	TOHUtil(num, 'A', 'C', 'B');
};

TowersOfHanoi(3);

//main(null);