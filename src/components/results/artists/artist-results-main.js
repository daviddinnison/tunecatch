// react
import React from 'react';
import { connect } from 'react-redux';

// react native
import { FlatList } from 'react-native';
import { Content, Text } from 'native-base';

// components
import OriginalArtistMain from './original-artist-main';
import SimilarArtistResult from './similar-artist-result';

// styles
import styles from './styles/main';

class ArtistResultsMain extends React.Component {
  renderSimilarArtists() {
    if (!this.props.similarArtists.length) {
      return (
        <Text style={styles.undefinedData}>
          This artist does not have any similar artists....yet. This may be due
          to the artist being recently listed on Last.fm. Please try another
          search.
        </Text>
      );
    } else {
      return (
        <FlatList
          data={this.props.similarArtists.slice(0, 5)}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => (
            <SimilarArtistResult
              name={item.name}
              match={item.match}
              image={item.image[2]['#text']}
            />
          )}
        />
      );
    }
  }

  render() {
    return (
      <Content>
        <OriginalArtistMain />
        {this.renderSimilarArtists()}
      </Content>
    );
  }
}

const mapStateToProps = state => {
  return {
    similarArtists: state.artist.similarArtists
  };
};

export default connect(mapStateToProps)(ArtistResultsMain);
