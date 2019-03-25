function mao(arr){
    for (let i=0,i<arr.length-1,i++){

        for(let j=0;j<arra.length-i-1; j++){
            if (arr[i]>arr[j]){
                let tem =arr[i];
                arr[i]=arr[j];
                arr[j] =tem;
            }
        }
    }
    return arr;
}