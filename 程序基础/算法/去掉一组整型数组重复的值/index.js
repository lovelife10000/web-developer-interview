let unique = function (arr) {
    let data = [];
    for (let i = 0; i < arr.length; i++) {
        if (data.indexOf(arr[i])===-1) {
            data.push(arr[i]);
        }
    }
    return data

}


console.log(unique([1, 13, 24, 11, 11, 14, 1, 2]));