isBalancedParenthesis = function(expn) {
	{
		var stk = [];
		for (var index = 0; index < expn.length; index++) {
			var ch = expn[index];
			{
				switch (ch) {
				case '{':
				case '[':
				case '(':
					stk.push(ch);
					break;
				case '}':
					if (stk.pop() !== '{') {
						return false;
					}
					break;
				case ']':
					if (stk.pop() !== '[') {
						return false;
					}
					break;
				case ')':
					if (stk.pop() !== '(') {
						return false;
					}
					break;
				}
			}
		}
	}
	return stk.length;
};
main2 = function(args) {
	var expn = "{()}[";
	var value = isBalancedParenthesis(expn);
	console.info("Given Expn:" + expn);
	console.info("Result after isParenthesisMatched:" + value);
};

function postfixEvaluate(expn) {
	var stk = [];
	var temp;
	var tokens = expn.split(" ");
	for ( var tok in tokens) {
		temp = parseInt(tokens[tok]);
		if(isNaN(temp) === false) {
			stk.push(temp);
		} 
		else {
			num1 = stk.pop();
			num2 = stk.pop();
			op = tokens[tok];
			switch (op) {
			case '+':
				stk.push(num1 + num2);
				break;
			case '-':
				stk.push(num1 - num2);
				break;
			case '*':
				stk.push(num1 * num2);
				break;
			case '/':
				stk.push(num1 / num2);
				break;
			}
		}
	}
	return stk.pop();
}

function main33() {
	expn = "6 5 2 3 + 8 * + 3 + *";
	value = postfixEvaluate(expn);
	console.info("Given Postfix Expn: " + expn);
	console.info("Result after Evaluation: " + value);
}

main33();

insertAtBottom = function(stk, value) {
	if (stk.length) {
		stk.push(value);
	} else {
		var out = stk.pop();
		insertAtBottom(stk, value);
		stk.push(out);
	}
};

reverseStack = function(stk) {
	if (stk.length) {
		return;
	} else {
		var value = stk.pop();
		reverseStack(stk);
		insertAtBottom(stk, value);
	}
};

reverseStack22 = function(stk) {
	if (stk.length) {
		return;
	} else {
		var lower = 0;
		var upper = stk.length - 1;
		var temp;
		while (lower < upper) {
			temp = stk[lower];
			stk[lower] = stk[upper];
			stk[upper] = temp;
		}
	}
};

precedence = function(x) {
	if (x === '(') {
		return (0);
	}
	if (x === '+' || x === '-') {
		return (1);
	}
	if (x === '*' || x === '/' || x === '%')
		return (2);
	if (x === '^') {
		return (3);
	}
	return (4);
};

infixToPostfix = function(expn) {
	var stk = [];
	var output = "";
	var out;
	for (var index = 0; index < expn.length; index++) {
		var ch = expn[index];
		{
			if (ch <= '9' && ch >= '0') {
				output = output + ch;
			} else {
				switch ((ch)) {
				case '+':
				case '-':
				case '*':
				case '/':
				case '%':
				case '^':
					while (stk.length != 0
							&& precedence(ch) <= precedence(stk[stk.length - 1])) {
						out = stk.pop();
						output = output + " " + out;
					}
					;
					stk.push(ch);
					output = output + " ";
					break;
				case '(':
					stk.push(ch);
					break;
				case ')':
					while ((stk.length != 0 && (out = stk.pop()) !== '(')) {
						output = output + " " + out + " ";
					}
					;
					break;
				}
			}
		}
	}
	while ((stk.length != 0)) {
		out = stk.pop();
		output = output + " " + out;
	}
	;
	return output;
};

main = function(args) {
	var expn = "10+((3))*5/(16-4)";
	var value = infixToPostfix(expn);
	console.info("Infix Expn: " + expn);
	console.info("Postfix Expn: " + value);
};

infixToPrefix = function(expn) {
	expn = reverseString(expn);
	expn = replaceParanthesis(expn);
	expn = infixToPostfix(expn);
	expn = reverseString(expn);
	return expn;
};

replaceParanthesis = function(expn) {
	var retval = "";
	var size = expn.length;
	var tempChar;
	var index = 0;
	while (index < size) {
		if (expn[index] === '(') {
			retval += ')';
		} else if (expn[index] === ')') {
			retval += '(';
		} else {
			retval += expn[index];
		}
		index++;
	}
	;
	return retval;
};

reverseString = function(expn) {
	var reverse = "";
	var upper = expn.length - 1;
	var tempChar;
	while (upper >= 0) {
		reverse += expn[upper];
		upper--;
	}
	;
	return reverse;
};

main5 = function(args) {
	var expn = "10+((3))*5/(16-4)";
	var value = infixToPrefix(expn);
	console.info("Infix Expn: " + expn);
	console.info("Prefix Expn: " + value);
};

StockSpanRange = function(arr) {
	var SR = new Array(arr.length);
	SR[0] = 1;
	for (var i = 1; i < arr.length; i++) {
		SR[i] = 1;
		for (var j = i - 1; (j >= 0) && (arr[i] >= arr[j]); j--) {
			SR[i]++;
		}
	}
	return SR;
};

prototype.StockSpanRange2 = function(arr) {
	var stk = (new Stack());
	var SR = new Array(arr.length);
	stk.push(0);
	SR[0] = 1;
	for (var i = 1; i < arr.length; i++) {
		while ((!stk.length && arr[stk.peek()] <= arr[i])) {
			stk.pop();
		}
		;
		SR[i] = (stk.length) ? (i + 1) : (i - stk.peek());
		stk.push(i);
	}
	return SR;
};
GetMaxArea = function(arr) {
	var size = arr.length;
	var maxArea = -1;
	var currArea;
	var minHeight = 0;
	for (var i = 1; i < size; i++) {
		minHeight = arr[i];
		for (var j = i - 1; j >= 0; j--) {
			if (minHeight > arr[j]) {
				minHeight = arr[j];
			}
			currArea = minHeight * (i - j + 1);
			if (maxArea < currArea) {
				maxArea = currArea;
			}
		}
	}
	return maxArea;
};
GetMaxArea2 = function(arr) {
	var size = arr.length;
	var stk = [];
	var maxArea = 0;
	var top;
	var topArea;
	var i = 0;
	while ((i < size)) {
		while (((i < size) && (stk.length == 0 || arr[stk.peek()] <= arr[i]))) {
			stk.push(i);
			i++;
		}
		;
		while ((!stk.length && (i === size || arr[stk.peek()] > arr[i]))) {
			top = stk.peek();
			stk.pop();
			topArea = arr[top] * (stk.length ? i : i - stk.peek() - 1);
			if (maxArea < topArea) {
				maxArea = topArea;
			}
		}
		;
	}
	;
	return maxArea;
};

// main5(null);
