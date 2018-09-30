import React from 'react';
import Header from '../components/Header';
import SimpleSlider from '../components/SimpleSlider';
import OutlinedTextField from '../components/OutlinedTextField';
import {withStyles} from '@material-ui/core/styles';

const styles = {
	container : {
		background : '#ffffff',
		margin : '100px 20px 20px 20px',
		position : 'relative',
		'box-shadow' : '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1)',
        'min-width': '295px'
	}
};

class App extends React.Component {
  render() {
	  const {classes} = this.props;
	  return (
		  <div className={classes.container}>
			  <Header/> <SimpleSlider/> <OutlinedTextField/>
		  </div>
    );
  }
}

export default withStyles(styles)(App);
