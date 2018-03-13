//react
import React from 'react';
import { connect } from 'react-redux';

//react native
import { Content, Text } from 'native-base';

// styles
import styles from './styles/main';

class Bio extends React.Component {
  render() {
    return (
      <Content style={[styles.container, styles.boxShadow]}>
        <Text style={styles.bioText}>{this.props.bio.content}</Text>
      </Content>
    );
  }
}

const mapStateToProps = state => {
  return {
    bio: state.artist.similarArtistInfo.bio
  };
};

export default connect(mapStateToProps)(Bio);
