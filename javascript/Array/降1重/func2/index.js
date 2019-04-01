
function reduceDimension(arr) {
    var reduced = [];
    for (var i = 0; i < arr.length; i++) {
        reduced = reduced.concat(arr[i]);
    }
    return reduced;
}


const a=reduceDimension([1,2,[[1,3],4],5,[5,6,7]]);
debugger

