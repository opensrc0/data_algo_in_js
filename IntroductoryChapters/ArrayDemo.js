function ArrayDemo() {
    this.numbers = new Array(100);
}

ArrayDemo.prototype.addValue = function (index, data) {
    this.numbers[index] = data;
};

ArrayDemo.prototype.getValue = function (index) {
    return this.numbers[index];
};

var d = new ArrayDemo();
d.addValue(0, 1);
d.addValue(1, 2);
console.log(d.getValue(0));
console.log(d.getValue(1));