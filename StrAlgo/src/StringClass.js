/* Generated from Java with JSweet 1.2.0 - http://www.jsweet.org */
function Stringclass() {
	var str1 = "hello";
	var str2 = "hello";
	var str3 = "Hello";
	console.info("str1 equals str2 :" + (str1 === str2));
	console.info("str1 equals str3 :" + (str1 === str3));
}
demo = function() {
	var str1 = "hello";
	var str2 = "hello";
	var str3 = "Hello";
	console.info("str1 equals str2 :" + (str1 === str2));
	console.info("str1 equals str3 :" + (str1 === str3));
};
demo2 = function() {
	var arr = [ 'H', 'e', 'l', 'l', 'o', ',', ' ', 'W', 'o', 'r', 'l', 'd', '!' ];
	var hello = arr.join("");
	console.info(hello);
	console.info(hello.length);
};
demo3 = function() {
	var str1 = "Hello, ";
	var str2 = "World!";
	var str3 = str1 + str2;
	console.info(str3);
	;
};
var str = "Hello, World!";
console.info(str[4])
demo();