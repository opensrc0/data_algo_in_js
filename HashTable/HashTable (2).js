
HashTable.EMPTY_NODE = -1;
HashTable.LAZY_DELETED = -2;
HashTable.FILLED_NODE = 0;

function HashTable(tSize) {
    this.tableSize = 0;
    this.tableSize = tSize;
    this.Arr = new Array(tSize + 1);
    this.Flag = new Array(tSize + 1);
    for (var i = 0; i <= tSize; i++) {
        this.Flag[i] = HashTable.EMPTY_NODE;
    }
}

HashTable.prototype.ComputeHash = function (key) {
    return key % this.tableSize;
};

HashTable.prototype.resolverFun = function (index) {
    return index;
};

HashTable.prototype.InsertNode = function (value) {
    var hashValue = this.ComputeHash(value);
    for (var i = 0; i < this.tableSize; i++) {
        if (this.Flag[hashValue] === HashTable.EMPTY_NODE || this.Flag[hashValue] === HashTable.LAZY_DELETED) {
            this.Arr[hashValue] = value;
            this.Flag[hashValue] = HashTable.FILLED_NODE;
            return true;
        }
        hashValue += this.resolverFun(i);
        hashValue %= this.tableSize;
    }
    return false;
};

HashTable.prototype.FindNode = function (value) {
    var hashValue = this.ComputeHash(value);
    for (var i = 0; i < this.tableSize; i++) {
        if (this.Flag[hashValue] === HashTable.EMPTY_NODE) {
            return false;
        }
        if (this.Flag[hashValue] === HashTable.FILLED_NODE && this.Arr[hashValue] === value) {
            return true;
        }
        hashValue += this.resolverFun(i);
        hashValue %= this.tableSize;
    }
    return false;
};

HashTable.prototype.DeleteNode = function (value) {
    var hashValue = this.ComputeHash(value);
    for (var i = 0; i < this.tableSize; i++) {
        if (this.Flag[hashValue] === HashTable.EMPTY_NODE) {
            return false;
        }
        if (this.Flag[hashValue] === HashTable.FILLED_NODE && this.Arr[hashValue] === value) {
            this.Flag[hashValue] = HashTable.LAZY_DELETED;
            return true;
        }
        hashValue += this.resolverFun(i);
        hashValue %= this.tableSize;
    }
    return false;
};

HashTable.prototype.Print = function () {
    for (var i = 0; i < this.tableSize; i++) {
        if (this.Flag[i] === HashTable.FILLED_NODE) {
            console.log("Node at index [" + i + " ] :: " + this.Arr[i]);
        }
    }
};
HashTable.main = function (args) {
    var ht = new HashTable(1000);
    ht.InsertNode(89);
    ht.InsertNode(18);
    ht.Print();
    ht.DeleteNode(89);
    ht.DeleteNode(18);
};

HashTable.main(null);