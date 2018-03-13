//react
import React from 'react';
import { connect } from 'react-redux';

//react native
import { Image, StyleSheet, Text, View } from 'react-native';

//components
import Bio from './bio';
import Loader from '../../../common/loader';
import TopAlbumsMain from './top-albums-main';
import TopTracksMain from './top-tracks-main';
import Tour from './tour';

//styles
import styles from './styles/main';

//actions
import { getArtistInfo } from '../../../../actions/artist';

class OriginalArtistInfo extends React.Component {
  renderData() {
    const data = this.props.originalArtistInfo;
    console.log('DATA', data);
    return (
      <View style={styles.mainSection}>
        <Text style={styles.header}>{data.name}</Text>
        <Image
          style={{ width: 162, height: 162 }}
          source={{ uri: this.props.originalArtistInfo.image[2]['#text'] }}
        />
        <Tour />
        <TopAlbumsMain artistName={data.name} />
        <TopTracksMain artistName={data.name} />
        <Bio />
      </View>
    );
  }

  loadingData() {
    if (this.props.loading) {
      return <Loader />;
    } else {
      return <View>{this.renderData()}</View>;
    }
  }

  render() {
    return <View style={styles.container}>{this.loadingData()}</View>;
  }
}

const mapStateToProps = state => {
  return {
    loading: state.artist.loading.artistInfo,
    imageUri: state.artist.imageUri,
    originalArtistInfo: state.artist.similarArtistInfo //the artist info is stored in the state in the same place as similarArtistInfo
  };
};

export default connect(mapStateToProps)(OriginalArtistInfo);
