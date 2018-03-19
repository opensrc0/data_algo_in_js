function DemoHashFun(key) {
    return key;
}

function DemoCompare(first, second) {
    return first - second;
}

function CountMap() {
    this.count = 0;
    this.hm = new HashTable(DemoCompare, DemoHashFun);
}

CountMap.prototype.insert = function (key) {
    this.count++;
    if (this.hm.find(key)) {
        var cnt = this.hm.get(key);
        this.hm.insert(key, cnt + 1);
    }
    else {
        this.hm.insert(key, 1);
    }
};

CountMap.prototype.remove = function (key) {
    if (this.hm.find(key)) {
        if (this.hm.get(key) === 1)
            this.hm.remove(key);
        else {
            var count = this.hm.get(key);
            this.hm.insert(key, count - 1);
        }
        this.count--;
    }
};

CountMap.prototype.get = function (key) {
    if (this.hm.find(key))
        return this.hm.get(key);
    return 0;
};

CountMap.prototype.size = function () {
    return this.count;
}

CountMap.prototype.find = function (key) {
    return this.hm.find(key);
};

CountMap.main = function (args) {
    var cm = new CountMap();
    cm.insert(2);
    cm.insert(2);
    cm.remove(2);
    console.log("count is : " + cm.get(2));
    console.log("count is : " + cm.get(3));
};

CountMap.main(null);