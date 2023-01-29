// Es8 async await 是Generator的语法糖
// function foo() {
//   return "imooc";
// }
// console.log(foo());

//

//

//async
// async function foo() {
//   return "imooc"; //Promise.resolve('imooc')
// }
// console.log(foo());

//

//

//await
// await后面应该跟一个异步操作才有意义
// async function foo() {
//   let result = await "imooc";
//   console.log(result);
// }
// foo();

// function timeout() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(1);
//       resolve();
//     }, 1000);
//   });
// }
// async function foo() {
//   timeout();
//   console.log(2); //先2 后1
// }
// // async function foo() {
// //   await timeout();
// //   console.log(2); //先1 等一等timeout()执行完再2
// // }
// foo();

//
// resolve可以传参
// function timeout() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       // console.log(1);
//       resolve(1);
//     }, 1000);
//   });
// }

// async function foo() {
//   const res = await timeout();
//   console.log(res);
//   console.log(2); //先1 等一等timeout()执行完再2
// }
// foo();

//

//

//异步操作失败的情况下，用async和await怎么处理
// function timeout() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       //   resolve("success");
//       reject("fail");
//     }, 1000);
//   });
// }
// async function foo() {
//   return await timeout();
// }
// foo()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//

//

//伪代码 实战经常用法
// async function request() {
//   const data = await axios.get("http://www.xx.com");
//   console.log(data);
// }

//导入ajax原理模块
import ajax from "./Ajax原理封装模块";
function request(url) {
  return new Promise((resolve) => {
    ajax(url, (res) => {
      resolve(res);
    });
  });
}
async function getData() {
  const res1 = await request("static/a.json");
  console.log(res1);
  const res2 = await request("static/b.json");
  console.log(res2);
  const res3 = await request("static/c.json");
  console.log(res3);
}
getData();
