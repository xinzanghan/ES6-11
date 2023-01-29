// const str = "imooc";
// // 填充的最大长度，填充字符串
// // 第二个参数不传，默认空格填充
// console.log(str.padStart(8, "x")); //xxximooc
// console.log(str.padEnd(8, "y")); //imoocyyy

// yyyy-mm-dd  2022-01-29
// 报错
// const now = new Date();
// const year = now.getFullYear();
// const month = (now.getMonth() + 1).padStart(2, "0"); //0~11
// const day = now.getDate().padStart(2, "0");
// console.log(`${year}-${month}-${day}`);

// 转字符串
// const now = new Date();
// const year = now.getFullYear();
// const month = (now.getMonth() + 1).toString().padStart(2, "0"); //0~11
// const day = now.getDate().toString().padStart(2, "0");
// console.log(`${year}-${month}-${day}`); //2023-01-29

//显示手机号后四位，其余星号展示
const tel = "13012345678";
const newTel = tel.slice(-4).padStart(tel.length, "*");
console.log(newTel); //*******5678

// console.log(new Date().getTime()); //13位 ms
// timestamp.padEnd(13, "0"); // 伪代码
