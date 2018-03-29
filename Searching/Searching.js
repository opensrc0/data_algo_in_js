MIN_VALUE = -999999

function linearSearchUnsorted(arr, value) {
    var i = 0;
    var size = arr.length;
    for (i = 0; i < size; i++) {
        if (value === arr[i]) {
            return true;
        }
    }
    return false;
};

function linearSearchSorted(arr, value) {
    var i = 0;
    var size = arr.length;
    for (i = 0; i < size; i++) {
        if (value === arr[i]) {
            return true;
        }
        else if (value < arr[i]) {
            return false;
        }
    }
    return false;
};

function Binarysearch(arr, value) {
    var low = 0;
    var high = arr.length - 1;
    var mid;
    while ((low <= high)) {
        mid = Math.floor((low + high) / 2);
        if (arr[mid] === value) {
            return true;
        }
        else if (arr[mid] < value) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    };
    return false;
};

function BinarySearchRecursive(arr, value) {
    return BinarySearchRecursiveUtil(arr, 0, arr.length - 1, value);
}

function BinarySearchRecursiveUtil(arr, low, high, value) {
    if (low > high) {
        return false;
    }
    var mid = Math.floor((low + high) / 2);
    if (arr[mid] === value) {
        return true;
    }
    else if (arr[mid] < value) {
        return BinarySearchRecursiveUtil(arr, mid + 1, high, value);
    }
    else {
        return BinarySearchRecursiveUtil(arr, low, mid - 1, value);
    }
};

function main1(args) {
    var first = [1, 3, 5, 7, 6, 4, 2];
    var second = [2, 4, 6, 8, 10, 12, 14, 16, 21, 23, 24];
    console.log(linearSearchUnsorted(first, 7));
    console.log(linearSearchUnsorted(first, 9));
    console.log(linearSearchSorted(second, 8));
    console.log(linearSearchSorted(second, 9));
    console.log(Binarysearch(second, 10));
    console.log(BinarySearchRecursive(second, 10));
};

function printRepeating(arr) {
    var i;
    var j;
    var size = arr.length;
    console.log(" Repeating elements are ");
    for (i = 0; i < size; i++) {
        for (j = i + 1; j < size; j++) {
            if (arr[i] === arr[j]) {
                console.log(arr[i]);
            }
        }
    }
};

function printRepeating2(arr) {
    var i;
    var size = arr.length;
    arr.sort(function cmp(a, b) { return (a - b); });
    console.log(" Repeating elements are ");
    for (i = 1; i < size; i++) {
        if (arr[i] === arr[i - 1]) {
            console.log(" " + arr[i]);
        }
    }
};


function printRepeating3(arr) {
    var hs = {};
    var i;
    var size = arr.length;
    console.log(" Repeating elements are ");
    for (i = 0; i < size; i++) {
        if (arr[i] in hs) {
            console.log(" " + arr[i]);
        }
        else {
            hs[arr[i]] = 1;
        }
    }
};


function printRepeating4(arr) {
    var count = new Array(size);
    var i;
    var size = arr.length;
    for (i = 0; i < size; i++) {
        count[i] = 0;
    }
    console.log(" Repeating elements are ");
    for (i = 0; i < size; i++) {
        if (count[arr[i]] === 1) {
            console.log(" " + arr[i]);
        }
        else {
            count[arr[i]]++;
        }
    }
};

function main2(args) {
    var first = [1, 3, 5, 3, 1, 4, 2, 2];
    (printRepeating(first));
    (printRepeating2(first));
    (printRepeating3(first));
    (printRepeating4(first));
};

function getMax(arr) {
    var i;
    var j;
    var max = arr[0];
    var size = arr.length;
    var count = 1;
    var maxCount = 1;
    for (i = 0; i < size; i++) {
        count = 1;
        for (j = i + 1; j < size; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        if (count > maxCount) {
            max = arr[i];
            maxCount = count;
        }
    }
    return max;
};

function getMax2(arr) {
    var max = arr[0];
    var size = arr.length;
    var maxCount = 1;
    var curr = arr[0];
    var currCount = 1;
    var i;
    arr.sort(function cmp(a, b) { return (a - b); });
    for (i = 1; i < size; i++) {
        if (arr[i] === arr[i - 1]) {
            currCount++;
        }
        else {
            currCount = 1;
            curr = arr[i];
        }
        if (currCount > maxCount) {
            maxCount = currCount;
            max = curr;
        }
    }
    return max;
};

function getMax3(arr, range) {
    var max = arr[0];
    var size = arr.length;
    var maxCount = 1;
    var count = new Array(range);
    var i;
    for (i = 0; i < size; i++) {
        count[i] = 0;
    }
    for (i = 0; i < size; i++) {
        count[arr[i]]++;
        if (count[arr[i]] > maxCount) {
            maxCount = count[arr[i]];
            max = arr[i];
        }
    }
    return max;
};

function main3(args) {
    var first = [1, 3, 5, 3, 1, 2, 4, 2, 2];
    console.log(getMax(first));
    console.log(getMax2(first));
    console.log(getMax3(first, 10));
};

function getMajority(arr) {
    var i;
    var j;
    var size = arr.length;
    var max = 0;
    var count = 1;
    var maxCount = 0;
    for (i = 0; i < size; i++) {
        count = 1;
        for (j = i + 1; j < size; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        if (count > maxCount) {
            max = arr[i];
            maxCount = count;
        }
    }
    if (maxCount > Math.floor(size / 2)) {
        return max;
    }
    else {
        return MIN_VALUE;
    }
};

function getMajority2(arr) {
    var size = arr.length;
    var majIndex = Math.floor(size / 2);
    var count = 1;
    var i;
    var candidate;
    arr.sort(function cmp(a, b) { return (a - b); });
    candidate = arr[majIndex];
    count = 0;
    for (i = 0; i < size; i++) {
        if (arr[i] === candidate) {
            count++;
        }
    }
    if (count > Math.floor(size / 2)) {
        return arr[majIndex];
    }
    else {
        return MIN_VALUE;
    }
};

function getMajority3(arr) {
    var size = arr.length;
    var majIndex = 0;
    var count = 1;
    var i;
    var candidate;
    for (i = 1; i < size; i++) {
        if (arr[majIndex] === arr[i]) {
            count++;
        }
        else {
            count--;
        }
        if (count === 0) {
            majIndex = i;
            count = 1;
        }
    }
    candidate = arr[majIndex];
    count = 0;
    for (i = 0; i < size; i++) {
        if (arr[i] === candidate) {
            count++;
        }
    }
    if (count > Math.floor(size / 2)) {
        return arr[majIndex];
    }
    else {
        return MIN_VALUE;
    }
};

function main4(args) {
    var first = [1, 3, 5, 3, 1, 2, 4, 2, 2, 2, 2, 2, 2];
    console.log(getMajority(first));
    console.log(getMajority2(first));
    console.log(getMajority3(first, 10));
}

function findMissingNumber(arr) {
    var i;
    var j;
    var size = arr.length;
    var found = 0;
    for (i = 1; i <= size; i++) {
        found = 0;
        for (j = 0; j < size; j++) {
            if (arr[j] === i) {
                found = 1;
                break;
            }
        }
        if (found === 0) {
            return i;
        }
    }
    return MAX_VALUE;
};

function findMissingNumber2(arr, range) {
    if ((arr != null && arr instanceof Array) && (typeof range === 'number')) {
        var i;
        var size = arr.length;
        var xorSum = 0;
        for (i = 1; i <= range; i++) {
            xorSum ^= i;
        }
        for (i = 0; i < size; i++) {
            xorSum ^= arr[i];
        }
        return xorSum;
    }
    else
        throw new Error('invalid overload');
};

function main5(args) {
    var first = [1, 3, 5, 7, 2, 4, 8, 9, 10];
    console.log(findMissingNumber(first));
    console.log(findMissingNumber2(first, 10));
}


function FindPair(arr, value) {
    var i;
    var j;
    var size = arr.length;
    for (i = 0; i < size; i++) {
        for (j = i + 1; j < size; j++) {
            if ((arr[i] + arr[j]) === value) {
                console.log("The pair is : " + arr[i] + "," + arr[j]);
                return 1;
            }
        }
    }
    return 0;
};

function FindPair2(arr, value) {
    var first = 0;
    var size = arr.length;
    var second = size - 1;
    var curr;
    arr.sort(function cmp(a, b) { return (a - b); });
    while ((first < second)) {
        curr = arr[first] + arr[second];
        if (curr === value) {
            console.log("The pair is " + arr[first] + "," + arr[second]);
            return 1;
        }
        else if (curr < value) {
            first++;
        }
        else {
            second--;
        }
    };
    return 0;
};


function FindPair3(arr, value) {
    var hs = {};
    var size = arr.length;
    var i;
    for (i = 0; i < size; i++) {
        if ((value - arr[i]) in hs) {
            console.log("The pair is : " + arr[i] + " , " + (value - arr[i]));
            return 1;
        }
        hs[arr[i]] = 1;
    }
    return 0;
};


function main6(args) {
    var first = [1, 3, 5, 7, 2, 4, 8, 9, 10];
    console.log(FindPair(first, 9));
    console.log(FindPair2(first, 9));
    console.log(FindPair3(first, 9));
}

function minabsSumPair(arr) {
    var l;
    var r;
    var size = arr.length;
    var minSum;
    var sum;
    var minFirst;
    var minSecond;
    if (size < 2) {
        console.log("Invalid Input");
        return;
    }
    minFirst = 0;
    minSecond = 1;
    minSum = Math.abs(arr[0] + arr[1]);
    for (l = 0; l < size - 1; l++) {
        for (r = l + 1; r < size; r++) {
            sum = Math.abs(arr[l] + arr[r]);
            if (sum < minSum) {
                minSum = sum;
                minFirst = l;
                minSecond = r;
            }
        }
    }
    console.log(" The two elements with minimum sum are : " + arr[minFirst] + " , " + arr[minSecond]);
};

function minabsSumPair2(arr) {
    var l;
    var r;
    var size = arr.length;
    var minSum;
    var sum;
    var minFirst;
    var minSecond;
    if (size < 2) {
        console.log("Invalid Input");
        return;
    }
    arr.sort(function cmp(a, b) { return (a - b); });
    minFirst = 0;
    minSecond = size - 1;
    minSum = Math.abs(arr[minFirst] + arr[minSecond]);
    for (l = 0, r = size - 1; l < r;) {
        sum = (arr[l] + arr[r]);
        if (Math.abs(sum) < minSum) {
            minSum = Math.abs(sum);
            minFirst = l;
            minSecond = r;
        }
        if (sum < 0) {
            l++;
        }
        else if (sum > 0) {
            r--;
        }
        else {
            break;
        }
    }
    console.log(" The two elements with minimum sum are : " + arr[minFirst] + " , " + arr[minSecond]);
};

function main7(args) {
    var first = [1, 3, 5, 7, 2, 4, -12, 8, -9, 9, 10];
    minabsSumPair(first);
    minabsSumPair2(first);
}

function SearchBotinicArrayMax(arr) {
    var size = arr.length;
    var start = 0;
    var end = size - 1;
    var mid = Math.floor((start + end) / 2);
    var maximaFound = 0;
    if (size < 3) {
        console.log("error");
        return 0;
    }
    while ((start <= end)) {
        mid = Math.floor((start + end) / 2);
        if (arr[mid - 1] < arr[mid] && arr[mid + 1] < arr[mid]) {
            maximaFound = 1;
            break;
        }
        else if (arr[mid - 1] < arr[mid] && arr[mid] < arr[mid + 1]) {
            start = mid + 1;
        }
        else if (arr[mid - 1] > arr[mid] && arr[mid] > arr[mid + 1]) {
            end = mid - 1;
        }
        else {
            break;
        }
    };
    if (maximaFound === 0) {
        console.log("error");
        return 0;
    }
    return arr[mid];
};

function main8(args) {
    var first = [1, 3, 5, 7, 9, 11, 12, 8, 5, 3, 1];
    console.log(SearchBotinicArrayMax(first));
}

function SearchBitonicArray(arr, key) {
    var size = arr.length;
    var max = FindMaxBitonicArray(arr);
    var k = BinarySearch(arr, 0, max, key, true);
    if (k !== -1) {
        return true;
    }
    k = BinarySearch(arr, max + 1, size - 1, key, false);
    if (k !== -1) {
        return true;
    }
    return false;
};


function FindMaxBitonicArray(arr) {
    var size = arr.length;
    var start = 0;
    var end = size - 1;
    var mid;
    if (size < 3) {
        console.log("error");
        return -1;
    }
    while ((start <= end)) {
        mid = Math.floor((start + end) / 2);
        if (arr[mid - 1] < arr[mid] && arr[mid + 1] < arr[mid]) {
            return mid;
        }
        else if (arr[mid - 1] < arr[mid] && arr[mid] < arr[mid + 1]) {
            start = mid + 1;
        }
        else if (arr[mid - 1] > arr[mid] && arr[mid] > arr[mid + 1]) {
            end = mid - 1;
        }
        else {
            break;
        }
    };
    console.log("error");
    return -1;
};

function BinarySearch(arr, start, end, key, isInc) {
    var mid;
    if (end < start) {
        return -1;
    }
    mid = Math.floor((start + end) / 2);
    if (key === arr[mid]) {
        return mid;
    }
    if (isInc !== false && key < arr[mid] || isInc === false && key > arr[mid]) {
        return BinarySearch(arr, start, mid - 1, key, isInc);
    }
    else {
        return BinarySearch(arr, mid + 1, end, key, isInc);
    }
};

function main9(args) {
    var first = [1, 3, 5, 7, 9, 11, 12, 8, 5, 3, 1];
    console.log(SearchBitonicArray(first, 8));
    console.log(SearchBitonicArray(first, 7));
    console.log(SearchBitonicArray(first, 12));
}

function findKeyCount(arr, key) {
    var size = arr.length;
    var i;
    var count = 0;
    for (i = 0; i < size; i++) {
        if (arr[i] === key) {
            count++;
        }
    }
    return count;
};

function findKeyCount2(arr, key) {
    var size = arr.length;
    var firstIndex;
    var lastIndex;
    firstIndex = findFirstIndex(arr, 0, size - 1, key);
    lastIndex = findLastIndex(arr, 0, size - 1, key);
    return (lastIndex - firstIndex + 1);
};

function findFirstIndex(arr, start, end, key) {
    var mid;
    if (end < start) {
        return -1;
    }
    mid = Math.floor((start + end) / 2);
    if (key === arr[mid] && (mid === start || arr[mid - 1] !== key)) {
        return mid;
    }
    if (key <= arr[mid]) {
        return findFirstIndex(arr, start, mid - 1, key);
    }
    else {
        return findFirstIndex(arr, mid + 1, end, key);
    }
};

function findLastIndex(arr, start, end, key) {
    var mid;
    if (end < start) {
        return -1;
    }
    mid = Math.floor((start + end) / 2);
    if (key === arr[mid] && (mid === end || arr[mid + 1] !== key)) {
        return mid;
    }
    if (key < arr[mid]) {
        return findLastIndex(arr, start, mid - 1, key);
    }
    else {
        return findLastIndex(arr, mid + 1, end, key);
    }
};

function swap(arr, first, second) {
    var temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
};

function seperateEvenAndOdd(arr) {
    var size = arr.length;
    var left = 0;
    var right = size - 1;
    while ((left < right)) {
        if (arr[left] % 2 === 0) {
            left++;
        }
        else if (arr[right] % 2 === 1) {
            right--;
        }
        else {
            swap(arr, left, right);
            left++;
            right--;
        }
    };
};

function main10(args) {
    var first = [1, 0, 5, 7, 9, 11, 12, 8, 5, 3, 1];
    seperateEvenAndOdd(first);
    console.log(first.toString());
}

function maxProfit(stocks) {
    var size = stocks.length;
    var buy = 0;
    var sell = 0;
    var curMin = 0;
    var currProfit = 0;
    var maxProfit = 0;
    var i;
    for (i = 0; i < size; i++) {
        if (stocks[i] < stocks[curMin]) {
            curMin = i;
        }
        currProfit = stocks[i] - stocks[curMin];
        if (currProfit > maxProfit) {
            buy = curMin;
            sell = i;
            maxProfit = currProfit;
        }
    }
    console.log("Purchase day is- " + buy + " at price " + stocks[buy]);
    console.log("Sell day is- " + sell + " at price " + stocks[sell]);
};

function main11(args) {
    var first = [10, 10, 5, 7, 9, 11, 12, 8, 5, 3, 10];
    maxProfit(first);
}

function getMedian(arr) {
    var size = arr.length;
    arr.sort(function cmp(a, b) { return (a - b); });
    return arr[Math.floor(size / 2)];
};

function main12(args) {
    var first = [10, 10, 5, 7, 9, 11, 12, 8, 5, 3, 10];
    console.log("median value is :: " + getMedian(first));
}

function findMedian(arrFirst, arrSecond) {
    var sizeFirst = arrFirst.length;
    var sizeSecond = arrSecond.length;
    var medianIndex = Math.floor(((sizeFirst + sizeSecond) + (sizeFirst + sizeSecond) % 2) / 2);
    var i = 0;
    var j = 0;
    var count = 0;
    while ((count < medianIndex - 1)) {
        if (i < sizeFirst - 1 && arrFirst[i] < arrSecond[j]) {
            i++;
        }
        else {
            j++;
        }
        count++;
    };
    if (arrFirst[i] < arrSecond[j]) {
        return arrFirst[i];
    }
    else {
        return arrSecond[j];
    }
};

function main13(args) {
    var first = [10, 10, 5, 7, 9, 11];
    var second = [12, 8, 5, 3, 10];
    first.sort(function cmp(a, b) { return (a - b); });
    second.sort(function cmp(a, b) { return (a - b); });
    console.log("median value is :: " + findMedian(first, second));
}

function min(a, b) {
    return a > b ? b : a;
};

function max(a, b) {
    return a < b ? b : a;
};

function BinarySearch01(arr) {
    var size = arr.length;
    if (size === 0) {
        return 0;
    }
    return BinarySearch01Util(arr, 0, size - 1);
};

function BinarySearch01Util(arr, start, end) {
    var mid;
    if (end < start) {
        return -1;
    }
    mid = Math.floor((start + end) / 2);
    if ("1" === arr[mid] && "0" === arr[mid - 1]) {
        return mid;
    }
    if ("0" === arr[mid]) {
        return BinarySearch01Util(arr, mid + 1, end);
    }
    else {
        return BinarySearch01Util(arr, start, mid - 1);
    }
};

function main14(args) {
    var first = "00000000111"
    console.log("BinarySearch01 index is :: " + BinarySearch01(first));
}


function BinarySearchRotateArray(arr, key) {
    var size = arr.length;
    return BinarySearchRotateArrayUtil(arr, 0, size - 1, key);
};

function BinarySearchRotateArrayUtil(arr, start, end, key) {
    var mid;
    if (end < start) {
        return -1;
    }
    mid = Math.floor((start + end) / 2);
    if (key === arr[mid]) {
        return mid;
    }
    if (arr[mid] > arr[start]) {
        if (arr[start] <= key && key < arr[mid]) {
            return BinarySearchRotateArrayUtil(arr, start, mid - 1, key);
        }
        else {
            return BinarySearchRotateArrayUtil(arr, mid + 1, end, key);
        }
    }
    else {
        if (arr[mid] < key && key <= arr[end]) {
            return BinarySearchRotateArrayUtil(arr, mid + 1, end, key);
        }
        else {
            return BinarySearchRotateArrayUtil(arr, start, mid - 1, key);
        }
    }
};

function main15(args) {
    first = [7, 9, 10, 11, 3, 5, 7]
    console.log("BinarySearchRotateArray index is :: " + BinarySearchRotateArray(first, 8));
    console.log("BinarySearchRotateArray index is :: " + BinarySearchRotateArray(first, 7));
    console.log("BinarySearchRotateArray index is :: " + BinarySearchRotateArray(first, 6));
}

function FirstRepeated(arr) {
    var i;
    var j;
    var size = arr.length;
    for (i = 0; i < size; i++) {
        for (j = i + 1; j < size; j++) {
            if (arr[i] === arr[j]) {
                return arr[i];
            }
        }
    }
    return 0;
};

function main16(args) {
    first = [7, 9, 3, 11, 3, 5, 7]
    console.log("FirstRepeated :: " + FirstRepeated(first));
}

function transformArrayAB(str) {
    var size = str.length;
    arr = str.split("");
    var N = Math.floor(size / 2);
    var i;
    var j;
    for (i = 1; i < N; i++) {
        for (j = 0; j < i; j++) {
            swap(arr, N - i + 2 * j, N - i + 2 * j + 1);
        }
    }
    return arr.join("");
};

function main17(args) {
    first = "aaaabbbb"
    console.log(transformArrayAB(first));
}


function checkPermutation(array1, array2) {
    var size1 = array1.length;
    var size2 = array2.length;
    if (size1 !== size2) {
        return false;
    }
    array1.sort();
    array2.sort();
    for (var i = 0; i < size1; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
};

function checkPermutation2(array1, array2) {
    var i;
    var size1 = array1.length;
    var size2 = array2.length;
    if (size1 !== size2) {
        return false;
    }
    var ht = {};
    for (i = 0; i < size1; i++) {
        if (array1[i] in ht) {
            ht[array1[i]] += 1
        } else {
            ht[array1[i]] = 1
        }
    }
    for (i = 0; i < size2; i++) {
        if (array2[i] in ht === false) {
            return false;
        } else {
            ht[array1[i]] -= 1
            if (ht[array1[i]] == 0) {
                delete ht[array2[i]]
            }
        }
    }
    return true;
};

var first = [1, 2, 3, 1, 2, 3, 5, 6, 7, 7, 8, 9, 3, 4, 5]
var second = [1, 2, 4, 5, 3, 1, 2, 3, 5, 6, 7, 7, 8, 9, 3]

console.log("checkPermutation " + checkPermutation(first, second))
console.log("checkPermutation2 " + checkPermutation2(first, second))

function removeDuplicates(array) {
    var j = 0;
    var i;
    var size = array.length;
    if (size === 0) {
        return [];
    }
    array.sort(function cmp(a, b) { return (a - b); });
    for (i = 1; i < size; i++) {
        if (array[i] !== array[j]) {
            j++;
            array[j] = array[i];
        }
    }
    return array.slice(0, j + 1);
};

function main18(args) {
    first = [1, 2, 3, 1, 2, 3, 5, 6, 7, 7, 8, 9, 3, 4, 5]
    console.log(removeDuplicates(first));
}

function FindElementIn2DArray(arr, r, c, value) {
    var row = 0;
    var column = c - 1;
    while ((row < r && column >= 0)) {
        if (arr[row][column] === value) {
            return true;
        }
        else if (arr[row][column] > value) {
            column--;
        }
        else {
            row++;
        }
    };
    return false;
};

function main19(args) {
    var f = new Array(10);
    var count = 0;
    for (i = 0; i < 10; i++) {
        f[i] = new Array(10);
        for (j = 0; j < 10; j++) {
            f[i][j] = count++;
        }
    }

    console.log(FindElementIn2DArray(f, 10, 10, 21));
    console.log(FindElementIn2DArray(f, 10, 10, 121));
}


main1(null);
main2(null);
main3(null);
main4(null);
main5(null);
main6(null);
main7(null);
main8(null);
main9(null);
main10(null);
main11(null);
main12(null);
main13(null);
main14(null);
main15(null);
main16(null);
main17(null);
main18(null);
main19(null);