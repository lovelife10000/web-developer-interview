function selectionSort(arr) {
    var len = arr.length;
    var minIndex, temp;
    for (var i = 0; i < len - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {     // 寻找最小的数
                minIndex = j;                 // 将最小数的索引保存
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

    console.time('timer');
// var arr = [1, 99, 55, 3, 23, 37, 12, 89, 78, 0, 100, '41', NaN, 'nima', 'a', 'c', 'b'];
var arr = [1, 99, 55, 3, 23, 37, 12, 89, 78, 0, 100, 81];
console.timeEnd('timer');
console.log(selectionSort(arr));
