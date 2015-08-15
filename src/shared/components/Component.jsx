import React from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'react-redux';
import { selectUser } from '../selectors/selectors';
import * as Actions from '../actions/Actions';

class Component extends React.Component {

  componentWillMount() {
    this.props.beginLoadingUser();
  }

  render() {
    let value;

    if (this.props.loading) {
      value = 'Loading';
    } else {
      value = this.props.username;
    }

    return (
      <h1>{value}</h1>
    );
  }
}

export default class ComponentConnector {

  render() {
    return (
      <Connector select={selectUser}>
        {({ user, dispatch }) =>
          <Component {...user} {...bindActionCreators(Actions, dispatch)} />
        }
      </Connector>
    );
  }
}
