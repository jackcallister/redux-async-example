import React, { Component } from 'react';

export default class User extends Component {

  render() {
    return (
      <h1>{this.props.username}</h1>
    );
  }
}
