function StackNode(v, n) {
    this.value = v;
    this.next = n;
}

function Stack() {
    this.head = null;
    this.length = 0;
}

Stack.prototype.size = function () {
    return this.length;
};

Stack.prototype.isEmpty = function () {
    return this.length === 0;
};

Stack.prototype.peek = function () {
    if (this.isEmpty()) {
        throw new Error("StackEmptyError");
    }
    return this.head.value;
};

Stack.prototype.push = function (value) {
    this.head = new StackNode(value, this.head);
    this.length++;
};

Stack.prototype.pop = function () {
    if (this.isEmpty()) {
        throw new Error("StackEmptyError");
    }
    var value = this.head.value;
    this.head = this.head.next;
    this.length--;
    return value;
};

Stack.prototype.insertAtBottom = function (value) {
    if (this.isEmpty()) {
        this.push(value);
    }
    else {
        var temp = this.pop();
        this.insertAtBottom(value);
        this.push(temp);
    }
};

Stack.prototype.print = function () {
    var temp = this.head;
    while ((temp != null)) {
        console.log(temp.value);
        temp = temp.next;
    };
};

var s = new Stack();
for (var i = 1; i <= 100; i++) {
    s.push(i);
}
for (var i = 1; i <= 50; i++) {
    s.pop();
}
s.print();