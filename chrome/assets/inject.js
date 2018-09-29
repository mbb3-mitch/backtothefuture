let port = chrome.runtime.connect();

port.onMessage.addListener((message) => {
	console.log("je recois des messages");
});