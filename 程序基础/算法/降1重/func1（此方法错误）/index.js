

function reduceDimension(arr) {
    var reduced = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            reduced.push(arr[i][j]);
        }
    }
    return reduced;
}


const a=reduceDimension([1,2,[[1,3],4],5,[5,6,7]]);
debugger

