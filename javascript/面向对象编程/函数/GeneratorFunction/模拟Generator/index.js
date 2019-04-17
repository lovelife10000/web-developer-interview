// // cb 也就是编译过的 test 函数
// function generator(cb) {
//     return (function() {
//         var object = {
//             next: 0,
//             stop: function() {}
//         };
//
//         return {
//             next: function() {
//                 var ret = cb(object);
//                 if (ret === undefined) return { value: undefined, done: true };
//                 return {
//                     value: ret,
//                     done: false
//                 };
//             }
//         };
//     })();
// }


function Generator(fn, yieldNum) {
    let generator = function () {

    }
    let nextTag = 0;
    generator.next = function () {
        if (nextTag < yieldNum) {
            nextTag++
            return {
                value: 1,
                done: false
            }
        } else {
            nextTag = 0;
            return {
                value: 2,
                done: true
            }
        }


    }

    return generator
}

let a = new Generator(function* () {
    yield 1;
    yield 2;
}, 2);

console.log(a.next());
console.log(a.next());
console.log(a.next());
debugger