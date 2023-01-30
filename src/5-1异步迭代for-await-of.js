//for await of和 Symbol.asyncIterator

// const arr = ["es6", "es7", "es8", "es9"];
// arr[Symbol.iterator] = function () {
//   let nextIndex = 0;
//   return {
//     next() {
//       return nextIndex < arr.length
//         ? {
//             value: arr[nextIndex++],
//             done: false,
//           }
//         : {
//             value: undefined,
//             done: true,
//           };
//     },
//   };
// };
// for (let item of arr) {
//   console.log(item);
// }

//

//

//由上面的同步操作引出下面的异步操作
function getPromise(time) {
  return new Promise((resolve, reject) => {
    setInterval(() => {
      //   resolve(time);
      // 写异步协议时，需做改动
      resolve({
        value: time,
        done: false,
      });
    }, time);
  });
}
const arr = [getPromise(1000), getPromise(2000), getPromise(3000)];
// for (let item of arr) {
//   console.log(item); //三个状态都是pending进行中状态，不是想要结果
// }
// 需要遵循异步迭代协议
// 一个迭代执行完，再去执行下一个迭代
arr[Symbol.asyncIterator] = function () {
  let nextIndex = 0;
  return {
    next() {
      return nextIndex < arr.length
        ? arr[nextIndex++]
        : Promise.resolve({
            value: undefined,
            done: true,
          });
    },
  };
};
// for of会瞬间执行完，不会等待异步执行完，
// for (let item of arr) {
//   console.log(item);
// }

//es9引入 for await of ，等当前的Promise对象变成resolved状态后，在进行下一步的操作

async function text() {
  for await (let item of arr) {
    console.log(item);
  }
}
text();
