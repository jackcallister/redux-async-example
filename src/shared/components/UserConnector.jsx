import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../selectors'
import User from './User'

class UserConnector extends Component {

  componentDidMount() {
    this.props.beginLoadingUser();
  }

  render() {
    return (
      <User {...this.props} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserConnector)
