import React, { Component } from 'react';
import { Alert , StyleSheet, Button, View, Text, Animated, TouchableOpacity, Slider, Dimensions, Image} from 'react-native';
import Interactable from 'react-native-interactable';

const Screen = Dimensions.get('window');

export default class RowActions1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderFull : true,
      en : "Hallo",
      vn: this.props.count
    };
  }
renderHalf() {
  return (
     <View>
<Text>
{this.state.en}
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
{this.state.en}
</Text>
<Text>
{this.state.vn}
</Text>
<Button 
onPress={() => {this.setState({renderFull : !this.state.renderFull})}}
title="Next"></Button>
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