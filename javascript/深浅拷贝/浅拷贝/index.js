let a = {
    age: 1
}
let b = Object.assign({}, a)
a.age = 2
console.log(b.age) // 1



let a = {
    age: 1
}
let b = {...a}
a.age = 2
console.log(b.age) // 1