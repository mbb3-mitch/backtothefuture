import React, {Component} from 'react';
import {render} from 'react-dom';
import Dock from 'react-dock';

class InjectApp extends Component {
    constructor(props) {
        super(props);
        this.state = {isVisible: false};
    }

    buttonOnClick = () => {
        this.setState({isVisible: !this.state.isVisible});
    };
}


const async = require('async');
const Translator = require("../../utils/Translator");
const translator = new Translator();

function replaceFont() {
    let fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = "https://github.com/mbb3-mitch/backtothefuture/blob/ffc102a5b594ceb77addc2a0f9942d1c015e7aa1/media/fonts/OldLondon.ttf?raw=true";
    document.body.appendChild(fontLink);
    let newFont = document.createElement('style');
    newFont.textContent = "      body {\n" +
        "        font-family: 'Old London' !important;\n" +
        "      }";
    document.body.appendChild(newFont);
}


window.addEventListener('load', () => {
    replaceFont();

    let all = document.getElementsByTagName("*");
	let textElements = [];

	for (var i = 0, max = all.length; i < max; i++) {
		if (all[i].innerText && (all[i].tagName == 'H3' || all[i].tagName == 'H2' || all[i].tagName == 'H1' || all[i].tagName == 'P' || all[i].tagName == 'SPAN')) {
			textElements.push(all[i]);
		}
	}

	translator.translateHtml(textElements, 'toEmoji', (err) => {
		if (err) {
			console.log(err);
		}
	});
});
