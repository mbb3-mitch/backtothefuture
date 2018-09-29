const request = require('request');
const superagent = require('superagent');
class Translator {
	constructor() {

	}

	toEmoji(text, callback) {
		superagent
			.post('https://api.emojitranslate.com')
			.send(`f=en_001&t=emoji&o=ft00-&d=${encodeURI(text)}&k=jpwmlwivxip&r=`)
			.end((err, res) => {
				if(err) {
					callback(err);
					return;
				}
				callback(null, res.text);
			});
	}

	toOldEnglish(text, callback) {
		request({
			method : 'POST',
			uri : 'https://funtranslations.com/shakespeare',
			formData : {text : text}
		}, (err, httpResponse, body) => {
			if (err) {
				callback(err);
				return;
			}

			let match = /(?:<span class="result-text" id="shakespeare">)((.|\n)*?)(?:<\/span>)/.exec(body);

			callback(null, match[1].slice(0, -1).replace(/  /g, ' '));
		})
	}
}

module.exports = Translator;