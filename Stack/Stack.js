Stack.CAPACITY = 1000;

function Stack(capacity) {
    if (capacity === void 0) { capacity = Stack.CAPACITY; }
    this.__top = -1;
    this.data = new Array(capacity);
}

Stack.prototype.size = function () {
    return (this.__top + 1);
};

Stack.prototype.isEmpty = function () {
    return (this.__top === -1);
};

Stack.prototype.push = function (value) {
    this.__top++;
    this.data[this.__top] = value;
};

Stack.prototype.top = function () {
    if (this.isEmpty()) {
        throw new Error("StackEmptyException");
    }
    return this.data[this.__top];
};

Stack.prototype.pop = function () {
    if (this.isEmpty()) {
        throw new Error("StackEmptyException");
    }
    var topVal = this.data[this.__top];
    this.__top--;
    return topVal;
};

Stack.prototype.print = function () {
    for (var i = this.__top; i >= 0; i--) {
        console.info(this.data[i]);
    }
};

function main(args) {
    var s = new Stack(1000);
    for (var i = 1; i <= 100; i++) {
        s.push(i);
    }
    for (var i = 1; i <= 50; i++) {
        s.pop();
    }
    s.print();
};
    
Stack.main(null);