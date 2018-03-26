function SelectionSort(array) {
    this.arr = array;
}
SelectionSort.prototype.less = function (value1, value2) {
    return value1 < value2;
};
SelectionSort.prototype.more = function (value1, value2) {
    return value1 > value2;
};
SelectionSort.prototype.sort = function () {
    var size = this.arr.length;
    var i;
    var j;
    var max;
    var temp;
    for (i = 0; i < size - 1; i++) {
        max = 0;
        for (j = 1; j < size - 1 - i; j++) {
            if (this.arr[j] > this.arr[max]) {
                max = j;
            }
        }
        temp = this.arr[size - 1 - i];
        this.arr[size - 1 - i] = this.arr[max];
        this.arr[max] = temp;
    }
};
SelectionSort.prototype.sort2 = function () {
    var size = this.arr.length;
    var i;
    var j;
    var min;
    var temp;
    for (i = 0; i < size - 1; i++) {
        min = i;
        for (j = i + 1; j < size; j++) {
            if (this.arr[j] < this.arr[min]) {
                min = j;
            }
        }
        temp = this.arr[i];
        this.arr[i] = this.arr[min];
        this.arr[min] = temp;
    }
};

var array = [9, 1, 8, 2, 7, 3, 6, 4, 5];
var bs = new SelectionSort(array);
bs.sort2();
console.log(array);