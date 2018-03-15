// react
import React from 'react';

// react native
import { Text, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

// styles
import styles from './styles/main';

class TopTracksRendered extends React.Component {
  formatPlays(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  render() {
    return (
      <TouchableOpacity
        underlayColor={'#fff'}
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
            plays: {this.formatPlays(this.props.playcount)}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default TopTracksRendered;
