// Es6 Module模块化  exprot导出 import导入  as起别名  export default（只能出现一次，导入时名字可随便起）
// 导入
// //大括号中的名字：导出和导入的名字必须一样
// import { a, b, sum, obj, People } from "./module";
// console.log(a, b); //5 'imooc'
// console.log(sum(2, 5)); //7
// console.log(obj); //{name: 'es'}
// //调用People时，需要new一个实例化对象
// let p = new People("wangyihan");
// p.showName(); //wangyihan

//大括号中的名字，起别名
// import { a as aa, b, sum, obj, People } from "./module";
// console.log(aa, b); //5 'imooc'

//

//

//另一种导入导出方式，大括号里的名字可以随便取
// import aa from "./module";
// console.log(aa);

//

//

// import add, { str } from "./module";
// console.log(add(4, 5), str); //9  '两个导入共同使用时'

//接收默认导出的一堆东西
// import mod from "./module";
// console.log(mod); //对象
// console.log(mod.a);
// console.log(mod.b);
// console.log(mod.sum(4, 5));

// 另一种写法
import * as mod from "./module";
console.log(mod); //Module
console.log(mod.default.a);
