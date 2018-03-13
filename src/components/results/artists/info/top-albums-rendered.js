// react
import React from 'react';

// react native
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

// styles
import styles from './styles/main';

class TopAlbumsRendered extends React.Component {
  render() {
    return (
      <TouchableHighlight
        onPress={() => {
          Actions.singleAlbum({
            route: this.props.name,
            artistName: this.props.artistName
          });
        }}
      >
        <View style={styles.trackContainer}>
          <Text>{this.props.name}</Text>
          <Image
            style={{ width: 60, height: 60 }}
            source={{ uri: this.props.image[1]['#text'] }}
          />
        </View>
      </TouchableHighlight>
    );
  }
}

export default TopAlbumsRendered;
