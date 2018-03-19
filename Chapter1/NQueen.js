function NQueens(Q, k, n) {
	if (k === n) {
		console.log(Q.toString());
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

var Q = new Array(8);
NQueens(Q, 0, 8);	