import React, { Component } from 'react';
import { View, Text  } from 'react-native';
import Container from '../components/Container';
import { Slider, Button } from 'react-native-elements'
import { Provider } from 'mobx-react';

class Screen extends Component {
 constructor(props) {
    super(props);
    this.state = {itemCount: 11};
    //this.popNewScreen = this.popNewScreen.bind(this);
 }
 popNewScreen= () => {
  this.props.navigator.push({
  screen: 'Screen4', // unique ID registered with Navigation.registerScreen
  title: "Hi", // navigation bar title of the pushed screen (optional)
  passProps: {count: this.state.itemCount}, // Object that will be passed as props to the pushed screen (optional)
  animated: true, // does the push have transition animation or does it happen immediately (optional)
  animationType: 'slide-horizontal', // 'fade' (for both) / 'slide-horizontal' (for android) does the push have different transition animation (optional)
  backButtonTitle: undefined, // override the back button title (optional)
  backButtonHidden: false, // hide the back button altogether (optional)
  navigatorStyle: {}, // override the navigator style for the pushed screen (optional)
  navigatorButtons: {} // override the nav buttons for the pushed screen (optional)
});
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
  onPress={this.popNewScreen}
   />
</View>
    );
  }
}

export default Screen;
