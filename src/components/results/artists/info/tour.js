//react
import React from 'react';
import { connect } from 'react-redux';

//react native
import { StyleSheet, Text, View } from 'react-native';

// styles
import styles from './styles/main';

class Tour extends React.Component {
  renderTour() {
    if (this.props.tour > 0) {
      return <Text style={styles.onTour}>Currently on tour</Text>;
    } else {
      return <Text style={styles.notTouring}>No concerts scheduled</Text>;
    }
  }
  render() {
    return <View>{this.renderTour()}</View>;
  }
}

const mapStateToProps = state => {
  return {
    tour: state.artist.similarArtistInfo.ontour
  };
};

export default connect(mapStateToProps)(Tour);
