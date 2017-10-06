function HashTable(cmp, hashFun) {
    if (cmp === undefined || cmp === null)
        cmp = DemoCompare;
    if (hashFun === undefined || hashFun === null)
        hashFun = DemoHashFun;

    this.tableSize = 0;
    this.tableSize = 512;
    this.listArray = new Array(this.tableSize);
    for (var i = 0; i < this.tableSize; i++) {
        this.listArray[i] = null;
    }

    function Node(k, d, n) {
        this.key = k;
        this.data = d;
        this.next = n;
    }

    HashTable.Node = Node;
    HashTable.comp = cmp;
    HashTable.HashFun = hashFun;
}

function DemoHashFun(key) {
    return key;
}

function HornerHashFun(key, tableSize) {
    var size = key.length;
    var h = 0;
    var i;
    for (i = 0; i < size; i++) {
        h = (32 * h + (key[i]).charCodeAt(0)) % tableSize;
    }
    return h;
};

function DemoCompare(first, second) {
    return first - second;
}

HashTable.prototype.ComputeHash = function (key) {
    var hashValue = 0;
    hashValue = HashTable.HashFun(key);
    return hashValue % this.tableSize;
};

HashTable.prototype.resolverFun = function (i) {
    return i;
};

HashTable.prototype.insert = function (key, data) {
    if (data === undefined || data === null)
        data = key;

    var index = this.ComputeHash(key);
    var found = false;
    var head = this.listArray[index];
    while ((head != null)) {
        if (head.key === key) {
            found = true;
            head.data = data;
            return;
        }
        head = head.next;
    };
    this.listArray[index] = new HashTable.Node(key, data, this.listArray[index]);
};

HashTable.prototype.remove = function (key) {
    var index = this.ComputeHash(key);
    var nextNode;
    var head = this.listArray[index];
    if (head != null && head.key === key) {
        this.listArray[index] = head.next;
        return true;
    }
    while ((head != null)) {
        nextNode = head.next;
        if (nextNode != null && nextNode.key === key) {
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
            console.info(head.data);
            head = head.next;
        };
    }
};

HashTable.prototype.find = function (key) {
    var index = this.ComputeHash(key);
    var head = this.listArray[index];
    while ((head != null)) {
        if (head.key === key) {
            return true;
        }
        head = head.next;
    };
    return false;
};

HashTable.prototype.get = function (key) {
    var index = this.ComputeHash(key);
    var head = this.listArray[index];
    while ((head != null)) {
        if (head.key === key) {
            return head.data;
        }
        head = head.next;
    };
    return null;
};

function DemoHashFun(key) {
    return key;
}

function DemoCompare(first, second) {
    return first - second;
}

HashTable.main = function (args) {
    var ht = new HashTable(DemoCompare, DemoHashFun);
    for (var i = 100; i < 110; i++) {
        ht.insert(i);
    }
    console.info("search 100 :: " + ht.find(100));
    console.info("remove 100 :: " + ht.remove(100));
    console.info("search 100 :: " + ht.find(100));
    console.info("remove 100 :: " + ht.remove(100));
};

//HashTable.main(null);