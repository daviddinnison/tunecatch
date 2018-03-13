//react
import React from 'react';

//react native
import { Text } from 'native-base';

export default class Error extends React.Component {
  render() {
    return <Text>Error: {this.props.message}</Text>;
  }
}
