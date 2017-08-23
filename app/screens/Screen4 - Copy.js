import React, { Component } from 'react';
import {Alert , StyleSheet, Button, View, Text, Animated, TouchableOpacity, Slider, Dimensions, Image, Easing} from 'react-native';
import Interactable from 'react-native-interactable';
import { observer, inject } from 'mobx-react/native';

const Screen = Dimensions.get('window');

@inject("studySessionStore") @observer
export default class RowActions1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderFull : true,
      sessionWordList:  [],
    currentIndex: 0,
    };
  }
  // open () {
  //   this.setState({open: !this.state.open});
  //   console.log(Screen)
  // }
    componentWillMount() {
this.setState({sessionWordList: this.props.studySessionStore.listing});
  }
incrementIndex() {}
renderFull() {
//  let {fadeAnim}  = this.state.fadeAnim;
  return (
     <View style={{flex: 0.9, backgroundColor: "white", flexDirection: 'column'}}>
      <View style={styles.statisticsContainer}>
      <View style={styles.statisticsItemContainer}>
      <Text>Open: {this.props.studySessionStore.remainingItems}</Text></View><View style={styles.statisticsItemContainer}><Text>Done: {this.props.studySessionStore.doneItems}</Text>
      </View></View>
<View style={styles.wordContainer}>
        <View style={{flex: 1}}>
            <Text style={{textAlign: "center", fontSize: 12}}>English:</Text>
            <Text style={{textAlign: "center", fontSize: 20}}>{this.props.studySessionStore.listing[this.props.studySessionStore.currentIndex].name1}</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'column'}}>
            <TouchableOpacity activeOpacity={1} style={{bottom: 20, position: "absolute", zIndex: 2}} onPress={this.open}>
               <FadeInView open={this.props.studySessionStore.curtainOpen}></FadeInView>
            </TouchableOpacity>
            <Text style={{textAlign: "center", fontSize: 12}}>Vietnamese:</Text>
            <Text style={{textAlign: "center", fontSize: 20}}>{this.props.studySessionStore.listing[this.props.studySessionStore.currentIndex].name2}</Text>
        </View>
 </View>


     <View style={styles.buttonContainer}>
      <View style={styles.button}>
          <Button color='lightgreen' onPress={this.props.studySessionStore.handleDone}
              title="Got it right!">
          </Button>
      </View>
      <View style={styles.button}>
          <Button color='#dd4b39'onPress={this.props.studySessionStore.handleAgain} title="Try again!">
          </Button>      
      </View> 
     </View>
    </View>
  )
}

 render() {
 return this.renderFull()
  }}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  button: {
    width: 150,
    backgroundColor: '#1EAAF1',
    elevation: 1
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'mintcream',
  },
    wordContainer: {
    justifyContent: "space-around",
    alignItems: "stretch",
//    height: 200,
    flex: 3,
//    borderWidth: 1,
    elevation: 2,
    borderRadius: 9,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'column'
  },
    statisticsContainer: {
    alignItems: 'center',
    justifyContent: "space-around",
    flexDirection: 'row',
    flex: 0.5,
    backgroundColor: 'mintcream'
  },
     statisticsItemContainer: {
    elevation: 5,
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 10
  },

});
@inject("studySessionStore") @observer
class FadeInView extends React.Component {
  constructor () {
  super()
  this.animatedValue = new Animated.Value(0)
  this.animate = this.animate.bind(this);
}
  state = {
    fadeAnim: 1,  // Initial value for opacity: 0
 }
animate () {
  this.animatedValue.setValue(0)
  Animated.timing(
    this.animatedValue,
    {
      toValue: 1,
      duration: 200,
      easing: Easing.linear
    }
  ).start();
}
componentWillReceiveProps = (nextProps) => {
if (nextProps.open === true) {
this.animate();
}
  }
 
  // componentWillReceiveProps () {
  //  this.setState({fadeAnim: new Animated.Value(0), isOpend: this.props.open});
  // }
  startAnimation() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 2000,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }
 renderClosed() {
 return(<View style={{
          ...this.props.style,
  //        marginLeft: marginLeft,      // Bind opacity to animated value
          backgroundColor: 'red',
          height: 150,
          width: Screen.width - 40,
        }}>
        <Button title={"Press me to see all"} onPress={this.props.studySessionStore.toggleAnimationState}></Button>
        </View>) 
 }
  renderFull() {
  //  let { fadeAnim } = this.state;
    const marginLeft = this.animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [150, 75, 5]
  });
  const opacity = this.animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 0.7, 0.3]
  });
    return(
      <View>
      <Animated.View style={{
          ...this.props.style,
  //        marginLeft: marginLeft,      // Bind opacity to animated value
          backgroundColor: 'green',
          height: marginLeft,
          width: Screen.width - 40,
          opacity: opacity
        }}                // Special animatable View
        >
        <View>{this.props.children}
        </View>
      </Animated.View>
 </View>
  )}
  render() {
const isOpend = this.props.studySessionStore.curtainOpen;
console.log(isOpend)
if (isOpend) {
return this.renderFull();
}
else
return this.renderClosed()}
}