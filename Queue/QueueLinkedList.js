function Queue() {
    this.head = null;
    this.tail = null;
    this.size = 0;

    function Node(v, n) {
        this.value = 0;
        this.value = v;
        this.next = n;
    }
    Queue.Node = Node;
}

Queue.length = function () {
    return this.size;
};

Queue.isEmpty = function () {
    return this.size === 0;
};

Queue.peek = function () {
    if (this.isEmpty())
        throw new Error("StackEmptyError");
    return this.head.value;
};

Queue.add = function (value) {
    var temp = new Queue.Node(value, null);
    if (this.head == null)
        this.head = this.tail = temp;
    else {
        this.tail.next = temp;
        this.tail = temp;
    }
    this.size++;
};

Queue.remove = function () {
    if (this.isEmpty())
        throw new Error("StackEmptyError");
    var value = this.head.value;
    this.head = this.head.next;
    this.size--;
    return value;
};

Queue.print = function () {
    var temp = this.head;
    while ((temp != null)) {
        console.log(temp.value + " ");
        temp = temp.next;
    };
};

var q = new Queue();
for (var i = 1; i <= 100; i++) {
    q.add(i);
}
for (var i = 1; i <= 50; i++) {
    q.remove();
}
q.print();