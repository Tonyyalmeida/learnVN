import React, { Component } from 'react';
import { Text } from 'react-native';
import Container from '../components/Container';

class Screen extends Component {
  handlePress = () => {
    this.props.navigator.showModal({
      screen: 'Screen4',
      title: 'Screen 4',
    });
  };

  render() {
    return (
      <Container
        backgroundColor="#067a46"
        displayText={this.props.d}
        onPress={this.handlePress}>
      <Text>hiasaaaaaaaaaaaaaaaaaaaaaaaa</Text>
      </Container>
    );
  }
}

export default Screen;
