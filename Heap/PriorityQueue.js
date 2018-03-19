defaultCmp = function (x, y) {
    return x - y;
};

function PriorityQueue(array, cmp) {
    this.comp = (typeof cmp === 'function' && cmp != null) ? cmp : defaultCmp;
    
    if (array != null && array instanceof Array) {
        this.length = array.length;
        this.arr = [0].concat(array);
        for (var i = Math.floor(this.length / 2) ; i > 0; i--) {
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

PriorityQueue.proclateDown = function (position) {
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

PriorityQueue.proclateUp = function (position) {
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

PriorityQueue.add = function (value) {
    ++this.length;
    this.arr[this.length] = value;
    this.proclateUp(this.length);
};

PriorityQueue.remove = function () {
    if (this.isEmpty()) {
        throw new Error();
    }
    var value = this.arr[1];
    this.arr[1] = this.arr[this.length];
    this.length--;
    this.proclateDown(1);
    return value;
};

PriorityQueue.print = function () {
    for (var i = 1; i <= this.length; i++) {
        console.info(" " + this.arr[i]);
    }
};

PriorityQueue.isEmpty = function () {
    return (this.length === 0);
};

PriorityQueue.size = function () {
    return this.length;
};

PriorityQueue.peek = function () {
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

comp1 = function (x, y) {
    return x - y;
};

PriorityQueue.main = function (args) {
    var a = [1, 9, 6, 7, 8, 0, 2, 4, 5, 3];
    var hp = new PriorityQueue(a, comp1);
    hp.print();
    PriorityQueue.HeapSort(a, comp1);
    console.info(a);
};

//PriorityQueue.main(null);