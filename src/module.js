// 正常导出
// export const a = 5;
// export const b = "imooc";
// export const sum = (x, y) => x + y;

// const obj = {
//   name: "es",
// };
// export { obj };

//
//
// 正常定义，统一导出
// const a = 5;
// const b = "imooc";
// const sum = (x, y) => x + y;
// const obj = {
//   name: "es",
// };
// export { a, b, sum, obj };

//

//

//
//定义类
// const a = 5;
// const b = "imooc";
// const sum = (x, y) => x + y;
// const obj = {
//   name: "es",
// };

// class People {
//   constructor(name) {
//     this.name = name;
//   }
//   showName() {
//     console.log(this.name);
//   }
// }
// export { a, b, sum, obj, People };

//

//

//
// 另一种导出方式
// const a = 5;
// export default a;
// const b='imooc'
// export default b// 错误  Only one default export allowed per module.

// export default const a=5 // 错误语法，必须先定义，再默认导出

//

//

//两个导入共同使用时
// function sum(x, y) {
//   return x + y;
// }
// export default sum;

// // 既有export default，也有export
// export const str = "两个导入共同使用时";

//

//

//把定义的一堆东西，通过export default导出
const a = 5;
const b = "imooc";
const sum = (x, y) => x + y;
const obj = {
  name: "es",
};

class People {
  constructor(name) {
    this.name = name;
  }
  showName() {
    console.log(this.name);
  }
}
export default {
  a,
  b,
  sum,
  obj,
  People,
};
