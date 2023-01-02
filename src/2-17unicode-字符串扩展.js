//unicode 表示一些字符
/**
 * 字符串的Unicode表示法
 * 字符串遍历
 *
 */

/*
        unicode
            es6 \uxxxx  码点0000~ffff  es6中加上{}取值就被扩大了
            \u20BB7 -> \u20BB+7   ₻7   es6可以写成 \u{20BB7}
            \u{41} ->A

 */

// console.log("z" == "z"); //true
//如果  \HHH后面是三个八进制的数  就代表是一个字符
//console.log('\172'==='z');

//如果 \xHH x后面跟着两个16进制的数  也代表一个字符
//console.log('\x7A'==='z');

//
//
//模板字符串
// const a = 12;
// const b = 32;
// const c = "Es";
// const str = "我的年龄是：" + (a + b) + ",我在讲" + c;
// const str2 = `我的年龄是： ${a + b} ,我在讲 + c`;
// console.log(str);

//
//
//
//
//嵌套模板
// const isLargeScreen = () => {
//   return true;
// };

// let class1 = "icon";
// class1 += isLargeScreen() ? " icon-big" : "icon-small";
// console.log(class1);

// const class2 = `icon icon-${isLargeScreen() ? "big" : "small"}`;
// console.log(class2);

//
//
//
//
//带标签的模板字符串
const foo = (a, b, c, d) => {
  console.log(a); //['这是', ',他的年龄是', '岁']
  console.log(b); //wyh
  console.log(c); //18
  console.log(d); //undefined
};
// foo(1, 2, 3, 4);
const name = "wyh";
const age = 18;
foo`这是${name},他的年龄是${age}岁，`;
