var PENDING = 0,
    RESOLVED = 1,
    REJECTED = 2;

function Promise2(fn) {
    var state = PENDING;
    var value;
    var callback;

    var doResolve = function (_value) {
        if (state === PENDING) {
            value = _value;
            state = RESOLVED;
            if (callback)
                callback(value);
        } else {
            throw new Error("A promise can only been resolved once.");
        }
    }
    var doReject = function (_reason) {
        state = REJECTED;
        throw _reason;
    }

    this.then = function (_callback) {
        return new Promise2(function (_resolve, _reject) {
            var dummy_callback = function (_value) {
                _resolve(_callback(_value));
            }
            if (state === PENDING) {
                callback = dummy_callback
            } else {
                dummy_callback(value);
            }
        });
    }

    fn(doResolve, doReject);
}


let p=new Promise2(function (resolve,reject) {
    resolve(111)
})

p.then(function (result) {
    debugger
});