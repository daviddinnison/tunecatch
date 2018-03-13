// react
import React from 'react';

// react native
import { StyleSheet, Text, View } from 'react-native';

class Test extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.sub, styles.blue]} />
        <View style={[styles.sub, styles.green]} />
        <View style={[styles.sub, styles.red]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  sub: {
    height: 100,
    width: 100
  },
  blue: { backgroundColor: 'blue' },
  green: { backgroundColor: 'green' },
  red: { backgroundColor: 'red' }
});

export default Test;
