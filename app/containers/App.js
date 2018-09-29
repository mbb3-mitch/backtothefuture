import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import SimpleSlider from '../components/SimpleSlider';
import style from './App.css';

@connect(
  state => ({
    todos: state.todos
  })
)
export default class App extends React.Component {
  render() {
    return (
      <div className={style.normal}>
        <Header />
        <SimpleSlider  />
      </div>
    );
  }
}
