import { createStore, applyMiddleware, combineReducers } from 'redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { routerReducer, routerMiddleware as routerMiddle } from 'react-router-redux';
import { authReducer, tripReducer } from './reducers';
// import { createLogger } from 'redux-logger';

export const history = createHistory();

const app = combineReducers({
  form: formReducer,
  router: routerReducer,
  auth: authReducer,
  trip: tripReducer,
});

const createStoreWithMiddleware = applyMiddleware(
  thunk,
  routerMiddle(history),
  // createLogger(),
)(createStore);

const configureStore = () => createStoreWithMiddleware(
  app,
  // eslint-disable-next-line
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default configureStore;
