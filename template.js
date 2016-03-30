import React, { Component } from 'react';

export default class Html extends Component {
  render() {
    return (
      <html className="no-js" lang="en-us">
        <head>
          <title>Columbia Development</title>
        </head>
        <body>
          <div id="outlet" dangerouslySetInnerHTML={this.props.content}></div>
          <script src='/bundle.js'></script>
        </body>
      </html>
    );
  }
}
