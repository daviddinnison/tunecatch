// react
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';

// components
import Gateway from './src/gateway';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Gateway />
      </Provider>
    );
  }
}