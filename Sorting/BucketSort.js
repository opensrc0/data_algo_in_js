
function BucketSort(arr, lowerRange, upperRange) {
    this.range = 0;
    this.lowerRange = 0;
    this.array = arr;
    this.range = upperRange - lowerRange;
    this.lowerRange = lowerRange;
}

BucketSort.prototype.sort = function () {
    var i;
    var j;
    var size = this.array.length;
    var count = new Array(this.range);
    for (i = 0; i < this.range; i++) {
        count[i] = 0;
    }
    for (i = 0; i < size; i++) {
        count[this.array[i] - this.lowerRange]++;
    }
    j = 0;
    for (i = 0; i < this.range; i++) {
        for (; count[i] > 0; (count[i])--) {
            this.array[j++] = i + this.lowerRange;
        }
    }
};

var array = [23, 24, 22, 21, 26, 25, 27, 28, 21, 21];
var m = new BucketSort(array, 20, 30);
m.sort();
console.log(array);