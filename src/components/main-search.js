//react
import React from "react";
import { connect } from "react-redux";

//react native
import { Keyboard } from "react-native";
import {
  Button,
  Container,
  Content,
  Icon,
  Input,
  Item,
  SearchBar,
  Text
} from "native-base";

// components
import Loader from "./common/loader";

// actions
import { getSimilarArtist } from "./../actions/artist";

// style
import styles from "./styles/main";

class MainSearch extends React.Component {
  state = {
      userInput: "18 Carat Affair"
    };

  makeSearch() {
    Keyboard.dismiss();
    this.props.dispatch(getSimilarArtist(this.state.userInput));
  }

  renderButtonText() {
    if (this.props.loading) {
      return <Loader />;
    } else {
      return <Text>Catch me some tunes</Text>;
    }
  }

  renderError() {
    if(this.props.error) {
      return <Text>{this.props.error}</Text>
    }
  }

  render() {
    return (
      <Container>
        <Content>
          <Item style={styles.input}>
            <Icon name="ios-search" />
            <Input
              placeholder="Artist name"
              onChangeText={input =>
                this.setState({
                  userInput: input
                })
              }
              />
          </Item>
          <Button
            full
            style={styles.button}
            onPress={() => {
              this.makeSearch();
            }}
            >
            {this.renderButtonText()}
          </Button>
          {this.renderError()}
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.artist.error.initialSearch,
    loading: state.artist.loading.initialSearch
  };
};

export default connect(mapStateToProps)(MainSearch);
