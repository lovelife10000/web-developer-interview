//https://www.jianshu.com/p/3b69fb0d4c2f

Function.prototype.myCall = function(obj,...arg){
    obj._fn_ = this;
    debugger
    obj._fn_(...arg);
    debugger
    delete obj._fn_;
}
//测试
let test = {
    name:'test'
}
let o = {
    name:'o',
    fn:function(){
        console.log(this.name, ...arguments);  //这里把参数显示一下
    }
}
o.fn(1,2,3) // "o" 1 2 3
o.fn.call(test,1,2,3) // "test" 1 2 3
o.fn.myCall(test,1,2,3) // "test" 1 2 3



