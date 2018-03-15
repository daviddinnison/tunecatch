//react
import React, { Component } from 'react';

//react-native
import { Router, Stack, Scene } from 'react-native-router-flux';

//components
import Launch from './components/launch';
import ArtistResultsMain from './components/results/artists/artist-results-main';
import ArtistInfoMain from './components/results/artists/info/artist-info-main';
import OriginalArtistInfo from './components/results/artists/original-artist-main';
import SingleAlbumMain from './components/results/artists/info/single-album-main';
import SingleTrackMain from './components/results/artists/info/single-track-main';

class Gateway extends Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="artistInfo" component={ArtistInfoMain} />
          <Scene key="launch" component={Launch} />
          <Scene key="singleAlbum" component={SingleAlbumMain} />
          <Scene key="singleTrackMain" component={SingleTrackMain} />
          <Scene key="similarArtists" component={ArtistResultsMain} />
          <Scene key="originalArtistInfo" component={OriginalArtistInfo} />
        </Stack>
      </Router>
    );
  }
}

export default Gateway;
