MIN_VALUE = -999999

mainbuggy = function (args) {
    var first = [1, 3, 5, 7, 9, 25, 30];
    var second = [2, 4, 6, 8, 10, 12, 14, 16, 21, 23, 24];
    for (var i = 1; i < 16; i++) {
        console.info("Index : " + i + " Value : ");
        console.info(findkth(first, second, i));
    }
};

findkth = function (first, second, k) {// buggy
    var sizeFirst = first.length;
    var sizeSecond = second.length;
    if (sizeFirst + sizeSecond < k) {
        return MAX_VALUE;
    }
    if (k === 1) {
        return min(first[0], second[0]);
    }
    var i = min(sizeFirst, Math.floor(k / 2));
    var j = min(sizeSecond, k - i);
    var step = max(1, Math.floor(min(i, j) / 2));
    while ((step > 0)) {
        if (first[i - 1] > second[j - 1] && first[i - 1] > second[min(second.length, j + step) - 1]) {
            j = min(second.length, j + step);
            i = k - j;
        }
        else if (first[i - 1] < second[j - 1] && first[min(first.length, i + step) - 1] < second[j - 1]) {
            i = min(first.length, i + step);
            j = k - i;
        }
        step = Math.floor(step / 2);
    }
    ;
    return max(first[i - 1], second[j - 1]);
};

linearSearchUnsorted = function (arr, value) {
    var i = 0;
    var size = arr.length;
    for (i = 0; i < size; i++) {
        if (value === arr[i]) {
            return true;
        }
    }
    return false;
};

linearSearchSorted = function (arr, value) {
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

Binarysearch = function (arr, value) {
    var low = 0;
    var high = arr.length - 1;
    var mid;
    while ((low <= high)) {
        mid = low + Math.floor((high - low) / 2);
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

BinarySearchRecursive = function (arr, value) {
    return BinarySearchRecursiveUtil(arr, 0, arr.length - 1, value);
}

BinarySearchRecursiveUtil = function (arr, low, high, value) {
    if (low > high) {
        return false;
    }
    var mid = low + Math.floor((high - low) / 2);
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

main1 = function (args) {
    var first = [1, 3, 5, 7, 6, 4, 2];
    var second = [2, 4, 6, 8, 10, 12, 14, 16, 21, 23, 24];
    console.info(linearSearchUnsorted(first, 7));
    console.info(linearSearchUnsorted(first, 9));
    console.info(linearSearchSorted(second, 8));
    console.info(linearSearchSorted(second, 9));
    console.info(Binarysearch(second, 10));
    console.info(BinarySearchRecursive(second, 10));
};

printRepeating = function (arr) {
    var i;
    var j;
    var size = arr.length;
    console.info(" Repeating elements are ");
    for (i = 0; i < size; i++) {
        for (j = i + 1; j < size; j++) {
            if (arr[i] === arr[j]) {
                console.info(arr[i]);
            }
        }
    }
};

printRepeating2 = function (arr) {
    var i;
    var size = arr.length;
    arr.sort(function cmp(a, b) { return (a - b); });
    console.info(" Repeating elements are ");
    for (i = 1; i < size; i++) {
        if (arr[i] === arr[i - 1]) {
            console.info(" " + arr[i]);
        }
    }
};


printRepeating3 = function (arr) {
    var hs = new HashTable();
    var i;
    var size = arr.length;
    console.info(" Repeating elements are ");
    for (i = 0; i < size; i++) {
        if (hs.find(arr[i])) {
            console.info(" " + arr[i]);
        }
        else {
            hs.insert(arr[i]);
        }
    }
};


printRepeating4 = function (arr) {
    var count = new Array(size);
    var i;
    var size = arr.length;
    for (i = 0; i < size; i++) {
        count[i] = 0;
    }
    console.info(" Repeating elements are ");
    for (i = 0; i < size; i++) {
        if (count[arr[i]] === 1) {
            console.info(" " + arr[i]);
        }
        else {
            count[arr[i]]++;
        }
    }
};

main5 = function (args) {
    var first = [1, 3, 5, 3, 1, 4, 2, 2];
    (printRepeating(first));
    (printRepeating2(first));
    (printRepeating3(first));
    (printRepeating4(first));
};

getMax = function (arr) {
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

getMax2 = function (arr) {
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

getMax3 = function (arr, range) {
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

main6 = function (args) {
    var first = [1, 3, 5, 3, 1, 2, 4, 2, 2];
    console.info(getMax(first));
    console.info(getMax2(first));
    console.info(getMax3(first, 10));
};

getMajority = function (arr) {
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

getMajority2 = function (arr) {
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

getMajority3 = function (arr) {
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

main6 = function (args) {
    var first = [1, 3, 5, 3, 1, 2, 4, 2, 2, 2, 2, 2, 2];
    console.info(getMajority(first));
    console.info(getMajority2(first));
    console.info(getMajority3(first, 10));
}

findMissingNumber = function (arr) {
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

findMissingNumber2 = function (arr, range) {
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

main7 = function (args) {
    var first = [1, 3, 5, 7, 2, 4, 8, 9, 10];
    console.info(findMissingNumber(first));
    console.info(findMissingNumber2(first, 10));
}


FindPair = function (arr, value) {
    var i;
    var j;
    var size = arr.length;
    for (i = 0; i < size; i++) {
        for (j = i + 1; j < size; j++) {
            if ((arr[i] + arr[j]) === value) {
                console.info("The pair is : " + arr[i] + "," + arr[j]);
                return 1;
            }
        }
    }
    return 0;
};

FindPair2 = function (arr, value) {
    var first = 0;
    var size = arr.length;
    var second = size - 1;
    var curr;
    arr.sort(function cmp(a, b) { return (a - b); });
    while ((first < second)) {
        curr = arr[first] + arr[second];
        if (curr === value) {
            console.info("The pair is " + arr[first] + "," + arr[second]);
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


FindPair3 = function (arr, value) {
    var hs = new HashTable();
    var size = arr.length;
    var i;
    for (i = 0; i < size; i++) {
        if (hs.find(value - arr[i])) {
            console.info("The pair is : " + arr[i] + " , " + (value - arr[i]));
            return 1;
        }
        hs.insert(arr[i]);
    }
    return 0;
};


main9 = function (args) {
    var first = [1, 3, 5, 7, 2, 4, 8, 9, 10];
    console.info(FindPair(first, 9));
    console.info(FindPair2(first, 9));
    console.info(FindPair3(first, 9));
}

minabsSumPair = function (arr) {
    var l;
    var r;
    var size = arr.length;
    var minSum;
    var sum;
    var minFirst;
    var minSecond;
    if (size < 2) {
        console.info("Invalid Input");
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
    console.info(" The two elements with minimum sum are : " + arr[minFirst] + " , " + arr[minSecond]);
};

minabsSumPair2 = function (arr) {
    var l;
    var r;
    var size = arr.length;
    var minSum;
    var sum;
    var minFirst;
    var minSecond;
    if (size < 2) {
        console.info("Invalid Input");
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
    console.info(" The two elements with minimum sum are : " + arr[minFirst] + " , " + arr[minSecond]);
};

main10 = function (args) {
    var first = [1, 3, 5, 7, 2, 4, -12, 8, -9, 9, 10];
    minabsSumPair(first);
    minabsSumPair2(first);
}

SearchBotinicArrayMax = function (arr) {
    var size = arr.length;
    var start = 0;
    var end = size - 1;
    var mid = Math.floor((start + end) / 2);
    var maximaFound = 0;
    if (size < 3) {
        console.info("error");
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
        console.info("error");
        return 0;
    }
    return arr[mid];
};

main12 = function (args) {
    var first = [1, 3, 5, 7, 9, 11, 12, 8, 5, 3, 1];
    console.info(SearchBotinicArrayMax(first));
}

SearchBitonicArray = function (arr, key) {
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


FindMaxBitonicArray = function (arr) {
    var size = arr.length;
    var start = 0;
    var end = size - 1;
    var mid;
    if (size < 3) {
        console.info("error");
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
    console.info("error");
    return -1;
};

BinarySearch = function (arr, start, end, key, isInc) {
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

main12 = function (args) {
    var first = [1, 3, 5, 7, 9, 11, 12, 8, 5, 3, 1];
    console.info(SearchBitonicArray(first, 8));
    console.info(SearchBitonicArray(first, 7));
    console.info(SearchBitonicArray(first, 12));
}

findKeyCount = function (arr, key) {
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

findKeyCount2 = function (arr, key) {
    var size = arr.length;
    var firstIndex;
    var lastIndex;
    firstIndex = findFirstIndex(arr, 0, size - 1, key);
    lastIndex = findLastIndex(arr, 0, size - 1, key);
    return (lastIndex - firstIndex + 1);
};

findFirstIndex = function (arr, start, end, key) {
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

findLastIndex = function (arr, start, end, key) {
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

swap = function (arr, first, second) {
    var temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
};

seperateEvenAndOdd = function (arr) {
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

main14 = function (args) {
    var first = [1, 0, 5, 7, 9, 11, 12, 8, 5, 3, 1];
    seperateEvenAndOdd(first);
    console.info(first.toString());
}

maxProfit = function (stocks) {
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
    console.info("Purchase day is- " + buy + " at price " + stocks[buy]);
    console.info("Sell day is- " + sell + " at price " + stocks[sell]);
};

main15 = function (args) {
    var first = [10, 10, 5, 7, 9, 11, 12, 8, 5, 3, 10];
    maxProfit(first);
}

getMedian = function (arr) {
    var size = arr.length;
    arr.sort(function cmp(a, b) { return (a - b); });
    return arr[Math.floor(size / 2)];
};

main16 = function (args) {
    var first = [10, 10, 5, 7, 9, 11, 12, 8, 5, 3, 10];
    console.info("median value is :: " + getMedian(first));
}

findMedian = function (arrFirst, arrSecond) {
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

main17 = function (args) {
    var first = [10, 10, 5, 7, 9, 11];
    var second = [12, 8, 5, 3, 10];
    first.sort(function cmp(a, b) { return (a - b); });
    second.sort(function cmp(a, b) { return (a - b); });
    console.info("median value is :: " + findMedian(first, second));
}

min = function (a, b) {
    return a > b ? b : a;
};

max = function (a, b) {
    return a < b ? b : a;
};

BinarySearch01 = function (arr) {
    var size = arr.length;
    if (size === 0) {
        return 0;
    }
    return BinarySearch01Util(arr, 0, size - 1);
};

BinarySearch01Util = function (arr, start, end) {
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

main18 = function (args) {
    var first = "00000000111"
    console.info("BinarySearch01 index is :: " + BinarySearch01(first));
}


BinarySearchRotateArray = function (arr, key) {
    var size = arr.length;
    return BinarySearchRotateArrayUtil(arr, 0, size - 1, key);
};

BinarySearchRotateArrayUtil = function (arr, start, end, key) {
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

main19 = function (args) {
    first = [7, 9, 10, 11, 3, 5, 7]
    console.info("BinarySearchRotateArray index is :: " + BinarySearchRotateArray(first, 8));
    console.info("BinarySearchRotateArray index is :: " + BinarySearchRotateArray(first, 7));
    console.info("BinarySearchRotateArray index is :: " + BinarySearchRotateArray(first, 6));
}

FirstRepeated = function (arr) {
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

main20 = function (args) {
    first = [7, 9, 3, 11, 3, 5, 7]
    console.info("FirstRepeated :: " + FirstRepeated(first));
}

transformArrayAB = function (str) {
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

main23 = function (args) {
    first = "aaaabbbb"
    console.info(transformArrayAB(first));
}


checkPermutation = function (array1, array2) {
    var size1 = array1.length;
    var size2 = array2.length;
    if (size1 !== size2) {
        return false;
    }
    Arrays.sort(array1);
    Arrays.sort(array2);
    for (var i = 0; i < size1; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
};

checkPermutation2 = function (array1, array2) {
    var i;
    var size1 = array1.length;
    var size2 = array2.length;
    if (size1 !== size2) {
        return false;
    }
    var hs = new HashTable();
    for (i = 0; i < size1; i++) {
        hs.insert(array1[i]);
    }
    for (i = 0; i < size2; i++) {
        if (al.find(array2[i]) === false) {
            return false;
        }
        al.remove(array2[i]);
    }
    return true;
};

removeDuplicates = function (array) {
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

main25 = function (args) {
    first = [1, 2, 3, 1, 2, 3, 5, 6, 7, 7, 8, 9, 3, 4, 5]
    console.info(removeDuplicates(first));
}

FindElementIn2DArray = function (arr, r, c, value) {
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

main = function (args) {
    var f = new Array(10);
    var count = 0;
    for (i = 0; i < 10; i++) {
        f[i] = new Array(10);
        for (j = 0; j < 10; j++) {
            f[i][j] = count++;
        }
    }

    console.info(FindElementIn2DArray(f, 10, 10, 21));
    console.info(FindElementIn2DArray(f, 10, 10, 121));
}


main(null);