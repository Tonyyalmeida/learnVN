import React from 'react';
import { Animated, Text, View, Image, Easing, Button } from 'react-native';


class FadeInView extends React.Component {
  constructor () {
  super()
  this.animate = this.animate.bind(this);
  this.changeIndex = this.changeIndex.bind(this);
  this.animatedValue = new Animated.Value(0)
  this.state = {
      renderWhich: 0
    };
}
  componentDidMount() {
  this.animate();  
}
changeIndex() {
if (this.state.renderWhich == 0) {this.setState({renderWhich: 1}, this.animate())}
else this.setState({renderWhich: 0}, this.animate())
}
animate () {
  this.animatedValue.setValue(0)
  Animated.timing(
    this.animatedValue,
    {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear
    }
  ).start(this.changeIndex);
}
  render() {
    const rotateY = this.animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['0deg', '45deg', '90deg']
  })

    return (
      <View style={{height: 50}}>
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          transform: [{rotateY}]         // Bind opacity to animated value
        }}
      >
        {this.props.children[this.state.renderWhich]}
      </Animated.View>
      <Button title={"animate"} onPress={this.animate}></Button>
      </View>
    );
  }
}

// You can then use your `FadeInView` in place of a `View` in your components:
export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
          <Image  source={require('../images/icon1_selected.png')}></Image>
          <Image  source={require('../images/icon1.png')}></Image>
        </FadeInView>
      </View>
    )
  }
}