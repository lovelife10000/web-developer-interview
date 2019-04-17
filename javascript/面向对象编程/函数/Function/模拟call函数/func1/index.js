Function.prototype.myCall = function (context, ...arg) {
    context.fn = this;
    const result = context.fn(...arg);
    delete context.fn;
    return result;
}





