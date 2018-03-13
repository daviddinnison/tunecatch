// react
import React from 'react';
import { connect } from 'react-redux';

// react native
import { FlatList, StyleSheet, Text, View } from 'react-native';

// compopnents
import Loader from '../../../common/loader';
import TopTracksRendered from './top-tracks-rendered';

// styles
import styles from './styles/main';

class TopTracksMain extends React.Component {
  renderTracks() {
    if (this.props.loadingTopTracks) {
      return <Loader />;
    } else {
      let topTenTracks = this.props.similarArtistTopTracks;
      return (
        <FlatList
          horizontal={true}
          data={topTenTracks.slice(0, 9)}
          keyExtractor={(item, index) => index}
          style={[styles.tracksMainBackground, styles.boxShadow]}
          renderItem={({ item }, index) => (
            <TopTracksRendered
              name={item.name}
              artistName={this.props.artistName}
              playcount={Number(item.playcount)}
            />
          )}
        />
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.infoHeader}>Top Artist Tracks</Text>
        {this.renderTracks()}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    loadingTopTracks: state.artist.loading.topTracks,
    similarArtistTopTracks: state.artist.similarArtistTopTracks
  };
};

export default connect(mapStateToProps)(TopTracksMain);
