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
	console.log(matchExp("hello*", "helloworld"));
	console.log(matchExp("hello?d", "hellowd"));
	console.log(matchExp("hello*hemant", "helloworldfsdfsdfdsfhemant"));
}
main();


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
	console.log(match("hellofskdlfjsdlfjsldjflksdworld", "helloworld"));
	console.log(match("hellod", "hellowd"));
	console.log(match("hello*xxxxxxxxxxhemantxxxxxxxxxxxx", "hellnt"));
}
main1();

function isPrime(n) {
	var answer = (n > 1) ? true : false;
	for (var i = 2; i * i <= n; ++i) {
		if (n % i === 0) {
			answer = false;
			break;
		}
	}
	return answer;
};

console.log(isPrime(7))
console.log(isPrime(9))

function isUniqueChar(str) {
	var bitarr = new Array(26);
	for (var i = 0; i < 26; i++) {
		bitarr[i] = 0;
	}
	var small = "a".charCodeAt(0)
	var big = "A".charCodeAt(0)
	var size = str.length;
	for (var i = 0; i < size; i++) {
		var c = str.charCodeAt(i);
		if ((big <= c) && (big + 26 >= c)) {
			c = (c - big);
		} else if ((small <= c) && (small + 26 >= c)) {
			c = (c - small);
		} else {
			console.log("Unknown Char!\n");
			return false;
		}
		if (bitarr[c] !== 0) {
			console.log("Duplicate detected!\n");
			return false;
		}
		bitarr[c] = 1;
	}
	console.log("No duplicate detected!\n");
	return true;
};

isUniqueChar("hello")
isUniqueChar("helo")


function isPermutation(s1, s2) {
	var count = new Array(256);
	var length = s1.length;
	if (s2.length !== length) {
		console.log("is permutation return false\n");
		return false;
	}
	for (var i = 0; i < 256; i++) {
		count[i] = 0;
	}
	for (var i = 0; i < length; i++) {
		var ch = s1.charCodeAt(i);
		console.log(ch)
		count[ch]++;
		ch = s2.charCodeAt(i);
		count[ch]--;
	}
	for (var i = 0; i < 256; i++) {
		if (count[i] !== 0) {
			console.log("is permutation return false\n");
			return false;
		}
	}
	console.log("is permutation return true\n");
	return true;
};

isPermutation("apple","plepa");
isPermutation("apple","plepb");

function isPalindrome(str) {
	var i = 0;
	var j = str.length - 1;
	while ((i < j) && (str[i] === str[j])) {
		i++;
		j--;
	};

	if (i < j) {
		console.log("String is not a Palindrome");
		return false;
	} else {
		console.log("String is a Palindrome");
		return true;
	}
};

console.log(isPalindrome("helloolleh"))
console.log(isPalindrome("abab"))


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
console.log(pow(2,10))

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
	};

	if (index === len1 && index === len2) {
		return 0;
	} else if (len1 === index) {
		return -1;
	} else if (len2 === index) {
		return 1;
	} else {
		return (a.charCodeAt(index) - b.charCodeAt(index));
	}
};

console.log(myStrcmp("hello", "bello"))

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

function reverseWords(str) {
	var a = str.split("");
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
	reverseArray(a, lower, upper-1);
	reverseArray(a, 0, length - 1);
	return a.join("");
};
var arr = "one two three four five";
console.log(reverseWords(arr));

function printAnagram(str) {
	var a = str.split("");
	var n = a.length;
	printAnagramUtil(a, n, n);
};

function printAnagramUtil(a, max, n) {
	if (max === 1) {
		console.log(a.join(""));
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


printAnagram("12345");

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

console.log(addBinary("1011", "111000111"));
