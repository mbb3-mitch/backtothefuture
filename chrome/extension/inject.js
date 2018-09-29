const Translator = require("../../utils/Translator");
const translator = new Translator();

function replaceFont() {
    let fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = "https://fonts.googleapis.com/css?family=Tangerine";
    document.body.appendChild(fontLink);
    let newFont = document.createElement('style');
    newFont.textContent = "      body {\n" +
        "        font-family: 'Tangerine' !important;\n" +
        "      }";
    document.body.appendChild(newFont);
}

window.addEventListener('load', () => {
replaceFont();

	chrome.extension.sendMessage({}, function(response) {
		var readyStateCheckInterval = setInterval(function() {
			if (document.readyState === "complete") {
				clearInterval(readyStateCheckInterval);

				// ----------------------------------------------------------
				// This part of the script triggers when page is done loading
				console.log("Hello. This message was sent from scripts/inject.js");
				// ----------------------------------------------------------
			}
		}, 10);
	});
	chrome.runtime.onMessage.addListener(
		function(request, sender, sendResponse) {
			console.log(request);
			sendResponse();
		}
	);
	document.addEventListener('yourEventName', function(e){
		//send message to ext
		var someInformation = {/*your msg here*/}
		chrome.extension.sendMessage(someInformation, function(response) {
			//callback
		});
	}, false);

    replaceFont();

    let all = document.getElementsByTagName("*");
	let textElements = [];

	for (var i = 0, max = all.length; i < max; i++) {
		if (all[i].innerText && (all[i].tagName == 'H3' || all[i].tagName == 'H2' || all[i].tagName == 'H1' || all[i].tagName == 'P' || all[i].tagName == 'SPAN')) {
			textElements.push(all[i]);
		}
	}
/*
	translator.translateHtml(textElements, 'toEmoji', (err) => {
		if (err) {
			console.log(err);
		}
	});*/
});


