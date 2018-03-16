// react
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';

// react native
import { Text } from 'react-native';
import { Font } from 'expo';

// components
import Gateway from './src/gateway';
import Loader from './src/components/common/loader';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto_medium: require('./assets/fonts/Roboto-Medium.ttf'),
      'pt-sans-web-regular': require('./assets/fonts/PT_Sans-Web-Regular.ttf'),
      'pt-serif-web-regular': require('./assets/fonts/PT_Serif-Web-Regular.ttf'),
      'pt-sans-web-italic': require('./assets/fonts/PT_Sans-Web-Italic.ttf'),
      'pt-sans-web-bold': require('./assets/fonts/PT_Sans-Web-Bold.ttf'),      
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
      return <Loader />;
    }
  }
}
