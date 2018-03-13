// react
import React from 'react';

// react native
import { Actions } from 'react-native-router-flux';
import { Image } from 'react-native';
import { Container, Text } from 'native-base';

// components
import MainSearch from './main-search';
// import Test from './test';

// styles
import styles from './styles/main';

class Launch extends React.Component {
  render() {
    return (
      <Container>
        <Text style={styles.appHeader}>TuneCatch</Text>
        <Text style={styles.appSubHeader}>
          There's always more fish in the sea...
        </Text>
        <MainSearch />
        {/* <Test/> */}
      </Container>
    );
  }
}

export default Launch;
