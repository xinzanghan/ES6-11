//十进制——>二进制
// const a = 5;
// console.log(a.toString(2)); //101

// //二进制——>十进制
// const b = 101;
// console.log(parseInt(58.43)); //第一种 取整数 58
// console.log(parseInt(b, 2)); //把b当做一个二进制数去转换  5

//ES6 0B/0b 二进制   0O/0o 八进制
// const a = 0b0101;
// console.log(a); //5

// const b = 0o777;
// console.log(b);// 511

//
//
//
//在es6当中，把window下的方法逐渐的模块化,减少全局对象下方法的数量
// console.log(Number.parseInt(5.5));
// console.log(Number.parseFloat(5.5));
// console.log(window.parseInt(5.5));
// console.log(window.parseFloat(5.5));

//
//
//
// 0.1+0.2===0.3??
// 35——> 00100011
// 0.375——> 0.011
// 0.1——>0.000110011....
// console.log(0.1000000000000001);
// console.log(0.10000000000000001 === 0.1); //true
// // 当0.1被转化为二进制数存储在计算机当中时，存在一个精度缺失

// 整数最大值 2的53次方
// const max = Math.pow(2, 53);
// console.log(max); //9007199254740992
// // console.log(max + 1);//9007199254740992
// console.log(Number.MAX_SAFE_INTEGER === max - 1); //true

// console.log(Math.trunc(5.5));
// console.log(Math.trunc(true)); //1
// console.log(Number.parseInt(5.5));
// console.log(Number.parseInt(true)); //NaN

// 判斷是正数、负数、0
console.log(Math.sign(-5)); //-1
