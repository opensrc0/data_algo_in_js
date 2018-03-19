function BubbleSort(array) {
    this.arr = array;
}

BubbleSort.prototype.less = function (value1, value2) {
    return value1 < value2;
};

BubbleSort.prototype.more = function (value1, value2) {
    return value1 > value2;
};

BubbleSort.prototype.sort = function () {
    var size = this.arr.length;
    var i;
    var j;
    var temp;
    for (i = 0; i < (size - 1) ; i++) {
        for (j = 0; j < size - i - 1; j++) {
            if (this.more(this.arr[j], this.arr[j + 1])) {
                temp = this.arr[j];
                this.arr[j] = this.arr[j + 1];
                this.arr[j + 1] = temp;
            }
        }
    }
};

BubbleSort.prototype.sort2 = function () {
    var size = this.arr.length;
    var i;
    var j;
    var temp;
    var swapped = 1;
    for (i = 0; i < (size - 1) && swapped === 1; i++) {
        swapped = 0;
        for (j = 0; j < size - i - 1; j++) {
            if (this.more(this.arr[j], this.arr[j + 1])) {
                temp = this.arr[j];
                this.arr[j] = this.arr[j + 1];
                this.arr[j + 1] = temp;
                swapped = 1;
            }
        }
    }
};

function main(args) {
    var array = [9, 1, 8, 2, 7, 3, 6, 4, 5];
    var bs = new BubbleSort(array);
    bs.sort2();
    console.log(array);
};

BubbleSort.main(null);