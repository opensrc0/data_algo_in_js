function Queue() {
    this.Capacity = 1000;
    this.front = 0;
    this.back = 0;
    this.size = 0;
    this.data = new Array(this.Capacity);
}

Queue.prototype.add = function (value) {
    if (this.size >= this.Capacity) {
        console.log("Queue is full.");
        return false;
    }
    else {
        this.size++;
        this.data[this.back] = value;
        this.back = (++this.back) % (this.Capacity - 1);
    }
    return true;
};

Queue.prototype.remove = function () {
    var value;
    if (this.size <= 0) {
        console.log("Queue is empty.");
        return -999;
    }
    else {
        this.size--;
        value = this.data[this.front];
        this.front = (++this.front) % (this.Capacity - 1);
    }
    return value;
};

Queue.prototype.isEmpty = function () {
    return this.size === 0;
};

Queue.prototype.length = function () {
    return this.size;
};

function main() {
    var que = new Queue();
    for (var i = 0; i < 20; i++) {
        que.add(i);
    }
    for (var i = 0; i < 22; i++) {
        console.log(que.remove());
    }
};

//Queue.main();