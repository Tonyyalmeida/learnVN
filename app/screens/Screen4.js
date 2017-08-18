import React, { Component } from 'react';
import { Alert , StyleSheet, Button, View, Text, Animated, TouchableOpacity, Slider, Dimensions, Image} from 'react-native';
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
    currentIndex: 0
    };
  }
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

renderHalf() {
  return (
     <View>
<Text>
{this.state.sessionWordList[this.state.currentIndex].name1}
</Text>
<Button 
buttonStyle={styles.button}
onPress={() => {this.setState({renderFull : !this.state.renderFull})}}
title="Press me"></Button>
      </View> 
  )
}
renderFull() {
  return (
     <View style={{flex: 1, backgroundColor: '#374046', flexDirection: 'column'}}>
      <View style={styles.wordContainer}><Text>
            {this.state.sessionWordList[this.state.currentIndex].name1}
            </Text>
      <Text>
            {this.state.sessionWordList[this.state.currentIndex].name2}
      </Text>
     </View> 
     <View style={styles.buttonContainer}>
      <View style={styles.button}>
          <Button color='#dd4b39' onPress={() => {this.setState({renderFull : !this.state.renderFull, currentIndex: this.state.currentIndex + 1})}}
              title="Yes!">
          </Button>
      </View>
      <View style={styles.button}>
          <Button color='#dd4b39'onPress={this.showToastComponent} title="No!">
          </Button>      
      </View> 
     </View> 
     <View style={styles.statisticsContainer}></View>
    </View>
  )
}

 render() {
    if (this.state.renderFull)
      return this.renderHalf();
    else { return this.renderFull()}
  }}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  button: {
    width: 150,
    backgroundColor: '#1EAAF1',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: 'center',
    flex: 2,
    backgroundColor: '#73d4e3',
  },
    wordContainer: {
    alignItems: 'center',
    justifyContent: "center",
    height: 150,
    flex: 3
  },
    statisticsContainer: {
    alignItems: 'center',
    justifyContent: "center",
    height: 150,
    flex: 1,
    backgroundColor: '#FCBF2E'
  },

});