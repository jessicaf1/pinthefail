
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { rootReducer } from '../reducers/root_reducer';
import thunk from '../thunk/thunk'
import { create } from 'domain';

const configureStore = (preloadedState = {} ) => {
  return createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger))
}

export default configureStore;