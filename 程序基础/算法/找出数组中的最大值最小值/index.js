//最小值
var min = function() {
    var min = this[0];
    var len = this.length;
    for (var i = 1; i < len; i++){
        if (this[i] < min){
            min = this[i];
        }
    }
    return min;
}
//最大值
var max = function() {
    var max = this[0];
    var len = this.length;
    for (var i = 1; i < len; i++){
        if (this[i] > max) {
            max = this[i];
        }
    }
    return max;
}



function maxAndMin(arr){
    return {
        max:Math.max.apply(null,arr.join(',').split(',')),
        min:Math.min.apply(null,arr.join(',').split(','))
    }
}