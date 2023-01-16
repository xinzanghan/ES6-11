//js是单线程的

//代码是从上往下顺序执行的
// const a = 1
// const b = 2
// console.log(a + b);//同步操作
// setTimeout(() => {//异步操作
//     console.log(a + b);
// }, 1000)

//前后端数据分离  前端  <-> 后端   ajax

// console.log(1);
// setTimeout(() => {
//     console.log(2);
// },1000)
// console.log(3);

//1 3 2
// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 0); //最小也需要4毫秒
// console.log(3);

//Ajax原理
// 构造一个函数，使其可复用
function ajax(url, callback) {
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
    if (xmlhttp.readyState === 4 && xmlhttp.status == 200) {
      var obj = JSON.parse(xmlhttp.responseText);
      //   console.log(obj);
      callback(obj);
    }
  };
}

var url = "http://musicapi.xiecheng.live/personalized";
ajax(url, (res) => {
  console.log(res);
});
