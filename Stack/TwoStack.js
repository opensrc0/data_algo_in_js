function TwoStack() {
    this.MAX_SIZE = 1000;
    this.top1 = -1;
    this.top2 = this.MAX_SIZE;
    this.data = new Array(this.MAX_SIZE);
}

TwoStack.main = function (args) {
    var st = new TwoStack();
    for (var i = 0; i < 10; i++) {
        st.StackPush1(i);
    }
    for (var j = 0; j < 10; j++) {
        st.StackPush2(j + 10);
    }
    for (var i = 0; i < 10; i++) {
        console.log("stack one pop value is : " + st.StackPop1());
        console.log("stack two pop value is : " + st.StackPop2());
    }
};

TwoStack.prototype.StackPush1 = function (value) {
    if (this.top1 < this.top2 - 1) {
        this.data[++this.top1] = value;
    }
    else {
        console.log("Stack is Full!");
    }
};

TwoStack.prototype.StackPush2 = function (value) {
    if (this.top1 < this.top2 - 1) {
        this.data[--this.top2] = value;
    }
    else {
        console.log("Stack is Full!");
    }
};

TwoStack.prototype.StackPop1 = function () {
    if (this.top1 >= 0) {
        var value = this.data[this.top1--];
        return value;
    }
    else {
        console.log("Stack Empty!");
    }
    return -999;
};

TwoStack.prototype.StackPop2 = function () {
    if (this.top2 < this.MAX_SIZE) {
        var value = this.data[this.top2++];
        return value;
    }
    else {
        console.log("Stack Empty!");
    }
    return -999;
};

TwoStack.main(null);