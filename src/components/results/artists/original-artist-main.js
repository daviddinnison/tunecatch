//react
import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Text } from 'native-base';

// styles
import styles from './styles/main';

class OriginalArtistMain extends React.Component {
  renderTags() {
    if (this.props.tags.length !== 0) {
      const tagData = this.props.tags.tag.map((item, index) => (
        <Text key={index} style={styles.renderedTagSingle}>
          {item.name}
        </Text>
      ));
      return <View style={styles.renderedTags}>{tagData}</View>;
    } else {
      return;
    }
  }

  render() {
    return (
      <View>
        <Text style={[styles.originalArtistHeader, styles.leftMargin, styles.shadow]}>
          {this.props.originalArtist}
        </Text>
        {this.renderTags()}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    originalArtist: state.artist.originalArtist,
    tags: state.artist.baseComparisonTags
  };
};

export default connect(mapStateToProps)(OriginalArtistMain);
