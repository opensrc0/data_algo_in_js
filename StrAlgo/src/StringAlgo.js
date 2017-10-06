function matchExp(exp, str) {
	return matchExpUtil(exp, str, 0, 0);
};

function matchExpUtil(exp, str, i, j) {
	if (i === exp.length && j === str.length) {
		return true;
	}
	if ((i === exp.length && j !== str.length)
			|| (i !== exp.length && j === str.length)) {
		return false;
	}
	if (exp[i] === '?' || exp[i] === str[j]) {
		return matchExpUtil(exp, str, i + 1, j + 1);
	}
	if (exp[i] === '*') {
		return matchExpUtil(exp, str, i + 1, j)
				|| matchExpUtil(exp, str, i, j + 1)
				|| matchExpUtil(exp, str, i + 1, j + 1);
	}
	return false;
};

function main() {
	console.info(matchExp("hello*", "helloworld"));
	console.info(matchExp("hello?d", "hellowd"));
	console.info(matchExp("hello*hemant", "helloworldfsdfsdfdsfhemant"));
}
// main();

function match(source, pattern) {
	var iSource = 0;
	var iPattern = 0;
	var sourceLen = source.length;
	var patternLen = pattern.length;
	for (iSource = 0; iSource < sourceLen; iSource++) {
		if (source[iSource] === pattern[iPattern]) {
			iPattern++;
		}
		if (iPattern === patternLen) {
			return 1;
		}
	}
	return 0;
};

function main1() {
	console.info(match("hellofskdlfjsdlfjsldjflksdworld", "helloworld"));
	console.info(match("hellod", "hellowd"));
	console.info(match("hello*xxxxxxxxxxhemantxxxxxxxxxxxx", "hellnt"));
}
// main1();

function isPrime(n) {
	var answer = (n > 1) ? true : false;
	for (var i = 2; i * i < n; ++i) {
		if (n % i === 0) {
			answer = false;
			break;
		}
	}
	return answer;
};

function myAtoi(str) {
	var value = 0;
	var size = str.length;
	for (var i = 0; i < size; i++) {
		var ch = str[i];
		value = (value << 3) + (value << 1) + (ch - '0');
	}
	return value;
};

function ToUpper(s) {
	if ((s >= 'a') && (s <= 'z')) {
		s = ('A' + s - 'a');
	}
	return s;
};

function ToLower(s) {
	if ((s >= 'A') && (s <= 'Z')) {
		s = ('a' + s - 'A');
	}
	return s;
};

function isUniqueChar(str) {
	var bitarr = new Array(26);
	for (var i = 0; i < 26; i++) {
		bitarr[i] = 0;
	}
	var size = str.length;
	for (var i = 0; i < size; i++) {
		var c = str[i];
		if (('A' <= c) && ('Z' >= c)) {
			c = (c - 'A');
		} else if (('a' <= c) && ('z' >= c)) {
			c = (c - 'a');
		} else {
			console.info("Unknown Char!\n");
			return false;
		}
		if (bitarr[c] !== 0) {
			console.info("Duplicate detected!\n");
			return false;
		}
		bitarr[c] = 1;
	}
	console.info("No duplicate detected!\n");
	return true;
};

function LowerUpper(s) {
	if ((s >= 'A') && (s <= 'Z')) {
		s = ('a' + s - 'A');
	} else if ((s >= 'a') && (s <= 'z')) {
		s = ('A' + s - 'a');
	}
	return s;
};

function isPermutation(s1, s2) {
	var count = new Array(256);
	var length = s1.length;
	if (s2.length !== length) {
		console.info("is permutation return false\n");
		return false;
	}
	for (var i = 0; i < 256; i++) {
		count[i] = 0;
	}
	for (var i = 0; i < length; i++) {
		var ch = s1[i];
		count[ch]++;
		ch = s2[i];
		count[ch]--;
	}
	for (var i = 0; i < length; i++) {
		if (count[i] !== 0) {
			console.info("is permutation return false\n");
			return false;
		}
	}
	console.info("is permutation return true\n");
	return true;
};

function isPalindrome(str) {
	var i = 0;
	var j = str.length - 1;
	while ((i < j) && (str[i] === str[j])) {
		i++;
		j--;
	}
	;

	if (i < j) {
		console.info("String is not a Palindrome");
		return false;
	} else {
		console.info("String is a Palindrome");
		return true;
	}
};

function pow(x, n) {
	var value;
	if (n === 0) {
		return (1);
	} else if (n % 2 === 0) {
		value = pow(x, Math.floor(n / 2));
		return (value * value);
	} else {
		value = pow(x, Math.floor(n / 2));
		return (x * value * value);
	}
};

function myStrcmp(a, b) {
	var index = 0;
	var len1 = a.length;
	var len2 = b.length;
	var minlen = len1;
	if (len1 > len2) {
		minlen = len2;
	}
	while ((index < minlen) && (a[index] === b[index])) {
		index++;
	}
	;

	if (index === len1 && index === len2) {
		return 0;
	} else if (len1 === index) {
		return -1;
	} else if (len2 === index) {
		return 1;
	} else {
		return (a[index] - b[index]);
	}
};

function reverseStr(str) {
	var a = str.split("");
	var lower = 0;
	var upper = a.length - 1;
	var tempChar;
	while ((lower < upper)) {
		tempChar = a[lower];
		a[lower] = a[upper];
		a[upper] = tempChar;
		lower++;
		upper--;
	}
	;
	a.join("");
};

function reverseArray(a, lower, upper) {
	var tempChar;
	while ((lower < upper)) {
		tempChar = a[lower];
		a[lower] = a[upper];
		a[upper] = tempChar;
		lower++;
		upper--;
	}
	;
};

function reverseWords(a) {
	var length = a.length;
	var lower;
	var upper = -1;
	lower = 0;
	for (var i = 0; i <= length; i++) {
		if (a[i] === ' ') {
			reverseArray(a, lower, upper);
			lower = i + 1;
			upper = i;
		} else {
			upper++;
		}
	}
	reverseArray(a, 0, length - 1);
};

reverseWords("one two three four five");

function printAnagram(str) {
	var a = str.split("");
	var n = a.length;
	printAnagramUtil(a, n, n);
};

function printAnagramUtil(a, max, n) {
	if (max === 1) {
		console.info(a.join(""));
	}
	for (var i = -1; i < max - 1; i++) {
		if (i !== -1) {
			var temp = a[i];
			a[i] = a[max - 1];
			a[max - 1] = temp;
		}
		printAnagramUtil(a, max - 1, n);
		if (i !== -1) {
			var temp = a[i];
			a[i] = a[max - 1];
			a[max - 1] = temp;
		}
	}

};

function main3() {
	printAnagram("12345");
}
// main3();

function shuffle(str) {
	var ar = str.split("");
	var n = Math.floor(ar.length / 2);
	var count = 0;
	var k = 1;
	var temp;
	for (var i = 1; i < n; i = i + 2) {
		temp = ar[i];
		k = i;
		do {
			k = (2 * k) % (2 * n - 1);
			temp = ar[k];
			ar[k] = ar[i];
			ar[i] = temp;
			count++;
		} while ((i !== k));
		if (count === (2 * n - 2)) {
			break;
		}
	}
	return ar.join("");
};

// console.info(shuffle("ABCDE12345"));

function addBinary(first, second) {
	var size1 = first.length;
	var size2 = second.length;
	var totalIndex;
	var total;
	if (size1 > size2) {
		total = new Array(size1 + 2);
		totalIndex = size1;
	} else {
		total = new Array(size2 + 2);
		totalIndex = size2;
	}
	total[totalIndex + 1] = '';
	var carry = 0;
	size1--;
	size2--;
	while ((size1 >= 0 || size2 >= 0)) {
		var firstValue = (size1 < 0) ? 0 : (first[size1] - '0');
		var secondValue = (size2 < 0) ? 0 : (second[size2] - '0');
		var sum = firstValue + secondValue + carry;
		carry = sum >> 1;
		sum = sum & 1;
		total[totalIndex] = (sum === 0) ? '0' : '1';
		totalIndex--;
		size1--;
		size2--;
	}
	;
	total[totalIndex] = (carry === 0) ? '0' : '1';
	return total.join("");
};

// console.info(addBinary("1011", "111000111"));
