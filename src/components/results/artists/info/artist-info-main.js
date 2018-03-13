//react
import React from 'react';
import { connect } from 'react-redux';

//react native
import { Image, View } from 'react-native';
import { Container, Content, Header, Text } from 'native-base';

//components
import Bio from './bio';
import Loader from '../../../common/loader';
import TagsComparison from './tags-comparison';
import TopAlbumsMain from './top-albums-main';
import TopTracksMain from './top-tracks-main';
import Tour from './tour';

//styles
import styles from './styles/main';

//actions
import { getArtistInfo } from '../../../../actions/artist';

class ArtistInfoMain extends React.Component {
  componentDidMount() {
    const artist = 'Lush';
    this.props.dispatch(getArtistInfo(artist));

    // this.props.dispatch(getArtistInfo(this.props.route));
  }

  renderData() {
    const data = this.props.similarArtistInfo;
    return (
      <Content style={styles.artistInfoContainer}>
        <Content style={styles.artistHead}>
          <Text style={[styles.artistName, styles.shadow]}>{data.name}</Text>
        </Content>
        <Content contentContainerStyle={[styles.artistMetaFlex, styles.leftMargin]}>
            {/* <Tour /> */}
            <Image
              style={styles.artistImage}
              source={{ uri: data.image[2]['#text'] }}
            />
            <TagsComparison style={styles.tagsContainer} />
        </Content>
        <TopAlbumsMain artistName={data.name} />
        <TopTracksMain artistName={data.name} />
        <Bio />
      </Content>
    );
  }

  loadingData() {
    if (this.props.loadingArtistInfo) {
      return <Loader />;
    } else {
      return <Container>{this.renderData()}</Container>;
    }
  }

  render() {
    return <Container>{this.loadingData()}</Container>;
  }
}

const mapStateToProps = state => {
  return {
    loadingArtistInfo: state.artist.loading.artistInfo,
    imageUri: state.artist.imageUri,
    similarArtistInfo: state.artist.similarArtistInfo
  };
};

export default connect(mapStateToProps)(ArtistInfoMain);
