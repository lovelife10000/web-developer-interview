function theMost(str){
    return str.split('').sort().join('').match(/(\S)\1*/g).sort(function(a,b){
        return b.length - a.length
    })[0][0]
}