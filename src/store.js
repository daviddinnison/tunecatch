import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import artistReducer from './reducers/artist';

const store = createStore(
  combineReducers({
    artist: artistReducer
  }),
  applyMiddleware(thunk)
);

export default store;
