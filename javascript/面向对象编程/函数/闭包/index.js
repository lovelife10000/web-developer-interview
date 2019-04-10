/*
* 闭包所能获取的父函数的变量对象的属性来自于生成闭包对象的时候所执行的那次父函数当时的变量对象
* */
function fun(n,o){
    console.log(o);
    return {
        fun:function(m){//[2]
            return fun(m,n);//[1]
        }
    }
}

var a=fun(0);
debugger
a.fun(1);
debugger
a.fun(2);
debugger
a.fun(3);
debugger
var b=fun(0).fun(1).fun(2).fun(3);
debugger
var c=fun(0).fun(1);
debugger
c.fun(2);
debugger
c.fun(3);
debugger





/*
* 闭包函数未引用任何父函数作用域中的变量，这些变量依然可以访问
* */
// function fun(n,o){
//     console.log(n,o);
//     return {
//         fun:function(){
//            console.log(1)
//         }
//     }
// }
//
// var a=fun(1,2);
// debugger
// a.fun();
// debugger