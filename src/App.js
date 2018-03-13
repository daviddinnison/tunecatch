// react
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

// components
import Gateway from './gateway';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Gateway />
      </Provider>
    );
  }
}

export default App;
