function HashTable() {
    this.tableSize = 0;
    this.tableSize = 512;
    this.listArray = new Array(this.tableSize);
    for (var i = 0; i < this.tableSize; i++) {
        this.listArray[i] = null;
    }

    function Node(v, n) {
        this.value = v;
        this.next = n;
    }
    HashTable.Node = Node;
}

HashTable.prototype.ComputeHash = function (key) {
    var hashValue = 0;
    hashValue = key;
    return hashValue % this.tableSize;
};

HashTable.prototype.resolverFun = function (i) {
    return i;
};

HashTable.prototype.resolverFun2 = function (i) {
    return i * i;
};

HashTable.prototype.insert = function (value) {
    var index = this.ComputeHash(value);
    this.listArray[index] = new HashTable.Node(value, this.listArray[index]);
};

HashTable.prototype.delete = function (value) {
    var index = this.ComputeHash(value);
    var nextNode;
    var head = this.listArray[index];
    if (head != null && head.value === value) {
        this.listArray[index] = head.next;
        return true;
    }
    while ((head != null)) {
        nextNode = head.next;
        if (nextNode != null && nextNode.value === value) {
            head.next = nextNode.next;
            return true;
        }
        else {
            head = nextNode;
        }
    };
    return false;
};

HashTable.prototype.print = function () {
    for (var i = 0; i < this.tableSize; i++) {
        console.info("Printing for index value :: " + i + "List of value printing :: ");
        var head = this.listArray[i];
        while ((head != null)) {
            console.info(head.value);
            head = head.next;
        };
    }
};

HashTable.prototype.find = function (value) {
    var index = this.ComputeHash(value);
    var head = this.listArray[index];
    while ((head != null)) {
        if (head.value === value) {
            return true;
        }
        head = head.next;
    };
    return false;
};

HashTable.main = function (args) {
    var ht = new HashTable();
    for (var i = 100; i < 110; i++) {
        ht.insert(i);
    }
    console.info("search 100 :: " + ht.find(100));
    console.info("remove 100 :: " + ht.delete(100));
    console.info("search 100 :: " + ht.find(100));
    console.info("remove 100 :: " + ht.delete(100));
};

HashTable.main(null);