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
import { Button, List, ListItem, FormLabel, FormInput } from 'react-native-elements';
import { Provider } from 'mobx-react';
import Icon from 'react-native-vector-icons/Ionicons';

function ExampleView(props) {
  return (<Text>Lorem <Icon name="ios-book" color="#4F8EF7" /> Ipsum</Text>);
}

@inject("generalWordStore") @observer
class HI extends Component {
   constructor(props) {
    super(props);
    this.state = { 
      list: []     
}};
componentDidMount() {
console.log('this is where i should call a function in store to call API and set listing')
}
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
    <View>
      <ExampleView/>
      <FlatList
      data={this.props.generalWordStore.listing}
      keyExtractor = {(item) => item.id}
      renderItem={ 
        ({item}) => (
        <ListItemComponent moreMe={this.handlePress} item={item} key={item.id}/>
        )} 
      ></FlatList></View>)}
}

let ListItemComponent = props => {
return (<TouchableOpacity onPress={ () => props.moreMe(props.item.name1, props.item.id, props.index, props.item.name2)}><ListItem badge={{ value: props.item.status, textStyle: { color: 'orange' }}} title={props.item.name1} subtitle={props.item.name2} ></ListItem></TouchableOpacity>
)
}


export default HI;