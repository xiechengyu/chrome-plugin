$(function () {
  var a = chrome.extension.getBackgroundPage()
  console.log(a);
  $('div').click(function () {
    location.href = 'http://www.baidu.com'
  })
  console.log(chrome.tabs)
  console.log(location.href)
  // var a = chrome.tabs.sendMessage()
  // var b = chrome.tabs.connect()
  // console.log(a)
  // console.log(b)
})