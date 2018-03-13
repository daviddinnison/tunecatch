// react
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';

// react native
// import { Font } from 'expo';
import Expo from 'expo';

// components
import Gateway from './src/gateway';

export default class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     fontLoaded: false
  //   };
  // }

  // async componentDidMount() {
  //   await Expo.Font.loadAsync({
  //     'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf')
  //   });

  //   this.setState({ fontLoaded: true });
  // }
  render() {
    return (
      <Provider store={store}>
        <Gateway />
      </Provider>
    );
  }
}
