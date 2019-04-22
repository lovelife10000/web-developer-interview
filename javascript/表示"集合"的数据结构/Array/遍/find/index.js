// const arr=[1,'a','%']
// var arr2=arr.reduce(function (base,item,index,arr) {
//     console.log(base,item,index,arr)
//     return base+item;//返回的base的值
//
// },2);//不会修改原数组,返回最后base的值
//  console.log(arr)
// debugger
//  console.log(arr2)
// debugger


function fn(a) {
    let b=[]
    let res=[]
    for(let i=0;i<a.length;i++){
        if(b.indexOf(a[i].id)===-1){
            b.push(a[i].id);
           let c= a.filter((item,index)=>{
                return item.id===a[i].id;
            });
           res.push(c[c.length-1]);
        }

    }

    return res
}

let dd=fn([{id:1,name:2},{id:2,name:3},{id:1,name:5}])
debugger
