import React, { Component } from 'react';
import { Link } from 'react-router';

export default class extends Component {
  render() {
    return (
      <nav>
        <ul role="nav">
          <li>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/team'>Team</Link>
          </li>
        </ul>
      </nav>
    )
  }
}
