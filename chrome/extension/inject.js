import React, {Component} from 'react';
import {render} from 'react-dom';
import Dock from 'react-dock';

class InjectApp extends Component {
	constructor(props) {
		super(props);
		this.state = {isVisible : false};
	}

	buttonOnClick = () => {
		this.setState({isVisible : !this.state.isVisible});
	};

	render() {
		return (
			< div >
			< button
		onClick = {this.buttonOnClick
	}>
		Open
		app
		< /button>
		< Dock
		position = "right"
		dimMode = "transparent"
		defaultSize = {0.4}
		isVisible = {this.state.isVisible
	}
	>
	<
		iframe
		style = {
		{
			width: '100%',
				height
		:
			'100%',
		}
	}
		frameBorder = {0}
		allowTransparency = "true"
		src = {chrome.extension.getURL(`inject.html?protocol=${location.protocol}`)
	}
		/>
		< /Dock>
		< /div>
	)
		;
	}
}

const async = require('async');
const Translator = require("../../utils/Translator");
const translator = new Translator();


window.addEventListener('load', () => {
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
