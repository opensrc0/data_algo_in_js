swap = function (arr, first, second) {
    var temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
};

quickSelect = function (arr, lower, upper, k) {
    if (((arr != null && arr instanceof Array)) && ((typeof lower === 'number')) && ((typeof upper === 'number')) && ((typeof k === 'number'))) {
        if (upper <= lower)
            return;
        var pivot = arr[lower];
        var start = lower;
        var stop = upper;
        while ((lower < upper)) {
            while ((arr[lower] <= pivot && lower < upper)) {
                lower++;
            };
            while ((arr[upper] > pivot && lower <= upper)) {
                upper--;
            };
            if (lower < upper) {
                swap(arr, upper, lower);
            }
        };
        swap(arr, upper, start);
        if (k < upper)
            quickSelect(arr, start, upper - 1, k);
        if (k > upper)
            quickSelect(arr, upper + 1, stop, k);
    }
    else
        throw new Error('invalid overload');
};

quickSelectWrapper = function (arr, k) {
    quickSelect(arr, 0, arr.length - 1, k);
};

function main(args) {
    var array = [3, 4, 2, 1, 6, 5, 7, 8, 10, 9];
    quickSelectWrapper(array, 5);
    console.info("value at index 5 is : " + array[4]);
};

main(null);