HashTable.EMPTY_NODE = -1;
HashTable.LAZY_DELETED = -2;
HashTable.FILLED_NODE = 0;

function HashTable(tSize, cmp, hashFun) {
	if (cmp === undefined || cmp === null)
		cmp = DemoCompare;
	if (hashFun === undefined || hashFun === null)
		hashFun = DemoHashFun;
	
    HashTable.comp = cmp;
    HashTable.HashFun = hashFun;
    
	this.tableSize = tSize;
	this.KeyArr = new Array(tSize + 1);
	this.DataArr = new Array(tSize + 1);
	
	this.FlagArr = new Array(tSize + 1);
	for (var i = 0; i <= tSize; i++) {
		this.FlagDataArr[i] = HashTable.EMPTY_NODE;
	}
}

HashTable.prototype.ComputeHash = function(key) {
	return HashTable.HashFun(key) % this.tableSize;
};

HashTable.prototype.resolverFun = function(index) {
	return index;
};

HashTable.prototype.InsertNode = function(key, value) {
    if (value === undefined || value === null)
    	value = key;
    
	var hashValue = this.ComputeHash(key);
	for (var i = 0; i < this.tableSize; i++) {
		if (this.FlagDataArr[hashValue] === HashTable.EMPTY_NODE) {
			this.DataArr[hashValue] = value;
			this.KeyArr[hashValue] = key;
			this.FlagDataArr[hashValue] = HashTable.FILLED_NODE;
			return true;
		}
		else if (this.FlagDataArr[hashValue] === HashTable.FILLED_NODE && this.KeyArr[hashValue] === key ) {
			this.DataArr[hashValue] = value;
			return true;
		}
		
		hashValue += this.resolverFun(i);
		hashValue %= this.tableSize;
	}
	
	hashValue = this.ComputeHash(key);
	for (var i = 0; i < this.tableSize; i++) {
		if (this.FlagDataArr[hashValue] === HashTable.LAZY_DELETED) {
			this.DataArr[hashValue] = value;
			this.KeyArr[hashValue] = key;
			this.FlagDataArr[hashValue] = HashTable.FILLED_NODE;
			return true;
		}
		
		hashValue += this.resolverFun(i);
		hashValue %= this.tableSize;
	}
	return false;
};

HashTable.prototype.FindNode = function(key, value) {
    if (value === undefined || value === null)
    	value = key;
    
	var hashValue = this.ComputeHash(key);
	for (var i = 0; i < this.tableSize; i++) {
		if (this.FlagDataArr[hashValue] === HashTable.EMPTY_NODE) {
			return false;
		}
		if (this.FlagDataArr[hashValue] === HashTable.FILLED_NODE
				&& this.DataArr[hashValue] === value) {
			return true;
		}
		hashValue += this.resolverFun(i);
		hashValue %= this.tableSize;
	}
	return false;
};

HashTable.prototype.DeleteNode = function(key, value) {
    if (value === undefined || value === null)
    	value = key;

    var hashValue = this.ComputeHash(key);
	for (var i = 0; i < this.tableSize; i++) {
		if (this.FlagDataArr[hashValue] === HashTable.EMPTY_NODE) {
			return false;
		}
		if (this.FlagDataArr[hashValue] === HashTable.FILLED_NODE
				&& this.DataArr[hashValue] === value) {
			this.FlagDataArr[hashValue] = HashTable.LAZY_DELETED;
			return true;
		}
		hashValue += this.resolverFun(i);
		hashValue %= this.tableSize;
	}
	return false;
};

HashTable.prototype.Print = function() {
	for (var i = 0; i < this.tableSize; i++) {
		if (this.FlagDataArr[i] === HashTable.FILLED_NODE) {
			console.info("Node at index [" + i + " ] :: " + this.DataArr[i]);
		}
	}
};
HashTable.main = function(args) {
	var ht = new HashTable(1000);
	ht.InsertNode(89);
	ht.InsertNode(18);
	ht.Print();
	ht.DeleteNode(89);
	ht.DeleteNode(18);
};

HashTable.main(null);