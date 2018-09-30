import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';

const styles = {
	slider : {
		'text-align' : 'center',
		margin : 'auto',
		padding : '20px',
	},
	'slider__label-container' : {
		display: 'flex',
		'justify-content': 'space-between'
	},
	'slider__label' : {

	},
	'slider__value' : {
		padding: '20px 0 0 0'
	}
};

class SimpleSlider extends React.Component {
	state = {
		value : 1,
	};

	handleChange = (event, value) => {
		this.setState({ value });
		console.log(value);
		chrome.tabs.query({active:true}, (tab)=>{
			chrome.tabs.sendMessage(tab[0].id,{value}, function(response) {
				console.log('message sent');
				console.log(response);
			});
		})
	};

	render() {
		const { classes } = this.props;
		const { value } = this.state;

		return (
			<div className={classes.slider}>
				<div className={classes['slider__label-container']}>
					<span className={classes['slider__label']}>Past</span> <span className={classes['slider__label']}>Present</span> <span className={classes['slider__label']}>Future</span>
				</div>
				<Slider className={classes['slider__value']} value={value} onChange={this.handleChange} min={0} max={2} step={1} aria-labelledby="label"/>
			</div>
		);
	}
}

SimpleSlider.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSlider);