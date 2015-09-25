import { beginLoadingUser } from '../actions'

export function mapStateToProps(store) {
  return {
    username: store.user.username
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    beginLoadingUser: () => { dispatch(beginLoadingUser()) }
  }
}