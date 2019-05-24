(function () {
	console.log('这是 demo 的content-script！');
	console.log(chrome)
	console.log(chrome.extension.getURL)
	console.log(location.href)
	const href = 
	// 从background或popuo接受
	chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
		// console.log(sender.tab ?"from a content script:" + sender.tab.url :"from the extension");
		if (request.cmd == 'test') alert(request.value);
		sendResponse('我收到了你的消息！');
	});
	// 发向background或popup
	chrome.runtime.sendMessage({ greeting: '你好，我是content-script呀，我主动发消息给后台！' }, function (response) {
		console.log('收到来自后台的回复：' + response);
	});
})();