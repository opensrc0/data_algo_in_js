BruteForceSearch = function (text, pattern) {
	if ((typeof text === 'string') && (typeof pattern === 'string')) {
		var i = 0;
		var j = 0;
		var n = text.length;
		var m = pattern.length;
		while ((i <= n - m)) {
			j = 0;
			while ((j < m && pattern[j] === text[i + j])) {
				j++;
			};
			if (j === m) {
				return (i);
			}
			i++;
		};
		return -1;
	}
	else
		throw new Error('invalid arguments');
};

RobinKarp = function (text, pattern) {

	if ((typeof text === 'string') && (typeof pattern === 'string')) {
		return RobinKarpUtil(text, pattern);
	} else
		throw new Error('invalid overload');
};

RobinKarpUtil = function (text, pattern) {
	var n = text.length;
	var m = pattern.length;
	var i;
	var j;
	var prime = 101;
	var powm = 1;
	var TextHash = 0;
	var PatternHash = 0;
	if (m === 0 || m > n) {
		return -1;
	}
	for (i = 0; i < m - 1; i++) {
		powm = (powm << 1) % prime;
	}
	for (i = 0; i < m; i++) {
		PatternHash = ((PatternHash << 1) + (pattern[i]).charCodeAt(0)) % prime;
		TextHash = ((TextHash << 1) + (text[i]).charCodeAt(0)) % prime;
	}
	for (i = 0; i <= (n - m); i++) {
		if (TextHash === PatternHash) {
			for (j = 0; j < m; j++) {
				if (text[i + j] !== pattern[j]) {
					break;
				}
			}
			if (j === m)
				return i;
		}
		TextHash = (((TextHash - (text[i]).charCodeAt(0) * powm) << 1) + (text[i
			+ m]).charCodeAt(0))
			% prime;
		if (TextHash < 0) {
			TextHash = (TextHash + prime);
		}
	}
	return -1;
};

KMPPreprocess = function (pattern, ShiftArr) {
	var m = pattern.length;
	var i = 0;
	var j = -1;
	ShiftArr[i] = -1;
	while ((i < m)) {
		while ((j >= 0 && pattern[i] !== pattern[j])) {
			j = ShiftArr[j];
		};
		i++;
		j++;
		ShiftArr[i] = j;
	};
};

KMP = function (text, pattern) {
	if ((typeof text === 'string') && (typeof pattern === 'string')) {
		return KMPUtil(text, pattern);
	} else
		throw new Error('invalid overload');
};

KMPUtil = function (text, pattern) {
	var i = 0;
	var j = 0;
	var n = text.length;
	var m = pattern.length;
	var ShiftArr = new Array(m + 1);
	this.KMPPreprocess(pattern, ShiftArr);
	while ((i < n)) {
		while ((j >= 0 && text[i] !== pattern[j]))
			j = ShiftArr[j];
		i++;
		j++;
		if (j === m) {
			return (i - m);
		}
	};
	return -1;
};

KMPFindCount = function (text, pattern) {
	var i = 0;
	var j = 0;
	var count = 0;
	var n = text.length;
	var m = pattern.length;
	var ShiftArr = new Array(m + 1);
	this.KMPPreprocess(pattern, ShiftArr);
	while ((i < n)) {
		while ((j >= 0 && text[i] !== pattern[j])) {
			j = ShiftArr[j];
		};
		i++;
		j++;
		if (j === m) {
			count++;
			j = ShiftArr[j];
		}
	};
	return count;
};

var st1 = "hello, world!";
var st2 = "world";
console.log("BruteForceSearch return : " + BruteForceSearch(st1, st2));
console.log("RobinKarp return : " + RobinKarp(st1, st2));
console.log("KMP return : " + KMP(st1, st2));
