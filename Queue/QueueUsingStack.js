function QueueUsingStack() {
    this.stk1 = [];
    this.stk2 = [];
}

QueueUsingStack.add = function (value) {
    this.stk1.push(value);
};

QueueUsingStack.remove = function () {
    var value;
    if ((this.stk2).length > 0) {
        return this.stk2.pop();
    }
    while ((this.stk1).length > 0) {
        value = this.stk1.pop();
        this.stk2.push(value);
    };
    return this.stk2.pop();
};

QueueUsingStack.main = function (args) {
    var que = new QueueUsingStack();
    que.add(1);
    que.add(11);
    que.add(111);
    console.info(que.remove());
    que.add(2);
    que.add(21);
    que.add(211);
    console.info(que.remove());
    console.info(que.remove());
    console.info(que.remove());
    console.info(que.remove());
    console.info(que.remove());
    console.info(que.remove());
    console.info(que.remove());
};

QueueUsingStack.main(null);