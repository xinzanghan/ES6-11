// function foo(){
//     for(let i=0;i<3;i++){
//         console.log(i);
//     }
// }
// foo()

// Generator函数/生成器函数
// 不能作为构造函数去使用
// Generator 写法：有*，一般紧挨着function写
// yield关键字 生产产出  只能在Generator函数使用
// function* foo() {
//   for (let i = 0; i < 3; i++) {
//     // console.log(i);//未执行，Generator需要手动执行
//     yield i;
//   }
// }
// console.log(foo());
// 手动调用函数，xxx.next()
// let f = foo();
// console.log(f.next()); //{value: 0, done: false} 当前值，是否执行完成
// console.log(f.next());
// console.log(f.next());
// console.log(f.next());

//yield 只能在Generator函数使用   以下写法报错
// function* gen(args){
// args.forEach(item=>{
//     yield item+1
// })
// }

// next(), 可以传递参数, 参数为上一条yield语句的返回值;
// function* gen(x) {
//   let y = 2 * (yield x + 1);
//   let z = yield y / 3;
//   return x + y + z;
// }
// // let g = gen(5);
// // console.log(g.next()); // 6
// // console.log(g.next()); // NaN
// // console.log(g.next()); //NaN

// let g = gen(5);
// console.log(g.next()); // x+1=6
// console.log(g.next(12)); // yield (x + 1)=12  y=24 执行下一句 y / 3 = 8
// console.log(g.next(13)); //yield y / 3 =13   z=13  return 5+24+13 = 42

// 举例 打印7的倍数
// function* count(x = 1) {
//   while (true) {
//     if (x % 7 === 0) {
//       yield x;
//     }
//     x++;
//   }
// }
// let n = count();
// console.log(n.next().value); //7
// console.log(n.next().value); //14
// console.log(n.next().value); //21

//
//
//
//
// Generator如何对异步的状态进行管理
// 复制2-22的ajax请求的复用函数
// 在gen()里调用request(),request()里调用ajax()
// 希望在请求第一个结束后，打印出请求的结果，再继续请求下一个
function ajax(url, callback) {
  // 1.创建 XMLHttpRequest 对象
  var xmlhttp;
  if (window.XMLHttpRequest) {
    // window下有这个对象，说明版本是ie7或之后的版本
    xmlhttp = new XMLHttpRequest();
  } else {
    // 兼容早期浏览器
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }

  //2.发送请求
  xmlhttp.open("GET", url, true);
  xmlhttp.send();

  //3.服务端响应
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState === 4 && xmlhttp.status == 200) {
      var obj = JSON.parse(xmlhttp.responseText);
      //   console.log(obj);
      callback(obj);
    }
  };
}
// function request(url) {
//   ajax(url, (res) => {});
// }
// function* gen() {
//   request("static/a.json");
// }
function request(url) {
  ajax(url, (res) => {
    getData.next(res);
  });
}
function* gen() {
  let res1 = yield request("static/a.json");
  console.log(res1);
  let res2 = yield request("static/b.json");
  console.log(res2);
  let res3 = yield request("static/c.json");
  console.log(res3);
}

let getData = gen();
getData.next();
