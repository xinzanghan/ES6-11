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
export default ajax;
