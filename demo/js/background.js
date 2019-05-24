(function(){
  chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log('sender==>' + sender.id+'=>'+sender.tab.id  );//可以测试看看
      if( request != null && request.to == Request_TO_TmSearchPage ){//提交
        startLoadOrderYMX(  request  ,  sender.tab.id  );
      }
   });//end addListener
  // 发向content-scipt
  function sendMessageToContentScript(message, callback) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
        if (callback) callback(response);
      });
    });
  }
  sendMessageToContentScript(
    { cmd: 'test', value: '你好，我是popup！' },
    function (response) {
      console.log('来自content的回复：' + response);
    });
  // 监听来自content-script的消息
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log('收到来自content-script的消息：');
    console.log(request, sender, sendResponse);
    sendResponse('我是后台，我已收到你的消息：' + JSON.stringify(request));
  });
})()