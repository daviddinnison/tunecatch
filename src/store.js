import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import artistReducer from './reducers/artist';
import tagReducer from './reducers/tag';

const store = createStore(
  combineReducers({
    artist: artistReducer,
    tag: tagReducer
  }),
  applyMiddleware(thunk)
);

export default store;
