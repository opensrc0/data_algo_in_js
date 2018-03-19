function DoublyCircularLinkedList() {
    this.head = null;
    this.tail = null;
    this.length = 0;

    function Node(v, nxt, prv) {
        if ((typeof v === 'number') && ((nxt != null && nxt instanceof DoublyCircularLinkedList.Node) || nxt === null) && ((prv != null && prv instanceof DoublyCircularLinkedList.Node) || prv === null)) {
            this.value = v;
            this.next = nxt;
            this.prev = prv;
        }
        else if ((typeof v === 'number') && nxt === undefined && prv === undefined) {
            this.value = v;
            this.next = this;
            this.prev = this;
        }
        else
            throw new Error('invalid overload');
    }

    DoublyCircularLinkedList.Node = Node;
}

DoublyCircularLinkedList.prototype.size = function () {
    return this.length;
};

DoublyCircularLinkedList.prototype.isEmpty = function () {
    return this.length === 0;
};

DoublyCircularLinkedList.prototype.peekHead = function () {
    if (this.isEmpty())
        throw new java.lang.IllegalStateError("EmptyListError");
    return this.head.value;
};

DoublyCircularLinkedList.prototype.addHead = function (value) {
    var newNode = new DoublyCircularLinkedList.Node(value, null, null);
    if (this.length === 0) {
        this.tail = this.head = newNode;
        newNode.next = newNode;
        newNode.prev = newNode;
    }
    else {
        newNode.next = this.head;
        newNode.prev = this.head.prev;
        this.head.prev = newNode;
        newNode.prev.next = newNode;
        this.head = newNode;
    }
    this.length++;
};

DoublyCircularLinkedList.prototype.addTail = function (value) {
    var newNode = new DoublyCircularLinkedList.Node(value, null, null);
    if (this.length === 0) {
        this.head = this.tail = newNode;
        newNode.next = newNode;
        newNode.prev = newNode;
    }
    else {
        newNode.next = this.tail.next;
        newNode.prev = this.tail;
        this.tail.next = newNode;
        newNode.next.prev = newNode;
        this.tail = newNode;
    }
    this.length++;
};

DoublyCircularLinkedList.prototype.removeHead = function () {
    if (this.length === 0)
        throw new java.lang.IllegalStateError("EmptyListError");
    var value = this.head.value;
    this.length--;
    if (this.length === 0) {
        this.head = null;
        this.tail = null;
        return value;
    }
    var next = this.head.next;
    next.prev = this.tail;
    this.tail.next = next;
    this.head = next;
    return value;
};

DoublyCircularLinkedList.prototype.removeTail = function () {
    if (this.length === 0)
        throw new java.lang.IllegalStateError("EmptyListError");
    var value = this.tail.value;
    this.length--;
    if (this.length === 0) {
        this.head = null;
        this.tail = null;
        return value;
    }
    var prev = this.tail.prev;
    prev.next = this.head;
    this.head.prev = prev;
    this.tail = prev;
    return value;
};

DoublyCircularLinkedList.prototype.find = function (key) {
    var temp = this.head;
    if (this.head == null)
        return false;
    do {
        if (temp.value === key)
            return true;
        temp = temp.next;
    } while ((temp !== this.head));
    return false;
};

DoublyCircularLinkedList.prototype.free = function () {
    this.head = null;
    this.tail = null;
    this.length = 0;
};

DoublyCircularLinkedList.prototype.print = function () {
    if (this.isEmpty()) {
        return;
    }
    var temp = this.head;
    while ((temp !== this.tail)) {
        console.log(temp.value);
        temp = temp.next;
    };
    console.log(temp.value);
};

DoublyCircularLinkedList.main = function (args) {
    var ll = new DoublyCircularLinkedList();
    ll.addHead(1);
    ll.addHead(2);
    ll.addHead(3);
    ll.addHead(11);
    ll.addHead(22);
    ll.addHead(33);
    ll.print();
};

DoublyCircularLinkedList.main(null);