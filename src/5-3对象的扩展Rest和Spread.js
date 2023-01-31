// 数组扩展运算
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [...arr1, ...arr2];
// console.log(arr3); //[1, 2, 3, 4, 5, 6]

//对象
// const obj1 = {
//   name: "wangyihan",
//   age: 23,
// };
// const obj2 = {
//   school: "imooc",
//   age: 18,
// };

//克隆对象
// const obj3 = { ...obj1 }; //...克隆一个新对象，不是引用，就是拷贝
// obj1.age = 25;
// console.log(obj3);

// 合并对象
// const obj4 = { ...obj1, ...obj2 };
// console.log(obj4);//age 18

//

//

//...剩余运算,只能放在最后一位
const obj1 = {
  name: "wangyihan",
  age: 23,
  school: "imooc",
  course: "es",
};
const { name, age, ...rest } = obj1;
console.log(name);
console.log(age);
console.log(rest);
