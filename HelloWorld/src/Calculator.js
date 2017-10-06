function Calculator(data) {
    if (typeof data === 'number') {
        this.value = data;
    }
    else if (data === undefined || data === null) {
        this.value = 0;
    }
    else
        throw new Error('invalid overload');
}

Calculator.prototype.reset = function () {
    this.value = 0;
};

Calculator.prototype.getValue = function () {
    return this.value;
};

Calculator.prototype.add = function (data) {
    this.value = this.value + data;
};

Calculator.prototype.increment = function () {
    this.value += 1;
};

Calculator.prototype.subtract = function (data) {
    this.value = this.value - data;
};

Calculator.prototype.decrement = function () {
    this.value -= 1;
};