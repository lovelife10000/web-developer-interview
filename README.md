##Javascript
###ES6
- js的基本类型有哪些？引用类型有哪些？null和undefined的区别。

答：基本类型有String、Boolean、Number、null、undefined、Symbol

引用类型有Object（包括Array、Date、Regexp、Function、基本包装类型[String、Boolean、Number]、单体内置对象[Global、Math]）
```js
undefined == null// true  
undefined === null// false 
```
undefined未定义；null定义了，但为空
- 如何判断一个变量是Array类型？如何判断一个变量是Number类型？（都不止一种）

```js
Object.prototype.toString.call(str) === '[object Array]';//方法一
Array.isArray()//方法二
```
```js
typeof(num)==="number"//方法一
Object.prototype.toString.call(num) === '[object Number]';//方法二  
````
- 引用类型和基本类型有什么区别？哪个是存在堆哪一个是存在栈上面的？

答：基本类型是按值传递的，引用类型是按引用传递的。基本类型的值是存在堆上面的。引用类型的值是存在栈上面的（引用类型的值是一个指针，指向了存在堆上面的Object）
 
- js常见的dom操作api

答：
```js
document.getElementById()
document.createElement()
appendChild()
remove()
replaceChild()
cloneNode()
````
- 解释一下事件冒泡和事件捕获

答：事件冒泡和事件捕获是两大浏览器阵营提出的不同的事件流模型。事件捕获是指事件流程从文档模型最外层向最内层流动（直到事件触发的实际目标节点的上一层停止）；事件冒泡是指事件流从事件触发的实际目标节点向文档模型最外层流动。

- 事件委托（手写例子），事件冒泡和捕获，如何阻止冒泡？如何阻止默认事件？

答：例如
```html
<ul id="ul">
  <li id="li1"></li>
  <li id="li2"></li>
  <li id="li3"></li>
</ul>
```
```js
document.getElementById('ul').addEventListener('click',function(e) {
  switch (e.target.id){
    case 'li1':
      alert('li1');
    case 'li2':
      alert('li2');
    case 'li3':
      alert('li3');
  }
  
},false);

//阻止冒泡
e.stopPropagation();

//阻止默认事件
e.preventDefault();
````
- 对闭包的理解？什么时候构成闭包？闭包的实现方法？闭包的优缺点？

答：闭包就是声明在函数内部的函数，闭包的优点：可以有私有变量。缺点是引用变量无法销毁。
- this有哪些使用场景？跟C,Java中的this有什么区别？如何改变this的值？
- call，apply，bind有什么异同点？

答：三者都可以用来给函数绑定this对象，不同的是apply的第二个参数是以数组的形式传入的。bind()返回的是原函数。

- 显示原型和隐式原型，手绘原型链，原型链是什么？为什么要有原型链
答：
- 创建对象的多种方式

答：new关键字、字面量、工厂模式、构造函数模式、原型模式、构造原型模式、动态原型模式、寄生构造函数模式、稳妥构造函数模式。
- 实现继承的多种方式和优缺点

答：原型链、借用构造函数、组合继承、原型式继承、寄生式继承、寄生组合式继承。
- new 一个对象具体做了什么

答：复制了这个对象的构造函数上的属性，继承了这个对象原型上的属性。
- 手写Ajax，XMLHttpRequest
```js
const xmlhttp=new XMLHttpRequest();
xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            alert(xmlhttp.responseText);
        }
    }
xmlhttp.open("GET","/try/ajax/ajax_info.php",true);
xmlhttp.send();
````
- 变量提升

答：使用函数表达式声明函数，无法在声明函数之前调用函数。
- 举例说明一个匿名函数的典型用例

答：
```js
$("input").each(function(e){this.val('OK')});
````
- 指出JS的宿主对象和原生对象的区别，为什么扩展JS内置对象不是好的做法？有哪些内置对象和内置函数？

答：宿主对象是指js的运行环境（比如浏览器、node）提供的额外对象，这些对象不是由ECMA-262规定的。是基于运行环境定义的对象。
- attribute和property的区别

答：dom节点对象的默认属性叫property，自定义的属性绑定在attributes上。

- === 和 == , [] === [], undefined === undefined,[] == [], undefined == undefined

答：
```js
[] == [];//false
[] === [];//false
undefined == undefined;//true
undefined === undefined;//true
```
- typeof能够得到哪些值

答：string、number、boolean、undefined、null、symbol、object
- 什么是“use strict”,好处和坏处

答：1. 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;  
  2. 消除代码运行的一些不安全之处，保证代码运行的安全；  
  3. 提高编译器效率，增加运行速度；  
  4. 为未来新版本的Javascript做好铺垫。
- 函数的作用域是什么？js 的作用域有几种？

答：全局作用域、函数作用域、块级作用域。

- JS如何实现重载和多态
答：多态包括：接口、覆盖、重载。js支持覆盖。实现接口：父类里的函数执行后抛出错误，子类继承父类的时候执行父类的全部接口函数，如果抛出错误，则说明子类并未实现父类的全部接口。实现重载：以函数表达式的方式声明两个参数个数不同的函数，在声明一个函数，这个函数里判断arguments的长度来返回不同的函数。
- 常用的数组api，字符串api
- 原生事件绑定（跨浏览器），dom0和dom2的区别？

答：dom0级的事件会覆盖，dom2级的不会覆盖,dom0和dom2共存也不会覆盖。dom0没有捕获和冒泡。
- 给定一个元素获取它相对于视图窗口的坐标

答：dom.getBoundingClientRect()
- 如何实现图片滚动懒加载

答：将需要懒加载的img的src改成data-src，监听滚动事件，当img距视口顶部的距离小于视口高度的时候将data-src的值复制给src。
- js 的字符串类型有哪些方法？ 正则表达式的函数怎么使用？
- 深拷贝

答：
```js
var cloneObj = function(obj){
    var str, newobj = obj.constructor === Array ? [] : {};
    if(typeof obj !== 'object'){
        return;
    }
   
    str = JSON.stringify(obj), //系列化对象
    newobj = JSON.parse(str); //还原

    for(let i in obj){
        newobj[i] = typeof obj[i] === 'object' ? 
        cloneObj(obj[i]) : obj[i]; 
    }
 
    return newobj;
};
````
- 编写一个通用的事件监听函数
- web端cookie的设置和获取

答：XMLHttpRequest对象的函数setRequestHeader()、getAllResponseHeaders()、getResponseHeader()。
- setTimeout和promise的执行顺序

答：process.nextTick > promise.then > setTimeout > setImmediate
- JavaScript 的事件流模型都有什么？

答：捕获和冒泡
- navigator对象，location和history
- js的垃圾回收机制

答：标记清除、引用计数
- 内存泄漏的原因和场景

答：1.函数内声明全局变量2.闭包引起的内存泄漏3.dom节点删除时，绑定事件未清除4.dom节点删除时，其子节点的变量未设置为null
- DOM事件的绑定的几种方式

答：1.dom0级，通过内联属性，通过click()等;2.dom2通过事件监听函数addEventListener()
- DOM事件中target和currentTarget的区别

答：event.target返回触发事件的元素，event.currentTarget返回绑定事件的元素
- typeof 和 instanceof 区别，instanceof原理

答：instanceof运算符:此运算符可以判断一个变量是否是某个对象（类）的实例，返回值是布尔类型的。typeof运算符:此运算符可以返回一个字符串，用语说明元算数的类型，它的返回值有如下可能:代码如下:number,boolean,string,function,object,undefined
- js动画和css3动画比较
- JavaScript 倒计时（setTimeout）

答：
```js
function TimeDown(id, endDateStr) {
  //结束时间
  var endDate = new Date(endDateStr);
  //当前时间
  var nowDate = new Date();
  //相差的总秒数
  var totalSeconds = parseInt((endDate - nowDate) / 1000);
  //天数
  var days = Math.floor(totalSeconds / (60 * 60 * 24));
  //取模（余数）
  var modulo = totalSeconds % (60 * 60 * 24);
  //小时数
  var hours = Math.floor(modulo / (60 * 60));
  modulo = modulo % (60 * 60);
  //分钟
  var minutes = Math.floor(modulo / 60);
  //秒
  var seconds = modulo % 60;
  //输出到页面
  document.getElementById(id).innerHTML = "还剩:" + days + "天" + hours + "小时" + minutes + "分钟" + seconds + "秒";
  //延迟一秒执行自己
  setTimeout(function () {
    TimeDown(id, endDateStr);
  }, 1000)
}

```
- js处理异常
- js的设计模式知道那些

答：单体模式：
  工厂模式
  单例模式
  观察者模式（发布订阅模式）
  策略模式
  模板模式
  代理模式
  外观模式
- 轮播图的实现，以及轮播图组件开发，轮播10000张图片过程
- websocket的工作原理和机制。
- 手指点击可以触控的屏幕时，是什么事件？
- 什么是函数柯里化？以及说一下JS的API有哪些应用到了函数柯里化的实现？(函数柯里化一些了解，以及在函数式编程的应用，最后说了一下JS中bind函数和数组的reduce方法用到了函数柯里化。)
- JS代码调试
- 谈一谈 promise
- 所有的 ES6 特性你都知道吗？如果遇到一个东西不知道是 ES6 还是 ES5, 你该怎么区分它
- es6的继承和es5的继承有什么区别
- promise封装ajax
- let const的优点
- es6 generator 是什么，async/await 实现原理
- ES6和node的commonjs模块化规范区别
- 箭头函数，以及它的this
- 原型链；
- 闭包；
- 类和继承（es5实现方法 + es6实现方法）；
- let、const、var；
- promise；
- 异步处理方法；
- 写一个方法遍历所有文档树所有节点(考察递归)；
- cookie和webstorege；
- jsonp和跨域；
- sort排序相关(注意ascll这个坑)
- 数组和对象的深浅拷贝；
- String + Array的一些基本操作；
- 写一个数组去重的方法；
- 冒泡和捕获；
- 事件代理；
- this相关(注意箭头函数的this指向问题)；
- call、apply、bind；
- 变量提升；
- 高阶函数；
- 动画；
- setTimeout、setInterval和requestAnimationFrame；
- 模块化开发；
- 引起内存泄漏的原因；
- ajax；
- map、filter、reduce相关；
- Map和Set；
- 移动端开发相关；


####浏览器端
####Nodejs
- 对nodejs有没有了解
- Express 和 koa 有什么关系，有什么区别？
- nodejs适合做什么样的业务？
- nodejs与php，java有什么区别
- Nodejs中的Stream和Buffer有什么区别？
- node的异步问题是如何解决的？
- node是如何实现高并发的？
- 说一下 Nodejs 的 event loop 的原理
####模块化
- 对AMD,CMD,CommonJS有没有了解?
- 为什么要模块化？不用的时候和用RequireJs的时候代码大概怎么写？
- 说说有哪些模块化的库，有了解过模块化的发展的历史吗？
- 分别说说同步和异步模块化的应用场景，说下AMD异步模块化实现的原理？
- 如何将项目里面的所有的require的模块语法换成import的ES6的语法？
- 使用模块化加载时，模块加载的顺序是怎样的，如果不知道，根据已有的知识，你觉得顺序应该是怎么样的？





##html5
- HTML5新特性，语义化
- 浏览器的标准模式和怪异模式
- xhtml和html的区别
- 使用data-的好处
- meta标签
- canvas
- HTML废弃的标签
- IE6 bug，和一些定位写法
- css js放置位置和原因
- 什么是渐进式渲染
- html模板语言
- meta viewport原理


##css3

- 盒模型，box-sizing
- CSS3新特性，伪类，伪元素，锚伪类
- CSS实现隐藏页面的方式
- 如何实现水平居中和垂直居中、以及水平垂直同时居中。
- 说说position，display
- 解释*{box-sizing:border-box;}的作用，并说明使用它的好处
- 浮动元素引起的问题和解决办法？绝对定位和相对定位，元素浮动后的display值
- link和@import引入css的区别
- 解释一下css3的flexbox，以及适用场景
- inline和inline-block的区别
- 哪些是块级元素那些是行级元素，各有什么特点
- grid布局
- table布局的作用
- css dpi
- 你知道attribute和property的区别么
- css布局：2列、3列布局如何实现（多种方法）？中间自适应两边固定如何实现？
- 流式布局如何实现，响应式布局如何实现
- 移动端布局方案
- 实现三栏布局（圣杯布局，双飞翼布局，flex布局）
- 清除浮动的原理
- overflow:hidden有什么缺点？
- padding百分比是相对于父级宽度还是自身的宽度
- css3动画，transition和animation的区别，animation的属性，加速度，重力的模拟实现
- CSS 3 如何实现旋转图片（transform: rotate）
- sass less
- 对移动端开发了解多少？（响应式设计、Zepto；@media、viewport、JavaScript 正则表达式判断平台。）
- 什么是bfc，如何创建bfc？解决什么问题？
- CSS中的长度单位（px,pt,rem,em,ex,vw,vh,vh,vmin,vmax）
- CSS 选择器的优先级是怎样的？
- 雪碧图
- svg
- 媒体查询的原理是什么？
- CSS 的加载是异步的吗？表现在什么地方？
- 常遇到的浏览器兼容性问题有哪些？常用的hack的技巧
- 外边距合并
- 解释一下“::before”和“:after”中的双冒号和单冒号的区别
- Animation
- 伪元素伪类；
- less、sass、stylus这种预处理器；


##框架
- 使用过哪些框架？
- zepto 和 jquery 是什么关系，有什么联系么？
- jquery源码如何实现选择器的，为什么$取得的对象要设计成数组的形式，这样设计的目的是什么
- jquery如何绑定事件，有几种类型和区别
- Vue和Angular的双向数据绑定原理
- Vue，Angular组件间通信以及路由原理
- react和vue的生命周期
- react和vue的虚拟dom以及diff算法
- 解答：https://www.zhihu.com/question/29504639?sort=created
- vue的observer，watcher，compile
- react和angular分别用在什么样的业务吗？性能方面和MVC层面上的区别
- jQuery对象和JS的Element有什么区别
- jQuery对象是怎么实现的
- jQuery除了它封装了一些方法外，还有什么值得我们去学习和使用的？
- jQuery的$(‘xxx’)做了什么事情
- 介绍一下bootstrap的栅格系统是如何实现的
- 对webpack,gulp，grunt等有没有了解?对比。
- webpack的入口文件怎么配置，多个入口怎么分割。
- webpack的loader和plugins的区别
- gulp的具体使用。
- 前端工程化的理解、如何自己实现一个文件打包，比如一个JS文件里同时又ES5 和ES6写的代码，如何编译兼容他们


##计算机网络
- HTTP协议头含有哪些重要的部分，HTTP状态码
- 网络url输入到输出怎么做？
- 性能优化为什么要减少 HTTP 访问次数？
- Http请求的过程与原理
- https（对是https）有几次握手和挥手？https的原理。
- http有几次挥手和握手？TLS的中文名？TLS在哪一网络层？
- TCP连接的特点，TCP连接如何保证安全可靠的？
- 为什么TCP连接需要三次握手，两次不可以吗，为什么
- 为什么tcp要三次握手四次挥手？
- tcp的三次握手和四次挥手画图（当场画写ack 和 seq的值）？
- tcp与udp的区别
- get和post的区别？什么情况下用到？
- http2 与http1 的区别？
- websocket
- 什么是tcp流，什么是http流
- babel是如何将es6代码编译成es5的
- http2的持久连接和管线化
- 域名解析时是tcp还是udp
- 域名发散和域名收敛
- Post一个file的时候file放在哪的？
- HTTP Response的Header里面都有些啥？


##浏览器相关
- document load和document DOMContentLoaded两个事件的区别
- 跨域，为什么JS会对跨域做出限制
- 前端安全：xss，csrf...
- 浏览器怎么加载页面的？script脚本阻塞有什么解决方法？defer和async的区别？
- 浏览器强缓存和协商缓存
- 浏览器的全局变量有哪些
- 浏览器同一时间能够从一个域名下载多少资源
- 按需加载，不同页面的元素判断标准
- web存储、cookies、localstroge等的使用和区别
- 浏览器的内核
- 如何实现缓存机制？（从200缓存，到cache到etag再到）
- 说一下200和304的理解和区别
- 什么是预加载、懒加载
- 一个 XMLHttpRequest 实例有多少种状态？
- dns解析原理，输入网址后如何查找服务器
- 服务器如何知道你？
- 浏览器渲染过程
- ie的某些兼容性问题
- session
- 拖拽实现
- 拆解url的各部分

##Web安全与优化
- cdn的用法是什么？什么时候用到？
- 浏览器的页面优化？
- 如何优化 DOM 操作的性能
- 单页面应用有什么SEO方案？
- 单页面应用首屏显示比较慢，原因是什么？有什么解决方案？
##运维相关
##其他语言
####数据结构
- 基本数据结构：（数组、队列、链表、堆、二叉树、哈希表等等）
- 8种排序算法，原理，以及适用场景和复杂度
- 说出越多越好的费波拉切数列的实现方法？
##其他
- 正则表达式
- 前端渲染和后端渲染的优缺点
- 数据库的四大特性，什么是原子性，表的关系
- 你觉得前端体系应该是怎样的？
- 一个静态资源要上线，里面有各种资源依赖，你如何平稳上线
- 如果要你去实现一个前端模板引擎，你会怎么做
- 知道流媒体查询吗？
- SEO
- mysql 和 mongoDB 有什么区别？
- restful的method解释
- 数据库知识、操作系统知识
- click在ios上有300ms延迟，原因及如何解决
- 移动端的适配，rem+媒体查询/meta头设置
- 移动端的手势和事件；
- unicode，utf8，gbk编码的了解，乱码的解决
1.三面、四面常问的开放性问题
- 你都看过什么书？最近在看什么书？
- 用过什么框架？有没有看过什么框架的代码？
- 有没有学过设计模式？
- 说一说观察者模式吧！能不能写出来？
- 你最大的优点是什么？那你最大的缺点呢？
- 你大学期间做过最疯狂的事情是什么？
- 你除了写博客还有什么输出？
- 现在你的领导给你了一份工作，要求你一个星期完成，但你看了需求以后估计需要3周才能完成，你该怎么办？
- 平时关注的前端技术
- 如何规划自己的职业生涯
- 项目过程中，有遇到什么问题吗？怎么解决的？
- 最近在研究哪方面的东西？
- 请介绍一项你最热爱、最擅长的专业领域，并且介绍的学习规划。
- 请介绍你参与的印象最深刻的一个项目，为什么？并且介绍你在项目中的角色和发挥的作用。
- 如何学前端的？
- 你认为的前端都要做什么样的工作？
- 你理解的前端工程师是什么？
- 你认为前端工程师对于用户和公司有哪些作用？
- 你最近遇到过什么技术挑战？你是如何解决的？
- 项目中遇到的问题是如何解决的？
- 平时都是怎么学习的？
- 实习了多久，在哪实习，实习的工作是什么？
- 实习过程中能不能完成公司给你的工作？工作量如何？

2.HR面
- 你为什么要学习前端？
- 你平时的是怎么学习前端的？有什么输出？
- 你觉得自己最好的项目是什么？
- 身边比较佩服的人有什么值得你学习的？你为什么没有跟他们一样？
- 同事的什么问题会让你接受不了
- 压力最大的事情是什么？
- 和同学做过的最好的项目？
- 身边的朋友通常对你的评价是什么
- 喜欢什么样的工作氛围
- 如何看待加班
- 有没有对象
- 意向城市
- 其他的offer
- 为什么要录取你？
- 大学里花费时间最多的三件事情
- 周末都会干什么？
- 未来职业规划
3.建议
- 面试的时候不要表现出自己想创业。敲黑板。
- 从来没有看过源码的话，建议从jQuery，zepto这之类的源码入手，后期可以了解Vue，React常见的功能的源码思路和实现。
- 项目经验描述的时候不用太太太详细，拣重点的讲。（因为我就一直说一直说，最后面试官评价插不上话评价减分。）
