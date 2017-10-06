function InsertionSort(array) {
    this.arr = array;
}
InsertionSort.prototype.more = function (value1, value2) {
    return value1 > value2;
};
InsertionSort.prototype.sort = function () {
    var size = this.arr.length;
    var temp;
    var j;
    for (var i = 1; i < size; i++) {
        temp = this.arr[i];
        for (j = i; j > 0 && this.more(this.arr[j - 1], temp) ; j--) {
            this.arr[j] = this.arr[j - 1];
        }
        this.arr[j] = temp;
    }
};

function main(args) {
    var array = [9, 1, 8, 2, 7, 3, 6, 4, 5];
    var bs = new InsertionSort(array);
    bs.sort();
    console.info(array);

};

main(null);