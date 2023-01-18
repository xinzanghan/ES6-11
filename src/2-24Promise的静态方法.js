// Promise.resolve，Promise.reject基本用法
// 如果并没有new Promise实例，但还想调用.then  .catch方法，就可以用Promise.resolve，Promise.reject把操作封装起来，这样就能返回一个Promise对象

// let p1 = Promise.resolve("success");
// console.log(p1); //Promise {<fulfilled>: 'success'}
// p1.then((res) => {
//   console.log(res); //success
// });

// let p2 = Promise.reject("fail");
// console.log(p2); //Promise {<rejected>: 'fail'}
// p2.catch((err) => {
//   console.log(err); //fail
// });

//
//
//
//实际应用场景
// function foo(flag) {
//   if (flag) {
//     return new Promise((resolve) => {
//       resolve("success");
//     });
//   } else {
//     // 'fail'字符串下面并没有.then方法所以下方会报错
//     //   这时可以返回一个Promise的静态方法，将‘fail’字符串包装一下
//     // return "fail";//报错
//     return Promise.resolve("fail"); //35行返回 fail
//   }
// }
// // foo(true).then((res) => {
// //   console.log(res); //success
// // });
// foo(false).then(
//   (res) => {
//     console.log(res); //   foo(...).then is not a function
//   },
//   (err) => {
//     console.log(err);
//   }
// );

//
//
//
//
// Promise.all()
// 需求：三个异步操作完成后进行下一步操作
// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log(1);
//     // resolve();
//     resolve("1成功");
//   }, 2000);
// });
// let p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log(2);
//     // resolve();
//     // resolve("2成功");
//     reject("2失败");
//   }, 1000);
// });
// let p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log(3);
//     // resolve();
//     resolve("3成功");
//   }, 3000);
// });
// // Promise.all([p1, p2, p3]).then(
// //   (res) => {
// //     //console.log(res); //[undefined, undefined, undefined] 返回值是由每个Promise对象resolve的参数组成的数组
// //     console.log(res); //所有都完成，才输出 ['1成功', '2成功', '3成功']
// //   },
// //   (err) => {
// //     console.log(err); //只要有一个失败，就会进入err错误
// //   }
// // );

// //
// //
// //
// // Promise.race()
// Promise.race([p1, p2, p3]).then(
//   (res) => {
//     console.log(res); //只要有一个完成，就输出
//   },
//   (err) => {
//     console.log(err); //只要有一个失败，就会进入err错误
//   }
// );

//
//
//
//Promise.all()实际应用场景
// 图片全部上传成功后，给用户提示信息
// 构造一个空数组，盛放每个Promise对象
// const imgArr = ["1.jpg", "2.jpg", "3.jpg"];
// let promiseArr = [];
// imgArr.forEach((item) => {
//   promiseArr.push(
//     new Promise((resolve, reject) => {
//       // 图片上传操作
//       resolve();
//     })
//   );
// });
// Promise.all(promiseArr).then((res) => {
//   console.log("图片全部上传完成");
// });

//
//
//
//
//
// Promise.race()实际应用场景
//需求 ：图片超时未加载，提示图片超时
function getImg() {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = function () {
      resolve(img);
    };
    // img.src = "http://www.xxx.com/xx.img";
    img.src = "https://www.imooc.com/static/img/index/logo.png";
  });
}
function timeout() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("图片加载超时");
    }, 2000);
  });
}
Promise.race([getImg(), timeout()])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
