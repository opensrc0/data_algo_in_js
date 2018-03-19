text = "Hello, World!";
Object.freeze(text);

PI = 3.141592653589793;
Object.freeze(PI);

function main() {
    var numbers = new Array(10);
    var sum = 0;
    for (var index = 0; index < numbers.length; index++) {
        numbers[index] = index;
    }
    console.log("Array elements are :: " + numbers);
};

function main1() {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var sum = 0;
    for (var index = 0; index < numbers.length; index++) {
        var n = numbers[index];
        sum += n;
    }
    console.log("Sum is :: " + sum);
};

function main2() {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var sum = 0;
    for (var i in numbers) {
        sum += numbers[i];
    }
    console.log("Sum is :: " + sum);
};

function main3(args) {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var sum = 0;
    var i = 0;
    while ((i < numbers.length)) {
        sum += numbers[i];
        i++;
    };
    console.log("Sum is :: " + sum);
};
main();
main1(null);
main2(null);
main3(null);