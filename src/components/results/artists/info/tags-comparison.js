// react
import React from 'react';
import { connect } from 'react-redux';

// react native
import { StyleSheet, Text, View } from 'react-native';

// compoents
import Loader from '../../../common/loader';

// styles
import styles from './styles/main';

class TagsComparison extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commonTags: []
    };
  }

  renderComparison() {
    if (this.props.loadingTracks) {
      return <Loader />;
    } else {
      // comparing tags in common. convert array of objects into arrays of tags.
      const baseRaw = this.props.baseComparisonTags.tag;
      const compareToRaw = this.props.similarArtistTags.tag;

      let compareTo = [];
      let base = [];
      //commented out for debugging
      // let commonTags = [];
      // for (let i = 0; i < baseRaw.length; i++) {
      //   base.push(baseRaw[i].name);
      // }

      // for (let i = 0; i < compareToRaw.length; i++) {
      //   compareTo.push(compareToRaw[i].name);
      // }

      // for (let i = 0; i < compareTo.length; i++) {
      //   for (let j = 0; j < base.length; j++) {
      //     if (compareTo[i] === base[j]) {
      //       commonTags.push(base[j]);
      //     }
      //   }
      // }

      const commonTags=['test', 'test', 'testtest', 'test', 'test']
      //MAP FUNCTION FOR COMMON TAGS
      const renderCommonTags = commonTags.map((item, index) => (
        <Text style={styles.renderedTagSingle} key={index}>{item}</Text>
      ));
      //RETURN MAP FUNCTION
      return <View style={styles.renderedTags}>{renderCommonTags}</View>;
    }
  }

  render() {
    return (
      <View style={styles.tagsContainer}>
        <Text style={styles.infoHeader}>
          Common tags with {this.props.originalArtist}
        </Text>
        {this.renderComparison()}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    baseComparisonTags: state.artist.baseComparisonTags,
    loadingTracks: state.artist.loading.topTracks,
    originalArtist: state.artist.originalArtist,
    similarArtistTags: state.artist.similarArtistInfo.tags
  };
};

export default connect(mapStateToProps)(TagsComparison);
