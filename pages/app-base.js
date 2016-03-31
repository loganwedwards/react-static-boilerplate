import React, { Component } from 'react';
import Navigation from '../components/Navigation/Navigation';

export default class extends Component {
  render() {
    return (
      <div id="app">
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}
