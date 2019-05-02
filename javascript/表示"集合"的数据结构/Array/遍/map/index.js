const arr=[1,'a','%']
 let a=arr.map(function (item,index,arr) {
    console.log(item,index,arr)
    return 666
},window)

console.log(a)