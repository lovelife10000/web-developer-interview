Function.prototype.myCall = function (context) {
    context.fn = this
    var args = [...arguments].slice(1)
    var result = context.fn(...args)
    delete context.fn
    return result
}



