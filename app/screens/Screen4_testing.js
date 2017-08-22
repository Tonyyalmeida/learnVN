import React, { Component } from 'react';
import {Alert , StyleSheet, Button, View, Text, Animated, TouchableOpacity, Slider, Dimensions, Image, Easing} from 'react-native';
import Interactable from 'react-native-interactable';

const Screen = Dimensions.get('window');

export default class RowActions1 extends Component {
  constructor(props) {
    super(props);
  }

 render() {
 return (
   <View style={{flex: 1, backgroundColor: 'gray'}}>
     
      <View style={{backgroundColor: 'white', height: 200}}></View>
      <View>
      <Text>Hi</Text>
      <View style={{position: 'absolute', backgroundColor: 'red', height: 20, width: 20}}></View>
      </View>
   </View>
 )
  }}