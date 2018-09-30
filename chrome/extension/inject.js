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
			switch (request.value) {
				case 0:
					translator.translateHtml(textElements, 'toOldEnglish', (err) => {
						if (err) {
							console.log(err);
						}
					});
					break;
				case 1:
					translator.translateHtml(textElements, 'english', (err) => {
						if (err) {
							console.log(err);
						}
					});
					break;
				case 2 :
					translator.translateHtml(textElements, 'toEmoji', (err) => {
						if (err) {
							console.log(err);
						}
					});
					break;

			}
			console.log(request);
			sendResponse();
		}
	);


    replaceFont();

    let all = document.getElementsByTagName("*");
	let textElements = [];


	for (var i = 0, max = all.length; i < max; i++) {
		if (all[i].innerText && (all[i].tagName == 'H3' || all[i].tagName == 'H2' || all[i].tagName == 'H1' || all[i].tagName == 'P' || all[i].tagName == 'SPAN')) {
			textElements.push({el : all[i], english : all[i].innerText});
		}
	}
/*
	translator.translateHtml(textElements, 'toEmoji', (err) => {
		if (err) {
			console.log(err);
		}
	});*/
});


