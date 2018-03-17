// react
import React from 'react';

// react native
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

// styles
import styles from './styles/main';

class TopAlbumsRendered extends React.Component {
  render() {
    return (
      <TouchableOpacity
        underlayColor={'#fff'}
        onPress={() => {
          Actions.singleAlbum({
            route: this.props.name,
            artistName: this.props.artistName
          });
        }}
      >
        <View
          style={styles.renderedAlbumContainer}
          contentContainerStyle={styles.artistMetaFlex}
        >
          <Image
            style={{ width: 70, height: 70 }}
            source={{ uri: this.props.image[1]['#text'] }}
          />
          <Text style={styles.renderedAlbumText}>{this.props.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default TopAlbumsRendered;
