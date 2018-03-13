//react
import React from 'react';

//react native
import { Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardItem, Container, Text } from 'native-base';

//styles
import styles from './styles/main';

class SimilarArtistResult extends React.Component {
  render() {
    return (
      <Card style={styles.resultContainer}>
        <Container style={styles.resultInfo}>
          <CardItem>
            <Text
              style={styles.resultName}
              onPress={() => {
                Actions.artistInfo({ route: this.props.name });
              }}
            >
              {this.props.name}
            </Text>
          </CardItem>
          <CardItem>
            <Text>{(this.props.match * 100).toFixed(2)}% match</Text>
          </CardItem>
        </Container>
        <Image style={styles.image} source={{ uri: this.props.image }} />
      </Card>
    );
  }
}

export default SimilarArtistResult;
