// react
import React from 'react';
import { connect } from 'react-redux';

// react native
import { Image, View } from 'react-native';
import { Content, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

// components
import Loader from '../../../common/loader';
import Error from '../../../common/error';

// actions
import { getTrackInfo } from '../../../../actions/artist';

// styles
import styles from './styles/main';

class SingleTrackMain extends React.Component {
  componentDidMount() {
    //error
    // const track = 'fsdfsdfss';
    // const artist = 'lllklk';

    //with wiki
    const track = 'Temperature';
    const artist = 'Sean Paul';

    //without wiki
    // const track = 'Flower Power';
    // const artist = 'Ringo Deathstarr';

    this.props.dispatch(getTrackInfo(track, artist));

    //inherited from album action - real version
    // console.log('TRACK PROPS', this.props.trackRoute)
    // console.log('ARTIST PROPS', this.props.artistRoute);
    // this.props.dispatch(getTrackInfo(this.props.trackRoute, this.props.artistRoute))
  }

  renderInfo() {
    if (this.props.track.wiki) {
      return (
        <View style={styles.container}>
        <Text style={[styles.bioText]}>
          {this.props.track.wiki.content}
        </Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
        <Text style={[styles.bioText]}>
          There is currently no wiki content for this track. Content is
          submitted via the Last.fm platform.
        </Text>
        </View>
      );
    }
  }

  renderTrackTags() {
    const tagData = this.props.track.toptags.tag.map((item, index) => (
      <Text style={styles.renderedTagSingle} key={index}>
        {item.name}
      </Text>
    ));

    return <View style={styles.renderedTags}>{tagData}</View>;
  }

  renderTrack() {
    if (this.props.loading) {
      return <Loader />;
    } else if (this.props.error) {
      return <Error message={this.props.error} />;
    } else if (this.props.track) {
      const data = this.props.track;
      return (
        <Content style={styles.artistInfoContainer}>
          <Content contentContainerStyle={[styles.leftMargin]}>
            <Text style={[styles.albumName, styles.shadow]}>{data.name}</Text>
            <Text style={[styles.playCount, styles.leftMargin]}>
              {data.playcount.toLocaleString('en')} plays
            </Text>
          </Content>
          <Image
            style={[styles.artistImage, styles.leftMargin]}
            source={{ uri: data.album.image[2]['#text'] }}
          />

          <Text style={[styles.albumArtistNameHead, styles.leftMargin]}>
            {data.album.title}
          </Text>
          {this.renderTrackTags()}
          {this.renderInfo()}
        </Content>
      );
    }
  }

  render() {
    return <Content>{this.renderTrack()}</Content>;
  }
}

const mapStateToProps = state => {
  return {
    error: state.artist.error.singleTrack,
    loading: state.artist.loading.singleTrack,
    track: state.artist.singleTrack
  };
};

export default connect(mapStateToProps)(SingleTrackMain);
