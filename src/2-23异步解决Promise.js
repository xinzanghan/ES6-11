// 状态管理
// let p = new Promise((res, rej) => {
//   setTimeout(() => {
//     console.log("imooc");
//     // res("成功");
//     rej("失败");
//   }, 1000);
// }).then(
//   (res) => {
//     console.log(res);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

// Promise执行时间验证
// 1 2 3
// let p = new Promise((res, rej) => {
//   console.log(1);
//   res();
// });
// console.log(2);
// p.then((res) => {
//   console.log(3);
// });

// Promise三种状态
// let p1 = new Promise((res, rej) => {
//   res(1);
// });
// let p2 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res(2);
//   }, 1000);
// });
// let p3 = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej(3);
//   }, 1000);
// });
// console.log(p1); //fulfilled
// console.log(p2); //pending   在定时器没执行之前是pending，1000ms执行完状态是fulfilled
// console.log(p3); //pending

// setTimeout(() => {
//   console.log(p2);
// }, 2000);
// setTimeout(() => {
//   console.log(p3);
// }, 2000);

// p1.then((res) => {
//   console.log(res);
// });
// p2.then((res) => {
//   console.log(res);
// });
// p3.catch((res) => {
//   console.log(res);
// });

//
//
//
//

// let p = new Promise((res, rej) => {
//   rej(2);

//   res(1);
// });
// // p.then(
// //   (res) => {
// //     console.log(res);
// //   },
// //   (err) => {
// //     console.log(err);
// //   }
// // );
// p.then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// });

function ajax(url, successCallback, failCallback) {
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
    //   xmlhttp.readyState === 4代表响应完成
    if (xmlhttp.readyState === 4 && xmlhttp.status == 200) {
      var obj = JSON.parse(xmlhttp.responseText);
      //   console.log(obj);
      successCallback(obj);
    } else if (xmlhttp.readyState === 4 && xmlhttp.status === 404) {
      failCallback && failCallback(xmlhttp.statusText);
    }
  };
}
// new Promise((resolve, reject) => {
//   ajax("static/a.json", (res) => {
//     console.log(res);
//     resolve();
//   });
// })
//   .then((res) => {
//     console.log("a成功");
//     //   写return 下方的.then才是对当前Promise对象的返回值进行的操作
//     return new Promise((resolve, reject) => {
//       ajax("static/b.json", (res) => {
//         console.log(res);
//         resolve();
//       });
//     });
//   })
//   .then((res) => {
//     console.log("b成功");
//     return new Promise((resolve, reject) => {
//       ajax("static/c.json", (res) => {
//         console.log(res);
//         resolve();
//       });
//     });
//   })
//   .then((res) => {
//     console.log("c成功");
//   });

//   以上代码重复的较多，可以封装成一个函数
function getPromise(url) {
  return new Promise((resolve, reject) => {
    ajax(
      url,
      (res) => {
        resolve(res);
      },
      (err) => {
        reject(err);
      }
    );
  });
}
// 只是成功的处理
// getPromise("static/aa.json")
//   .then((res) => {
//     console.log(res);
//     return getPromise("static/b.json");
//   })
//   .then((res) => {
//     console.log(res);
//     return getPromise("static/c.json");
//   })
//   .then((res) => {
//     console.log(res);
//   });

// 对错误的单独处理
// getPromise("static/aa.json")
//   .then(
//     (res) => {
//       console.log(res);
//       return getPromise("static/b.json");
//     },
//     (err) => {
//       console.log(err);
//       return getPromise("static/b.json");
//     }
//   )
//   .then((res) => {
//     console.log(res);
//     return getPromise("static/c.json");
//   })
//   .then((res) => {
//     console.log(res);
//   });

// 对错误的统一处理
getPromise("static/a.json")
  .then((res) => {
    console.log(res);
    return getPromise("static/bb.json");
  })
  .then((res) => {
    console.log(res);
    return getPromise("static/c.json");
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
