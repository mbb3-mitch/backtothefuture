const Translator = require("../../utils/Translator");
const translator = new Translator();

//font-family: 'Libre Barcode 39 Text', cursive;

function replaceFont(time) {
    var type = "";
    if (time == 1){
        return;
    } else if (time == 0) {
        type = "Diplomata SC";
    } else if (time == 2) {
        type = 'Monoton';
    }
    let fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    document.body.appendChild(fontLink);
    fontLink.href = "https://fonts.googleapis.com/css?family=Diplomata+SC|Monoton";
    let newFont = document.createElement('style');
    newFont.textContent = "" +
        "BODY, H3, H2, H1, P, SPAN{\n" +
        "        font-family: " + type + " !important;\n" +
        "      }";
    document.body.appendChild(newFont);
}

window.addEventListener('load', () => {
<<<<<<< HEAD
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
=======
    var time = 2;
>>>>>>> d58c1f8... Font - 3 sets of fonts

    let all = document.getElementsByTagName("*");
	let textElements = [];


	for (var i = 0, max = all.length; i < max; i++) {
		if (all[i].innerText && (all[i].tagName == 'H3' || all[i].tagName == 'H2' || all[i].tagName == 'H1' || all[i].tagName == 'P' || all[i].tagName == 'SPAN')) {
			textElements.push({el : all[i], english : all[i].innerText});
		}
	}
<<<<<<< HEAD
/*
=======
    replaceFont(time);

>>>>>>> d58c1f8... Font - 3 sets of fonts
	translator.translateHtml(textElements, 'toEmoji', (err) => {
		if (err) {
			console.log(err);
		}
	});*/
});


