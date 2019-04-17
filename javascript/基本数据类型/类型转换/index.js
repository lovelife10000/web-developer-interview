let a={
    // valueOf:function () {
    //     debugger
    //     return 'abc'
    // },
    toString:function () {
        debugger
        return 'abc'
    }
}

let b=[1,2,3];
b.valueOf=function(){
    debugger
    return 'abc'
}
console.dir(a)
if(b=='abc'){
    debugger
}