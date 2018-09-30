import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Translator from '../../utils/Translator';

const styles = theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	textField: {
		margin: '20px',
		width : '300px'
	}
});


class OutlinedTextFields extends React.Component {
	state = {
		name: '',
		result : '',
		timePeriod : 2
	};


	handleChange = name => event => {
		this.setState({
			[name]: event.target.value,
			//result: event.target.value
		});

		let translator =new Translator();
		switch (this.state.timePeriod) {
			case 0:
				translator.toOldEnglish(event.target.value, (err, result)=>{
					this.updateResult(result);
				});
				break;
			case 1:
				this.updateResult(event.target.value);
				break;
			case 2:
				translator.toEmoji(event.target.value, (err, result)=>{
					this.updateResult(result);
				});
				break;
		}

	};

	updateResult(result) {
		this.setState({
			result : result
		});
	}

	render() {
		const { classes } = this.props;

		return (
			<form className={classes.container} noValidate autoComplete="off">
				<TextField
					id="outlined-name"
					label="Live translate"
					className={classes.textField}
					value={this.state.name}
					onChange={this.handleChange('name')}
					margin="normal"
					variant="outlined"
					fullWidth={true}
				/>
				<TextField
					id="outlined-read-only-input"
					label="Result"
					value={this.state.result}
					className={classes.textField}
					margin="normal"
					multiline={true}
					rows={3}
					InputProps={{
						readOnly: true,
					}}
					variant="outlined"
				/>
			</form>
		);
	}
}

OutlinedTextFields.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);
