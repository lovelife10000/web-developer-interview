Function.prototype.myCall = function (context, ...arg) {
    context._n = this;
    const result = context.fn(...arg);
    delete context.fn;
    return result;
}





