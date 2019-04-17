Function.prototype.myCall = function (context) {
    context.fn = this
    // debugger

    // console.log(typeof arguments);
    // console.log(...arguments);
    // console.log([...arguments]);
    var args = [...arguments].slice(1)
    // debugger
    var result = context.fn(...args)
    delete context.fn
    return result
}

var obj={}
function a() {
    debugger
}
a.myCall(obj,1,2)


