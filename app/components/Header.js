import React from 'react';
import { withStyles } from '@material-ui/core/styles';


const styles = {
	header : {
		position : 'absolute',
		width : '100%',
		'font-size' : '36px',
		'font-weight' : 100,
		'top' : '-76px',
		'text-align' : 'center',
		color : 'rgb(175, 47, 47)',
		'-webkit-text-rendering' : 'optimizeLegibility',
		'-moz-text-rendering' : 'optimizeLegibility',
		'-ms-text-rendering' : 'optimizeLegibility',
		'text-rendering' : 'optimizeLegibility'
	}
};

class Header extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <header>
        <h1 className={classes.header}>Back to the Future</h1>
      </header>
    );
  }
}

export default withStyles(styles)(Header);