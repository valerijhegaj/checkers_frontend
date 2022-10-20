export const ThunkMiddleware = store => dispatch => action => {
  if (typeof action === 'function') {
    return action(store.dispatch)
  }
  return dispatch(action)
}
