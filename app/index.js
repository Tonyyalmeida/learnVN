import { Navigation } from 'react-native-navigation';

import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Screen4 from './screens/Screen4';
import Provider from './stores/MobxRnnProvider';
import Store from './stores/store';

export default () => {
  Navigation.registerComponent('Screen1', () => Screen1, Store, Provider);
  Navigation.registerComponent('Screen2', () => Screen2, Store, Provider);
  Navigation.registerComponent('Screen3', () => Screen3, Store, Provider);
  Navigation.registerComponent('Screen4', () => Screen4, Store, Provider);
  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'Wordlist',
        screen: 'Screen1',
        icon: require('./images/icon1.png'),
        selectedIcon: require('./images/icon1.png'),
        title: 'Wordlist',
        navigatorButtons: { 
          fab: {
    collapsedId: 'share',
    collapsedIcon: require('./images/icon1.png'),
    backgroundColor: '#607D8B'
  }}
      },
      {
        label: 'Study',
        screen: 'Screen2',
        icon: require('./images/icon1.png'),
        selectedIcon: require('./images/icon2.png'),
        title: 'Study',
      },
         {
        label: 'Animations',
        screen: 'Screen4',
        icon: require('./images/icon1.png'),
        selectedIcon: require('./images/icon2.png'),
        title: 'Animations',
      }
    ],
     appStyle: {
    tabBarHidden: false,
    tabBarBackgroundColor: '#0f2362',
    tabBarButtonColor: '#ffffff',
    tabBarSelectedButtonColor: '#b26976',
    tabBarTranslucent: true,
    forceTitlesDisplay: true,
   },
   drawer: { // optional, add this if you want a side menu drawer in your app
    left: { // optional, define if you want a drawer from the left
      screen: 'Screen3', // unique ID registered with Navigation.registerScreen
      passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
    },
    type: 'MMDrawer', // optional, iOS only, types: 'TheSideBar', 'MMDrawer' default: 'MMDrawer'
    animationType: 'door', //optional, iOS only, for MMDrawer: 'door', 'parallax', 'slide', 'slide-and-scale'
                                        // for TheSideBar: 'airbnb', 'facebook', 'luvocracy','wunder-list'
    disableOpenGesture: false // optional, can the drawer be opened with a swipe instead of button
  },
  passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
  animationType: 'slide-down' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
});

}