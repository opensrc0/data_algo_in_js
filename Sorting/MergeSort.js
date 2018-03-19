function MergeSort(array) {
    this.arr = array;
}
MergeSort.prototype.merge = function (arr, tempArray, lowerIndex, middleIndex, upperIndex) {
    var lowerStart = lowerIndex;
    var lowerStop = middleIndex;
    var upperStart = middleIndex + 1;
    var upperStop = upperIndex;
    var count = lowerIndex;
    while ((lowerStart <= lowerStop && upperStart <= upperStop)) {
        if (arr[lowerStart] < arr[upperStart]) {
            tempArray[count++] = arr[lowerStart++];
        }
        else {
            tempArray[count++] = arr[upperStart++];
        }
    };
    while ((lowerStart <= lowerStop)) {
        tempArray[count++] = arr[lowerStart++];
    };
    while ((upperStart <= upperStop)) {
        tempArray[count++] = arr[upperStart++];
    };
    for (var i = lowerIndex; i <= upperIndex; i++) {
        arr[i] = tempArray[i];
    }
};

MergeSort.prototype.mergeSrt = function (arr, tempArray, lowerIndex, upperIndex) {
    if (lowerIndex >= upperIndex) {
        return;
    }
    var middleIndex = ((lowerIndex + upperIndex) / 2 | 0);
    this.mergeSrt(arr, tempArray, lowerIndex, middleIndex);
    this.mergeSrt(arr, tempArray, middleIndex + 1, upperIndex);
    this.merge(arr, tempArray, lowerIndex, middleIndex, upperIndex);
};

MergeSort.prototype.sort = function () {
    var size = this.arr.length;
    var tempArray = new Array(size);
    this.mergeSrt(this.arr, tempArray, 0, size - 1);
};

function main(args) {
    var array = [3, 4, 2, 1, 6, 5, 7, 8, 1, 1];
    var m = new MergeSort(array);
    m.sort();
    console.log(array);
};

main(null);