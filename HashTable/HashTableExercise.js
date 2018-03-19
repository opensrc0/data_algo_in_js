isAnagram = function (str1, str2) {
    var size1 = str1.length;
    var size2 = str2.length;
    if (size1 !== size2)
        return false;

    var cm = new CountMap();
    for (var index = 0; index < str1.length; index++) {
        var ch = str1[index];
        cm.insert(ch);
    }
    for (var index = 0; index < str2.length; index++) {
        var ch = str2[index];
        cm.remove(ch);
    }
    return (cm.size() === 0);
};

removeDuplicate = function (str) {
    var str2 = ""
    var hs = new HashTable();
    for (var ind = 0; ind < str.length; ind++) {
        var ch = str[ind];
        if (hs.find(ch.charCodeAt(0)) === false) {
            str2 += ch;
            hs.insert(ch.charCodeAt(0));
        }
    }
    return str2;
};

findMissing = function (arr, start, end) {
    var hs = new HashTable();
    for (var index = 0; index < arr.length; index++) {
        var i = arr[index];
        hs.insert(i);
    }
    for (var curr = start; curr <= end; curr++) {
        if (hs.find(curr) === false)
            return curr;
    }
    return MAX_VALUE;
};

printRepeating = function (arr) {
    var hs = new HashTable();
    console.log("Repeating elements are:");
    for (var insert = 0; insert < arr.length; insert++) {
        var val = arr[insert];
        {
            if (hs.find(val))
                console.log(val);
            else
                hs.insert(val);
        }
    }
};

printFirstRepeating = function (arr) {
    var i;
    var size = arr.length;
    var hs = new CountMap();
    for (i = 0; i < size; i++) {
        hs.insert(arr[i]);
    }
    for (i = 0; i < size; i++) {
        hs.remove(arr[i]);
        if (hs.find(arr[i])) {
            console.log("First Repeating number is : " + arr[i]);
            return;
        }
    }
};



main = function (args) {
    var first = "hello";
    var second = "elloh";
    var third = "world";
    console.log("isAnagram : " + isAnagram(first, second));
    console.log("isAnagram : " + isAnagram(first, third));
    removeDuplicate(first);
    console.log(first);
    var arr = [1, 2, 3, 5, 6, 7, 8, 9, 10];
    console.log(findMissing(arr, 1, 10));
    var arr1 = [1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 1];
    printRepeating(arr1);
    printFirstRepeating(arr1);
};

main();