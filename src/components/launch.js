// react
import React from 'react';

// react native
import { Actions } from 'react-native-router-flux';
import { Image, Text } from 'react-native';
import { Container } from 'native-base';

// components
import MainSearch from './main-search';

// styles
import styles from './styles/main';

class Launch extends React.Component {
  render() {
    return (
      <Container style={styles.appBackground}>
        <Text style={[styles.appHeader, styles.leftMargin, styles.shadow]}>TuneCatch</Text>
        <Text style={[styles.appSubHeader, styles.leftMargin]}>new music for everyone</Text>
        <MainSearch />
      </Container>
    );
  }
}

export default Launch;
