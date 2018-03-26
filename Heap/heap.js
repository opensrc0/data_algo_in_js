function less(x, y) {
    return x - y;
};

function more(x, y) {
    return y - x;
};

function PriorityQueue(array, cmp) {
    this.comp = (typeof cmp === 'function') ? cmp : less;

    if (array != null && array instanceof Array) {
        this.length = array.length;
        this.arr = [0].concat(array);
        for (var i = Math.floor(this.length / 2); i > 0; i--) {
            this.proclateDown(i);
        }
    }
    else if (array === undefined || array === null) {
        this.length = 0;
        this.arr = [0];
    }
    else
        throw new Error('invalid arguments');
}

PriorityQueue.prototype.proclateDown = function (position) {
    var lChild = 2 * position;
    var rChild = lChild + 1;
    var small = -1;
    var temp;
    if (lChild <= this.length) {
        small = lChild;
    }
    if (rChild <= this.length && this.comp(this.arr[rChild], this.arr[lChild]) < 0) {
        small = rChild;
    }
    if (small !== -1 && this.comp(this.arr[small], this.arr[position]) < 0) {
        temp = this.arr[position];
        this.arr[position] = this.arr[small];
        this.arr[small] = temp;
        this.proclateDown(small);
    }
};

PriorityQueue.prototype.proclateUp = function (position) {
    var parent = Math.floor(position / 2);
    var temp;
    if (parent === 0) {
        return;
    }
    if (this.comp(this.arr[parent], this.arr[position]) < 0) {
        temp = this.arr[position];
        this.arr[position] = this.arr[parent];
        this.arr[parent] = temp;
        this.proclateUp(parent);
    }
};

PriorityQueue.prototype.add = function (value) {
    this.length++;
    this.arr[this.length] = value;
    this.proclateUp(this.length);
};

PriorityQueue.prototype.remove = function () {
    if (this.isEmpty()) {
        throw new Error();
    }
    var value = this.arr[1];
    this.arr[1] = this.arr[this.length];
    this.length--;
    this.proclateDown(1);
    return value;
};

PriorityQueue.prototype.print = function () {
    console.log(this.arr);
};

PriorityQueue.prototype.isEmpty = function () {
    return (this.length === 0);
};

PriorityQueue.prototype.size = function () {
    return this.length;
};

PriorityQueue.prototype.peek = function () {
    if (this.isEmpty()) {
        throw new Error();
    }
    return this.arr[1];
};

PriorityQueue.HeapSort = function (array, cmp) {
    var hp = new PriorityQueue(array, cmp);
    for (var i = 0; i < array.length; i++) {
        array[i] = hp.remove();
    }
};

function IsMinHeap(arr) {
    var size = arr.length;
    var mid = Math.floor((size - 2) / 2);

    for (i = 0; i <= mid; i++) {
        if (2 * i + 1 < size) {
            if (arr[i] > arr[2 * i + 1])
                return false;
        }
        if (2 * i + 2 < size) {
            if (arr[i] > arr[2 * i + 2])
                return false;
        }
    }
    return true;
}


function IsMaxHeap(arr) {
    var size = arr.length;
    var mid = Math.floor((size - 2) / 2);

    for (i = 0; i <= mid; i++) {
        if (2 * i + 1 < size && arr[i] < arr[2 * i + 1])
            return false;

        if (2 * i + 2 < size && arr[i] < arr[2 * i + 2])
            return false;
    }
    return true;
}

var a = [1, 9, 6, 7, 8, 0, 2, 4, 5, 3];
var hp = new PriorityQueue(a, comp1); // Min Heap
hp.print();

PriorityQueue.HeapSort(a, comp1); // Increasing Order
console.log(a);
var b = [1, 9, 6, 7, 8, 0, 2, 4, 5, 3];
var hp2 = new PriorityQueue(b, comp2); // Max Heap
hp2.print();
PriorityQueue.HeapSort(b, comp2); // Decreasing Order
console.log(b);