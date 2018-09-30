import React from 'react';
import { withStyles } from '@material-ui/core/styles';


const styles = {
	header : {
		width : '100%',
		'text-align' : 'center',
		height: '80px'
	},
	logo : {
		position : 'relative',
		'top' : '-80px',
		height: '160px',
		width: '160px',
		'border-radius': '3px'
	}
};

class Header extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <header className={classes.header}>
	      <img className={classes.logo} src="img/back_to_the_future_logo.png" alt=""/>
      </header>
    );
  }
}

export default withStyles(styles)(Header);