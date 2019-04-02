function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {

        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {    //这个条件其实是找最大值，一步一步将最大值移动到数组尾
                var temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }

    }
    return arr;
}

console.time('timer');
// var arr = [1, 99, 55, 3, 23, 37, 12, 89, 78, 0, 100, '41', NaN, 'nima', 'a', 'c', 'b'];
var arr = [1, 99, 55, 3, 23, 37, 12, 89, 78, 0, 100, 81];
console.timeEnd('timer');
console.log(bubbleSort(arr));
