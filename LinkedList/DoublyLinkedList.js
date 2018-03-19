function DoublyLinkedList() {
    this.head = null;
    this.tail = null;
    this.length = 0;

    function Node(v, nxt, prv) {
        if ((typeof v === 'number') && ((nxt != null && nxt instanceof DoublyLinkedList.Node) || nxt === null) && ((prv != null && prv instanceof DoublyLinkedList.Node) || prv === null)) {
            this.value = v;
            this.next = nxt;
            this.prev = prv;
        }
        else if ((typeof v === 'number') && nxt === undefined && prv === undefined) {
            this.value = v;
            this.next = null;
            this.prev = null;
        }
        else
            throw new Error('invalid overload');
    }

    DoublyLinkedList.Node = Node;
}

DoublyLinkedList.prototype.size = function () {
    return this.length;
};

DoublyLinkedList.prototype.isEmpty = function () {
    return this.length === 0;
};

DoublyLinkedList.prototype.peek = function () {
    if (this.isEmpty())
        throw new java.lang.IllegalStateError("EmptyListError");
    return this.head.value;
};

DoublyLinkedList.prototype.addHead = function (value) {
    var newNode = new DoublyLinkedList.Node(value, null, null);
    if (this.length === 0) {
        this.tail = this.head = newNode;
    }
    else {
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
    }
    this.length++;
};

DoublyLinkedList.prototype.addTail = function (value) {
    var newNode = new DoublyLinkedList.Node(value, null, null);
    if (this.length === 0) {
        this.head = this.tail = newNode;
    }
    else {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
    }
    this.length++;
};

DoublyLinkedList.prototype.removeHead = function () {
    if (this.isEmpty())
        throw new java.lang.IllegalStateError("EmptyListError");
    var value = this.head.value;
    this.head = this.head.next;
    if (this.head == null)
        this.tail = null;
    else
        this.head.prev = null;
    this.length--;
    return value;
};

DoublyLinkedList.prototype.removeNode = function (key) {
    var curr = this.head;
    if (curr == null)
        return false;
    if (curr.value === key) {
        this.head = this.head.next;
        this.length--;
        if (this.head != null)
            this.head.prev = null;
        else
            this.tail = null;
        return true;
    }
    while ((curr.next != null)) {
        if (curr.next.value === key) {
            curr.next = curr.next.next;
            if (curr.next == null)
                this.tail = curr;
            else
                curr.next = curr;
            this.length--;
            return true;
        }
        curr = curr.next;
    };
    return false;
};

DoublyLinkedList.prototype.find = function (key) {
    var temp = this.head;
    while ((temp != null)) {
        if (temp.value === key)
            return true;
        temp = temp.next;
    };
    return false;
};

DoublyLinkedList.prototype.freeList = function () {
    this.head = null;
    this.tail = null;
    this.length = 0;
};

DoublyLinkedList.prototype.print = function () {
    var temp = this.head;
    while ((temp != null)) {
        console.info(temp.value);
        temp = temp.next;
    };
};

DoublyLinkedList.prototype.sortedInsert = function (value) {
    var temp = new DoublyLinkedList.Node(value);
    var curr = this.head;
    if (curr == null) {
        this.head = temp;
        this.tail = temp;
    }
    if (this.head.value <= value) {
        temp.next = this.head;
        this.head.prev = temp;
        this.head = temp;
    }
    while ((curr.next != null && curr.next.value > value)) {
        curr = curr.next;
    };
    if (curr.next == null) {
        this.tail = temp;
        temp.prev = curr;
        curr.next = temp;
    }
    else {
        temp.next = curr.next;
        temp.prev = curr;
        curr.next = temp;
        temp.next.prev = temp;
    }
};

DoublyLinkedList.prototype.reverseList = function () {
    var curr = this.head;
    var tempNode;
    while ((curr != null)) {
        tempNode = curr.next;
        curr.next = curr.prev;
        curr.prev = tempNode;
        if (curr.prev == null) {
            this.tail = this.head;
            this.head = curr;
            return;
        }
        curr = curr.prev;
    };
};

DoublyLinkedList.prototype.removeDuplicate = function () {
    var curr = this.head;
    var deleteMe;
    while ((curr != null)) {
        if ((curr.next != null) && curr.value === curr.next.value) {
            deleteMe = curr.next;
            curr.next = deleteMe.next;
            curr.next.prev = curr;
            if (deleteMe === this.tail) {
                this.tail = curr;
            }
        }
        else {
            curr = curr.next;
        }
    };
};

DoublyLinkedList.prototype.copyListReversed = function () {
    var dll = new DoublyLinkedList();
    var curr = this.head;
    while ((curr != null)) {
        dll.addHead(curr.value);
        curr = curr.next;
    };
    return dll;
};

DoublyLinkedList.prototype.copyList = function () {
    var dll = new DoublyLinkedList();
    var curr = this.head;
    while ((curr != null)) {
        dll.addTail(curr.value);
        curr = curr.next;
    };
    return dll;
};

function main(args) {
    var ll = new DoublyLinkedList();
    ll.addHead(1);
    ll.addHead(2);
    ll.addHead(3);
    ll.addHead(4);
    ll.addHead(5);
    ll.addHead(6);
    ll.removeHead();
    
    ll.print();
    ll.freeList();
    ll.addHead(11);
    ll.addHead(21);
    ll.addHead(31);
    ll.addHead(41);
    ll.addHead(51);
    ll.addHead(61);
    ll.print();
};

main(null);