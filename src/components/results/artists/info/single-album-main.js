// react
import React from 'react';
import { connect } from 'react-redux';

// react native
import { Content, Text } from 'native-base';
import { Image, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

// components
import Loader from '../../../common/loader';

// actions
import { getAlbumInfo } from '../../../../actions/artist';

// styles
import styles from './styles/main';
import album from './styles/album.png';
import musician from './styles/musician.png';

class SingleAlbumMain extends React.Component {
  componentDidMount() {
    // const album = 'Loveless';
    // const artist = 'My Bloody Valentine';

    // this.props.dispatch(getAlbumInfo(album, artist));

    this.props.dispatch(getAlbumInfo(this.props.route, this.props.artistName));
  }

  formatPlays(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  formatDuration(num) {
    const minutes = Math.floor(num / 60);
    const seconds = num - minutes * 60;
    return `${minutes}:${seconds}`;
  }

  renderAlbumTags() {
    const tagData = this.props.album.tags.tag.map((item, index) => (
      <Text style={styles.renderedTagSingle} key={index}>
        {item.name}
      </Text>
    ));

    return <View style={styles.renderedTags}>{tagData}</View>;
  }

  renderAlbumTracks() {
    const trackData = this.props.album.tracks.track.map((item, index) => (
      <Content
        key={index}
        style={[
          styles.albumsMainBackground,
          styles.trackContainer,
          styles.boxShadow
        ]}
      >
        <Content
        contentContainerStyle={styles.trackAlbumContainer}
          onPress={() => {
            Actions.singleTrackMain({
              trackRoute: item.name,
              artistRoute: this.props.album.artist
            });
          }}
        >
          <Text style={styles.trackAlbumName}>
          {(index + 1)} {item.name}
          </Text>
          <Text style={styles.length}>{this.formatDuration(item.duration)}</Text>
        </Content>
      </Content>
    ));
    return (
      <Content>
        <Text style={[styles.infoHeader, styles.leftMargin]}>Tracks</Text>
        {trackData}
      </Content>
    );
  }
  renderWikiData() {
    if (this.props.album.wiki) {
      return (
        <Text style={[styles.container, styles.mainText]}>
          {this.props.album.wiki.content}
        </Text>
      );
    } else {
      return (
        <Text style={[styles.container, styles.mainText]}>
          There is currently no wiki content for this album. Content is
          submitted via the Last.fm platform.
        </Text>
      );
    }
  }

  renderAlbum() {
    if (this.props.loading) {
      return <Loader />;
    } else {
      console.log('ALBUM DATA IN COMPONENT!!!!', this.props.album);
      const data = this.props.album;
      return (
        <Content>
          <Content contentContainerStyle={styles.albumMetaFlex}>
            <Image source={album} style={styles.icon} />
            <Text style={styles.albumName}>{data.name}</Text>
          </Content>
          <Text style={[styles.playCount, styles.leftMargin]}>
            {this.formatPlays(data.playcount)} plays
          </Text>
          <Image
            style={[styles.artistImage, styles.leftMargin]}
            source={{ uri: data.image[2]['#text'] }}
          />
          <Content contentContainerStyle={styles.albumMetaFlex}>
            <Image source={musician} style={styles.icon} />
            <Text style={styles.albumArtistNameHead}>{data.artist}</Text>
          </Content>
          <Content contentContainerStyle={styles.artistMetaData}>
            {this.renderAlbumTags()}
          </Content>
          {this.renderAlbumTracks()}
          {this.renderWikiData()}
        </Content>
      );
    }
  }

  render() {
    return <Content>{this.renderAlbum()}</Content>;
  }
}

const mapStateToProps = state => {
  return {
    loading: state.artist.loading.singleAlbum,
    album: state.artist.singleAlbum
  };
};

export default connect(mapStateToProps)(SingleAlbumMain);
