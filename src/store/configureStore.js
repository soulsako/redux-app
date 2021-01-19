import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import * as ReselectTools from 'reselect-tools';
import rootReducer from '../reducers/rootReducer';

/**
 * @param {object} objPreloadedState Preloaded Redux state
 * @return {store} Configured Redux store
 */
export default function configureStore(objPreloadedState = {}) {
  const arrMiddlewares = [thunk];

  const enhancerMiddleware = applyMiddleware(...arrMiddlewares);
  const arrEnhancers = [enhancerMiddleware];

  const composeEnhancers = composeWithDevTools({ serialize: true });
  const composedEnhancers = composeEnhancers(...arrEnhancers);

  const store = createStore(rootReducer, objPreloadedState, composedEnhancers);

  // Expose store state to Reselect dev tools
  ReselectTools.getStateWith(() => store.getState());

  return store;
}
