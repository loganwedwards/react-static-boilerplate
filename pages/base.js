import React, { Component } from 'react';
import Navigation from '../components/Navigation/Navigation';

export default class extends Component {
  render() {
    return (
      <html className="no-js" lang="en-us">
        <head>
          <title>Columbia Development</title>
        </head>
        <body>
          
          <div id="outlet" dangerouslySetInnerHTML={this.props.content}>
            {this.props.children}
          </div>
          <script src='/bundle.js'></script>
        </body>
      </html>
    );
  }
}
