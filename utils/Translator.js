const async = require('async');
const superagent = require('superagent');

class Translator {
	constructor() {

	}

	toEmoji(text, callback) {
		superagent
			.post('https://api.emojitranslate.com')
			.send(`f=en_001&t=emoji&o=ft00-&d=${encodeURI(text)}&k=jpwmlwivxip&r=`)
			.end((err, res) => {
				if (err) {
					callback(err);
					return;
				}
				callback(null, res.text);
			});
	}

	toOldEnglish(text, callback) {
		superagent
			.post('https://funtranslations.com/shakespeare')
			.type('form')
			.send({text : text})
			.end((err, res) => {
				if (err) {
					callback(err);
					return;
				}

				let match = /(?:<span class="result-text" id="shakespeare">)((.|\n)*?)(?:<\/span>)/.exec(res.text);

				callback(null, match[1].slice(0, -1).replace(/  /g, ' '));
			});
	}

	translateHtml(textElements, toLanguage, callback) {
		async.eachSeries(textElements, (textElement, cb) => {
			this[toLanguage](textElement.innerText, (err, text) => {
				console.log(textElement.innerText);
				textElement.innerText = text;
				cb();
			});
		}, callback);
	}


}

module.exports = Translator;