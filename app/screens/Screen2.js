import React, { Component } from 'react';
import { View, Text  } from 'react-native';
import Container from '../components/Container';
import { Slider, Button } from 'react-native-elements'

class Screen extends Component {
 constructor(props) {
    super(props);
    this.state = {itemCount: 10};
 }
 incremement () {
 const newCount = this.state.itemCount.splice + 1;
 this.setState({itemCount: newCount})
}
 decremement () {
 const newCount = this.state.itemCount.splice - 1;
 this.setState({itemCount: newCount})
 }
   render() {
    return (
<View style={{flex: 1, alignSelf: 'center', justifyContent: 'center'}}>
  <Slider
    value={this.state.itemCount}
    onValueChange={(value) => this.setState({itemCount: value})}
    minimumValue={5}
    maximumValue={15}
    step={1} />
  <Text style={{textAlign:'center'}}>Value: {this.state.itemCount}</Text>
  <Button
  raised
  icon={{name: 'play-arrow'}}
  title='BUTTON WITH ICON'
  backgroundColor="lightgreen"
   />
</View>
    );
  }
}

export default Screen;
