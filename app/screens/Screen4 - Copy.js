import React, { Component } from 'react';
import {Alert , StyleSheet, Button, View, Text, Animated, TouchableOpacity, Slider, Dimensions, Image, Easing} from 'react-native';
import Interactable from 'react-native-interactable';

const Screen = Dimensions.get('window');

export default class RowActions1 extends Component {
  constructor(props) {
    super(props);
    this.showToastComponent = this.showToastComponent.bind(this);
    this.open = this.open.bind(this);
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
    open: false
    };
  }
  open () {
    this.setState({open: !this.state.open});
    console.log(Screen)
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
      <Text>Open: 5</Text></View><View style={styles.statisticsItemContainer}><Text>Completed: 121</Text>
      </View></View>
<View style={styles.wordContainer}>
        <View style={{flex: 1}}>
            <Text style={{textAlign: "center", fontSize: 12}}>English:</Text>
            <Text style={{textAlign: "center", fontSize: 20}}>{this.state.sessionWordList[this.state.currentIndex].name1}</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'column'}}>
            <TouchableOpacity activeOpacity={1} style={{bottom: 20, position: "absolute", zIndex: 2}} onPress={this.open}>
               <FadeInView handleOpen={this.open} open={this.state.open}></FadeInView>
            </TouchableOpacity>
            <Text style={{textAlign: "center"}}>Vietnamese: {this.state.sessionWordList[this.state.currentIndex].name2}</Text>
        </View>
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
      duration: 500,
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
          backgroundColor: 'grey',
          height: 150,
          width: Screen.width - 40,
        }}>
        <Button title={"Press me to see all"} onPress={ () => this.props.handleOpen()}></Button>
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
          backgroundColor: 'grey',
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
const isOpend = this.props.open;
if (isOpend) {
return this.renderFull();
}
else
return this.renderClosed()}
}