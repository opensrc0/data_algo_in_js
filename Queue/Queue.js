function Queue() {
    this.Capacity = 1000;
    this.front = 0;
    this.back = 0;
    this.size = 0;
    this.data = new Array(this.Capacity);
}

Queue.add = function (value) {
    if (this.size >= this.Capacity) {
        console.info("Queue is full.");
        return false;
    }
    else {
        this.size++;
        this.data[this.back] = value;
        this.back = (++this.back) % (this.Capacity - 1);
    }
    return true;
};

Queue.remove = function () {
    var value;
    if (this.size <= 0) {
        console.info("Queue is empty.");
        return -999;
    }
    else {
        this.size--;
        value = this.data[this.front];
        this.front = (++this.front) % (this.Capacity - 1);
    }
    return value;
};

Queue.isEmpty = function () {
    return this.size === 0;
};

Queue.length = function () {
    return this.size;
};

function main(args) {
    var que = new Queue();
    for (var i = 0; i < 20; i++) {
        que.add(i);
    }
    for (var i = 0; i < 22; i++) {
        console.info(que.remove());
    }
};

Queue.main(null);