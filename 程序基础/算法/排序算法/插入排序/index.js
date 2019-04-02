function insertionSort(arr) {
    console.time('timer');
    var len = arr.length;
    var preIndex, current;
    for (var i = 1; i < len; i++) {
        preIndex = i - 1;
        current = arr[i];
        while (preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex + 1] = current;
    }
    console.timeEnd('timer');
    return arr;
}

// var arr = [1, 99, 55, 3, 23, 37, 12, 89, 78, 0, 100, '41', NaN, 'nima', 'a', 'c', 'b'];
var arr = [1, 99, 55, 3, 23, 37, 12, 89, 78, 0, 100, 81];
console.log(insertionSort(arr));