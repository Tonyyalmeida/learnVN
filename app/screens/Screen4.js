import React, { Component } from 'react';
import { Alert , StyleSheet, Button, View, Text, Animated, TouchableOpacity, Slider, Dimensions, Image} from 'react-native';
import Interactable from 'react-native-interactable';

const Screen = Dimensions.get('window');

export default class RowActions1 extends Component {
  constructor(props) {
    super(props);
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
renderHalf() {
  return (
     <View>
<Text>
{this.state.sessionWordList[this.state.currentIndex].name1}
</Text>
<Button 
onPress={() => {this.setState({renderFull : !this.state.renderFull})}}
title="Press me"></Button>
      </View> 
  )
}
renderFull() {
  return (
     <View>
     <Text>
{this.state.sessionWordList[this.state.currentIndex].name1}
</Text>
<Text>
{this.state.sessionWordList[this.state.currentIndex].name2}
</Text>
<Button 
onPress={() => {this.setState({renderFull : !this.state.renderFull, currentIndex: this.state.currentIndex + 1})}}
title="Yes"></Button>
<Button 
onPress={() => {Alert.alert("hi")}}
title="No"></Button>
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
  rowContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#eeeeee'
  },
  rowIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#73d4e3',
    margin: 20
  },
  rowTitle: {
    fontWeight: 'bold',
    fontSize: 20
  },
  rowSubtitle: {
    fontSize: 18,
    color: 'gray'
  },
  button: {
    width: 75,
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonImage: {
    width: 40,
    height: 40
  },
  playground: {
    marginTop: Screen.height <= 500 ? 0 : 80,
    padding: 20,
    width: Screen.width - 40,
    backgroundColor: '#5894f3',
    alignItems: 'stretch',
    alignSelf: 'center'
  },
  playgroundLabel: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 15
  },
  slider: {
    height: 40
  }
});