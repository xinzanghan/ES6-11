// const reg = /./;
// console.log(reg.test("5")); //true
// console.log(reg.test("x")); //true
// console.log(reg.test("\n")); //false
// console.log(reg.test("\r")); //false
// console.log(reg.test("\u{2028}")); //false
// console.log(reg.test("\u{2029}")); //false

// . dot 匹配任意单个字符  dotAll
// const reg = /./s;
// console.log(reg.test("5")); //true
// console.log(reg.test("x")); //true
// console.log(reg.test("\n")); //true
// console.log(reg.test("\r")); //true
// console.log(reg.test("\u{2028}")); //true
// console.log(reg.test("\u{2029}")); //true

// 共学了修饰符：g全局匹配  i 忽略大小写  m跨行匹配    前几个es5就有  y粘连  u匹配unicode  s匹配任意单个字符dotAll

//

//

//具名组匹配
// 在匹配时给每一个组匹配一个指定的名字
// const reg = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
// const groups = reg.exec("1999-12-31").groups;
// // const year = groups.year; // 1999
// // const month = groups.month; // 12
// // const day = groups.day; // 31
// const { year, month, day } = groups;
// console.log(year, month, day);

//

//

//后行断言（找后面内容确定wang，匹配前面固定内容wo）wo wowang
// 先行断言（找前面内容确定wo，匹配后面固定内容wang）wo wowang
//对于当前匹配位置的前面或者后面进行匹配测试
