// Iterator: 不支持遍历的数据结构“可遍历”
// let courses = {
//   allCourse: {
//     frontend: ["ES", "小程序", "Vue", "React"],
//     backend: ["Java", "Python", "SpringBoot"],
//     webapp: ["Android", "IOS"],
//   },
// };
// for (let c of courses) {
//   console.log(c); //报错 Invalid attempt to iterate non-iterable instance.
//   //   In order to be iterable, non-array objects must have a [Symbol.iterator]() method.
// }
// let arr = ["a", "b", "c"];
// console.log(arr); //打印数组，只要有Symbol.iterator 说明其可遍历
// let it = arr[Symbol.iterator](); //固定写法,数组自带这个方法
// console.log(it.next());

// Map 遍历
// let map = new Map();
// map.set("name", "es");
// map.set("age", "5");
// map.set("school", "imooc");
// // console.log(map);
// let it = map[Symbol.iterator](); //固定写法
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

//
//
//
//
//
//
//原生具备Iterator接口的数据结构
// Array;
// Map;
// Set;
// String;
// TypedArray; //对于底层二进制数据进行描述，类似于数组的结构，用的较少
// 函数的arguments对象;
// NodeList对象;

// 了解两个协议
// 可迭代协议：当前对象上是否有Symbol.iterator这个属性，若有可用for...of...进行迭代
// 迭代器协议：具有以下结构
// return {
//   next() {
//     return {
//       value: xxx,
//       done: yyy,
//     };
//   },
// };

let courses = {
  allCourse: {
    frontend: ["ES", "小程序", "Vue", "React"],
    backend: ["Java", "Python", "SpringBoot"],
    webapp: ["Android", "IOS"],
  },
};
// 变成可遍历结构
// courses[Symbol.iterator] = function () {
//   // 先把里面的对象取出来
//   let allCourse = this.allCourse;
//   let keys = Reflect.ownKeys(allCourse);
//   // 符合第二个协议
//   // 创建一个空数组，用来盛放Es---Ios的值
//   let values = [];
//   return {
//     next() {
//       if (!values.length) {
//         if (keys.length) {
//           values = allCourse[keys[0]];
//           keys.shift();
//         }
//       }
//       return {
//         done: !values.length,
//         value: values.shift(),
//       };
//     },
//   };
// };
// for (let c of courses) {
//   console.log(c);
// }

// generator 自身有next()函数
courses[Symbol.iterator] = function* () {
  let allCourse = this.allCourse;
  let keys = Reflect.ownKeys(allCourse);
  let values = [];
  while (1) {
    if (!values.length) {
      if (keys.length) {
        values = allCourse[keys[0]];
        keys.shift();
        yield values.shift();
      } else {
        return false;
      }
    } else {
      yield values.shift();
    }
  }
};
for (let c of courses) {
  console.log(c);
}
