(function () {
    let status;
    let resolveArgs;
    let rejectArgs;

    function MyPromise(fn) {

        function resolve(args) {
            resolveArgs = args
            status = 'resolved';
        }

        function reject(args) {
            rejectArgs = args
            status = 'rejected';
        }

        fn(resolve, reject);

    }

    MyPromise.prototype.then = function (fn1, fn2) {
        if (status = 'resolved') {
            fn1(resolveArgs)
        } else if (status = 'rejected') {
            fn2(rejectArgs);
        }
    }
})();

let p = new MyPromise(function (resolve, reject) {
    // resolve(666)
    reject(777)
})

p.then(function (result) {

}, function (error) {

});