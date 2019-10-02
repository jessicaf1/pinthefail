const thunk = (store) => next => action => {
  if (typeof action === 'function'){
    debugger
    return action(store.dispatch);
  }
  return next(action);
};

export default thunk; 