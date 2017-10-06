function LinkedList() {
    this.length = 0;
    function Node(v, n) {
        if ((typeof v === 'number') && ((n != null && n instanceof LinkedList.Node) || n === null)) {
            this.value = v;
            this.next = n;
        }
        else if ((typeof v === 'number') && n === undefined) {
            this.value = v;
            this.next = null;
        }
        else
            throw new Error('invalid arguments');
    }

    LinkedList.Node = Node;
}

LinkedList.prototype.size = function () {
    return this.length;
};

LinkedList.prototype.isEmpty = function () {
    return this.length === 0;
};

LinkedList.prototype.peek = function () {
    if (this.isEmpty())
        throw new Error("EmptyListError");
    return this.head.value;
};

LinkedList.prototype.addHead = function (value) {
    this.head = new LinkedList.Node(value, this.head);
    this.length++;
};

LinkedList.prototype.addTail = function (value) {
    var newNode = new LinkedList.Node(value, null);
    var curr = this.head;
    if (this.head == null) {
        this.head = newNode;
    }
    while ((curr.next != null)) {
        curr = curr.next;
    };
    curr.next = newNode;
};

LinkedList.prototype.removeHead = function () {
    if (this.isEmpty())
        throw new Error("EmptyListError");
    var value = this.head.value;
    this.head = this.head.next;
    this.length--;
    return value;
};

LinkedList.prototype.isPresent = function (data) {
    var temp = this.head;
    while ((temp != null)) {
        if (temp.value === data)
            return true;
        temp = temp.next;
    };
    return false;
};

LinkedList.prototype.deleteNode = function (delValue) {
    var temp = this.head;
    if (this.isEmpty())
        return false;
    if (delValue === this.head.value) {
        this.head = this.head.next;
        this.length--;
        return true;
    }
    while ((temp.next != null)) {
        if (temp.next.value === delValue) {
            temp.next = temp.next.next;
            this.length--;
            return true;
        }
        temp = temp.next;
    };
    return false;
};

LinkedList.prototype.deleteNodes = function (delValue) {
    var currNode = this.head;
    var nextNode;
    while ((currNode != null && currNode.value === delValue)) {
        this.head = currNode.next;
        currNode = this.head;
    }
    ;
    while ((currNode != null)) {
        nextNode = currNode.next;
        if (nextNode != null && nextNode.value === delValue) {
            currNode.next = nextNode.next;
        }
        else {
            currNode = nextNode;
        }
    };
};

LinkedList.prototype.reverseRecurseUtil = function (currentNode, nextNode) {
    var ret;
    if (currentNode == null)
        return null;
    if (currentNode.next == null) {
        currentNode.next = nextNode;
        return currentNode;
    }
    ret = this.reverseRecurseUtil(currentNode.next, currentNode);
    currentNode.next = nextNode;
    return ret;
};

LinkedList.prototype.reverseRecurse = function () {
    this.head = this.reverseRecurseUtil(this.head, null);
};

LinkedList.prototype.reverse = function () {
    var curr = this.head;
    var prev = null;
    var next = null;
    while ((curr != null)) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    ;
    this.head = prev;
};

LinkedList.prototype.CopyListReversed = function () {
    var tempNode = null;
    var tempNode2 = null;
    var curr = this.head;
    while ((curr != null)) {
        tempNode2 = new LinkedList.Node(curr.value, tempNode);
        curr = curr.next;
        tempNode = tempNode2;
    };
    var ll2 = new LinkedList();
    ll2.head = tempNode;
    return ll2;
};

LinkedList.prototype.copyList = function () {
    var headNode = null;
    var tailNode = null;
    var tempNode = null;
    var curr = this.head;
    if (curr == null)
        return null;
    headNode = new LinkedList.Node(curr.value, null);
    tailNode = headNode;
    curr = curr.next;
    while ((curr != null)) {
        tempNode = new LinkedList.Node(curr.value, null);
        tailNode.next = tempNode;
        tailNode = tempNode;
        curr = curr.next;
    };
    var ll2 = new LinkedList();
    ll2.head = headNode;
    return ll2;
};

LinkedList.prototype.compareList = function (ll) {
    return this.compareListUtil(this.head, ll.head);
};

LinkedList.prototype.compareListUtil = function (head1, head2) {
    if (((head1 != null && head1 instanceof LinkedList.Node) || head1 === null) && ((head2 != null && head2 instanceof LinkedList.Node) || head2 === null)) {
        if (head1 == null && head2 == null)
            return true;
        else if ((head1 == null) || (head2 == null) || (head1.value !== head2.value))
            return false;
        else
            return this.compareListUtil(head1.next, head2.next);
    }
    else
        throw new Error('invalid arguments');
};

LinkedList.prototype.findLength = function () {
    var curr = this.head;
    var count = 0;
    while ((curr != null)) {
        count++;
        curr = curr.next;
    };
    return count;
};

LinkedList.prototype.nthNodeFromBegining = function (index) {
    if (index > this.size() || index < 1)
        throw new Error('invalid arguments');;
    var count = 0;
    var curr = this.head;
    while ((curr != null && count < index - 1)) {
        count++;
        curr = curr.next;
    };
    return curr.value;
};

LinkedList.prototype.nthNodeFromEnd = function (index) {
    var size = this.findLength();
    var startIndex;
    if (size !== 0 && size < index) {
        throw new Error('invalid arguments');
    }
    startIndex = size - index + 1;
    return this.nthNodeFromBegining(startIndex);
};

LinkedList.prototype.nthNodeFromEnd2 = function (index) {
    var count = 1;
    var forward = this.head;
    var curr = this.head;
    while ((forward != null && count <= index)) {
        count++;
        forward = forward.next;
    };
    if (forward == null)
        throw new Error('invalid arguments');
    while ((forward != null)) {
        forward = forward.next;
        curr = curr.next;
    };
    return curr.value;
};

LinkedList.prototype.findIntersection = function (head, head2) {
    var l1 = 0;
    var l2 = 0;
    var tempHead = head;
    var tempHead2 = head2;
    while ((tempHead != null)) {
        l1++;
        tempHead = tempHead.next;
    };
    while ((tempHead2 != null)) {
        l2++;
        tempHead2 = tempHead2.next;
    };
    var diff;
    if (l1 < 12) {
        var temp = head;
        head = head2;
        head2 = temp;
        diff = l2 - l1;
    }
    else {
        diff = l1 - l2;
    }
    for (; diff > 0; diff--) {
        head = head.next;
    }
    while ((head !== head2)) {
        head = head.next;
        head2 = head2.next;
    };
    return head;
};

LinkedList.prototype.freeList = function () {
    this.head = null;
    this.length = 0;
};

LinkedList.prototype.print = function () {
    var temp = this.head;
    while ((temp != null)) {
        console.info(temp.value + " ");
        temp = temp.next;
    };
};

LinkedList.prototype.sortedInsert = function (value) {
    var newNode = new LinkedList.Node(value, null);
    var curr = this.head;
    if (curr == null || curr.value > value) {
        newNode.next = this.head;
        this.head = newNode;
        return;
    }
    while ((curr.next != null && curr.next.value < value)) {
        curr = curr.next;
    };
    newNode.next = curr.next;
    curr.next = newNode;
};

LinkedList.prototype.removeDuplicate = function () {
    var curr = this.head;
    while ((curr != null)) {
        if (curr.next != null && curr.value === curr.next.value) {
            curr.next = curr.next.next;
        }
        else {
            curr = curr.next;
        }
    };
};

LinkedList.prototype.makeLoop = function () {
    var temp = this.head;
    while ((temp != null)) {
        if (temp.next == null) {
            temp.next = this.head;
            return;
        }
        temp = temp.next;
    }
    ;
};

LinkedList.prototype.loopDetect = function () {
    var slowPtr;
    var fastPtr;
    slowPtr = fastPtr = this.head;
    while ((fastPtr.next != null && fastPtr.next.next != null)) {
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next.next;
        if (slowPtr === fastPtr) {
            console.info("loop found");
            return true;
        }
    };
    console.info("loop not found");
    return false;
};

LinkedList.prototype.reverseListLoopDetect = function () {
    var tempHead = this.head;
    this.reverse();
    if (tempHead === this.head) {
        this.reverse();
        console.info("loop found");
        return true;
    }
    else {
        this.reverse();
        console.info("loop not found");
        return false;
    }
};

LinkedList.prototype.loopTypeDetect = function () {
    var slowPtr;
    var fastPtr;
    slowPtr = fastPtr = this.head;
    while ((fastPtr.next != null && fastPtr.next.next != null)) {
        if (this.head === fastPtr.next || this.head === fastPtr.next.next) {
            console.info("circular list loop found");
            return 2;
        }
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next.next;
        if (slowPtr === fastPtr) {
            console.info("loop found");
            return 1;
        }
    };
    console.info("loop not found");
    return 0;
};

LinkedList.prototype.loopPointDetect = function () {
    var slowPtr;
    var fastPtr;
    slowPtr = fastPtr = this.head;
    while ((fastPtr.next != null && fastPtr.next.next != null)) {
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next.next;
        if (slowPtr === fastPtr) {
            return slowPtr;
        }
    };
    return null;
};

LinkedList.prototype.removeLoop = function () {
    var loopPoint = this.loopPointDetect();
    if (loopPoint == null)
        return;
    var firstPtr = this.head;
    if (loopPoint === this.head) {
        while ((firstPtr.next !== this.head))
            firstPtr = firstPtr.next;
        firstPtr.next = null;
        return;
    }
    var secondPtr = loopPoint;
    while ((firstPtr.next !== secondPtr.next)) {
        firstPtr = firstPtr.next;
        secondPtr = secondPtr.next;
    };
    secondPtr.next = null;
};



main = function (args) {
    var ll = new LinkedList();
    ll.addHead(1);
    ll.addHead(2);
    ll.addHead(3);
    ll.addHead(3);
    ll.addHead(3);
    ll.addHead(3);
    ll.addHead(3);
    ll.addHead(3);
    ll.print();
    ll.reverseRecurse();
    ll.print();
    console.info(ll.nthNodeFromBegining(2));
    console.info(ll.nthNodeFromEnd(2));
    console.info(ll.nthNodeFromEnd2(2));
};

main(null);