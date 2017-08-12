import Container from '../components/Container';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { observer, inject } from 'mobx-react/native';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
  AsyncStorage, 
  FlatList,
} from 'react-native';
import { Button, List, ListItem, FormLabel, FormInput, Icon } from 'react-native-elements';
import { Provider } from 'mobx-react';

@inject("store") @observer
class HI extends Component {
   constructor(props) {
    super(props);
    this.state = { 
      list: [
        {id: "1", name1: "Paying", name2: "The Bills"},
        {id: "2", name1: "Paasdswaying", name2: "The Biqwellsads"},
        {id: "3", name1: "Paasdsqaying", name2: "The Biqwellsads"},
        {id: "4", name1: "Paasdseeaying", name2: "The Billsads"},
        {id: "6", name1: "Paasdsqqwaying", name2: "The Biqwellsads"},
        {id: "7", name1: "Paasdsawqying", name2: "The Biqwewqllsads"},
        {id: "8", name1: "Paasdsqaying", name2: "The Biwqeqwllsads"},
        {id: "9", name1: "Paeqasdsaying", name2: "The Billsads"},
        {id: "10", name1: "Paasdsaying", name2: "The Biwqewqllsads"},   
        {id: "11", name1: "Paasdseqwaying", name2: "The Bqweillsads"}],
}};
handlePress = (a,b,c,d) => {
this.props.navigator.push({
  screen: 'Screen3', // unique ID registered with Navigation.registerScreen
  title: a, // navigation bar title of the pushed screen (optional)
  passProps: {a,b,d}, // Object that will be passed as props to the pushed screen (optional)
  animated: true, // does the push have transition animation or does it happen immediately (optional)
  animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the push have different transition animation (optional)
  backButtonTitle: undefined, // override the back button title (optional)
  backButtonHidden: false, // hide the back button altogether (optional)
  navigatorStyle: {}, // override the navigator style for the pushed screen (optional)
  navigatorButtons: {} // override the nav buttons for the pushed screen (optional)
});
};
render() {
  return(
      <FlatList
      data={this.props.store.listing}
      keyExtractor = {(item) => item.id}
      renderItem={ 
        ({item}) => (
        <ListItemComponent moreMe={this.handlePress} item={item} key={item.id}/>
        )} 
      />)}
}

let ListItemComponent = props => {
return (<TouchableOpacity onPress={ () => props.moreMe(props.item.name1, props.item.id, props.index, props.item.name2)}><ListItem title={props.item.name1} subtitle={props.item.name2} ></ListItem></TouchableOpacity>
)
}


export default HI;