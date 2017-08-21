import React, { Component } from 'react';
import {Alert , StyleSheet, Button, View, Text, Animated, TouchableOpacity, Slider, Dimensions, Image, Easing} from 'react-native';
import Interactable from 'react-native-interactable';

const Screen = Dimensions.get('window');

export default class RowActions1 extends Component {
  constructor(props) {
    super(props);
    this.showToastComponent = this.showToastComponent.bind(this)
    this.state = {
      renderFull : true,
      sessionWordList:  [
    {id: "1", name1: "Nam", name2: "The Bills"},
    {id: "2", name1: "Paasdsaying", name2: "Zweites Wort"},
    {id: "3", name1: "Paasdqsaying", name2: "The Bilqelsads"},
    {id: "4", name1: "Paasdqwsaying", name2: "TDirrtesqwewqlsads"},
    {id: "6", name1: "PaHahasausang", name2: "The Billsads"},
    {id: "7", name1: "Paasdwesaying", name2: "The Billsweqads"},
    {id: "8", name1: "Psdsdsdsg", name2: "Lasuhussdfs"},
    {id: "9", name1: "JWEJDsn", name2: "The Billsqads"},     
    {id: "10", name1: "Paasdqsaying", name2: "The Bilewlsads"},   
    {id: "11", name1: "Paasdsasying", name2: "Looasjdw"}],
    currentIndex: 0,
    open: true
    };
  }
  //   componentDidMount() {
  //   Animated.timing(                  // Animate over time
  //     this.state.fadeAnim,            // The animated value to drive
  //     {
  //       toValue: 1,                   // Animate to opacity: 1 (opaque)
  //       duration: 200000,              // Make it take a while
  //     }
  //   ).start();                        // Starts the animation
  // }
incrementIndex() {}
showToastComponent (isRight) {
const text = isRight ? "Correct" : "Wrong";
this.props.navigator.showSnackbar({
  text: text,
  actionText: '+1', // optional
  actionId: 'fabClicked', // Mandatory if you've set actionText
  actionColor: 'green', // optional
  textColor: 'red', // optional
  backgroundColor: 'blue', // optional
  duration: 'short' // default is `short`. Available options: short, long, indefinite
});
}
renderFull() {
//  let {fadeAnim}  = this.state.fadeAnim;
  return (
     <View style={{flex: 0.9, backgroundColor: "white", flexDirection: 'column'}}>
      <View style={styles.statisticsContainer}>
      <View style={styles.statisticsItemContainer}>
      <Text>Open: 5</Text></View><View style={styles.statisticsItemContainer}><Text>Completed: 120</Text>
      </View></View>
      <View style={styles.wordContainer}>
      <View>
      <Text style={{fontSize: 12}}>
            English:
            </Text>
      <Text style={{fontSize: 20}}>
            {this.state.sessionWordList[this.state.currentIndex].name1}
            </Text></View>
            <FadeInView hi={this.state.currentIndex} open={this.state.open}>
      <Text style={{fontSize: 12}}>
            Vietnamese:
            </Text> 
      <Text style={{fontSize: 20}}>
            {this.state.sessionWordList[this.state.currentIndex].name2}
      </Text></FadeInView>
     </View> 
     <View style={styles.buttonContainer}>
      <View style={styles.button}>
          <Button color='lightgreen' onPress={() => {this.setState({renderFull : !this.state.renderFull, currentIndex: this.state.currentIndex + 1, open: false})}}
              title="Got it right!">
          </Button>
      </View>
      <View style={styles.button}>
          <Button color='#dd4b39'onPress={this.showToastComponent} title="Try again!">
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
    alignItems: 'flex-start',
    justifyContent: "space-around",
//    height: 200,
    flex: 3,
//    borderWidth: 1,
    elevation: 2,
    borderRadius: 9,
    paddingLeft: 20
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

class FadeInView extends React.Component {
  constructor () {
  super()
  this.animatedValue = new Animated.Value(0)
}
  state = {
    fadeAnim: 1,  // Initial value for opacity: 0
    isOpend: false }
animate () {
  this.animatedValue.setValue(0)
  Animated.timing(
    this.animatedValue,
    {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear
    }
  ).start();
}
  // componentWillReceiveProps () {
  //  this.setState({fadeAnim: new Animated.Value(0), isOpend: this.props.open});
  // }
  startAnimation() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 10000,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }
 renderClosed() {
 return(<View><Button onPress={() => {this.setState({isOpend: true}, this.animate())} }title="View all"></Button></View>) 
 }
  renderFull() {
  //  let { fadeAnim } = this.state;
    const marginLeft = this.animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [200, 20, 50]
  });
    return(
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
  //        marginLeft: marginLeft,      // Bind opacity to animated value
          backgroundColor: 'blue',
          height: marginLeft
        }}
      >
      {this.props.children}
      </Animated.View>
  )}
  render() {
const isOpend = this.state.isOpend;
if (isOpend)
{
return this.renderFull()}
else
{
 return this.renderClosed();
}
  }
}