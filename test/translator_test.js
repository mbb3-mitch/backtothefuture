const expect = require(`chai`).expect;
const Translator = require('../utils/Translator');

describe(`tranlator`, function() {
	it.only('English to Old English', function(done) {
		let translator = new Translator();
		translator.toOldEnglish("Hello World. Vincent is very annoying!", (err, oldEnglishText) => {
			if(err) {
				done(err);
				return;
			}
			expect(oldEnglishText).to.be.equal("Valorous morrow to thee, sir ordinary. Vincent is very annoying!");
			done();
		});
	});
	it('English to Emoji', function(done) {
		let translator = new Translator();
		translator.toEmoji("hello world.  I love to eat apple", (err, emojiText) => {
			if(err) {
				done(err);
				return;
			}
			expect(emojiText).to.be.equal("👋 🌐. I ❤️ to 🍽️ 🍎");
			done();
		});
	});
});