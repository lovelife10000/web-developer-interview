function reduceDimension(arr) {
    return Array.prototype.concat.apply([], arr);
}

const a=reduceDimension([1,2,[[1,3],4],5,[5,6,7]]);
debugger

