function splitStr(str, n) {
    let result = '';
    for(let i=0; i<str.length; i++){
        if(i%n==0){
            result += str.substring(i,i+n)+','
        }
    }
    return result.substring(0,result.length-1)    //去掉最后一个逗号
}

console.log(splitStr('4168468468485',3))