// react
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';

// react native
import { Text } from 'react-native';
import { Font } from 'expo';

// components
import Gateway from './src/gateway';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
      'Roboto_medium': require('./assets/fonts/Roboto-Medium.ttf')
    });

    this.setState({ fontLoaded: true });
  }
  render() {
    if (this.state.fontLoaded) {
      return (
        <Provider store={store}>
          <Gateway />
        </Provider>
      );
    } else {
      return <Text>loading...</Text>
    }
  }
}
