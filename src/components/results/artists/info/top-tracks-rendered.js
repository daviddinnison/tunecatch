// react
import React from 'react';

// react native
import { Text, TouchableHighlight, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

// styles
import styles from './styles/main';

class TopTracksRendered extends React.Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.trackContainer}
        onPress={() => {
          Actions.singleTrackMain({
            trackRoute: this.props.name,
            artistRoute: this.props.artistName
          });
        }}
      >
        <View style={styles.trackContainer}>
          <Text style={styles.trackName}>{this.props.name}</Text>
          <Text style={styles.trackPlays}>
            plays: {this.props.playcount.toLocaleString('en')}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export default TopTracksRendered;
