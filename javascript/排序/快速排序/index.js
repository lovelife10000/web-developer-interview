function quick(arr){
    if (arr.length<=1){
        return arr;
    }

    let leftArr=[];
    let rightArr=[];
    let q=arr[0];
    for(let i=1; i<arr.length;i++){
        if (arr[i]>q){
            rightArr.push(arr[i]);
        } else{
            leftArr.push(arr[i]);
        }
    }
    return [].concat(quick(leftArr),[q],quick(rightArr));

}