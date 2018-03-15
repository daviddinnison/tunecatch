//react
import React from 'react';
import { connect } from 'react-redux';

//react native
import { StyleSheet } from 'react-native';
import { Content, Text } from 'native-base';
import HTMLView from 'react-native-htmlview';

// styles
import styles from './styles/main';

class Bio extends React.Component {
  render() {
    return (
      <Content style={[styles.container, styles.boxShadow]}>
        {/* <Text style={styles.bioText}>{this.props.bio.content}</Text> */}
        <HTMLView value={this.props.bio.content} stylesheet={htmlStyles}/>
      </Content>
    );
  }
}

const htmlStyles = StyleSheet.create({
  // a: {
  //   fontWeight: '300',
  //   color: '#FF3366' // make links coloured pink
  // },
});

const mapStateToProps = state => {
  return {
    bio: state.artist.similarArtistInfo.bio
  };
};

export default connect(mapStateToProps)(Bio);
