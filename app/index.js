import { Navigation } from 'react-native-navigation';

import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Screen4 from './screens/Screen4 - Copy';
import Screen5 from './screens/Screen5';
import Screen6 from './screens/Screen6';
import Provider from './stores/MobxRnnProvider';
import Store from './stores/index';
import Icon from "react-native-vector-icons/Ionicons";
var homeIcon;
var sessionIcon;
var fabIcon;
var galleryIcon;
export default class App {
  constructor() {
    this._populateIcons().then(() => {
      // Start app only if all icons are loaded
      this.startApp();
    }).catch((error) => {
      console.error(error);
    });
  } // pattern to call startApp() after polulate is done;
  _populateIcons = function () {
    return new Promise(function (resolve, reject) {
      Promise.all(
        [
          Icon.getImageSource('ios-baseball', 30),
          Icon.getImageSource('ios-cafe', 30),
          Icon.getImageSource('ios-add', 30),
          Icon.getImageSource('ios-chatbubbles-outline', 30)
        ]
      ).then((values) => {
        homeIcon = values[0];
        sessionIcon = values[1];
        fabIcon = values[2];
        galleryIcon = values[3];
        resolve(true);
      }).catch((error) => {
        console.log(error);
        reject(error);
      }).done();
    });
  };
startApp() {

  Navigation.registerComponent('Screen1', () => Screen1, Store, Provider);
  Navigation.registerComponent('Screen2', () => Screen2, Store, Provider);
  Navigation.registerComponent('Screen3', () => Screen3, Store, Provider);
  Navigation.registerComponent('Screen4', () => Screen4, Store, Provider);
  Navigation.registerComponent('Screen5', () => Screen5, Store, Provider);
  Navigation.registerComponent('Screen6', () => Screen6, Store, Provider);
  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'Wordlist1a',
        screen: 'Screen1',
        icon: homeIcon,
        selectedIcon: require('./images/icon1.png'),
        title: 'Wordlist',
        navigatorButtons: { 
          fab: {
    collapsedId: 'share',
    collapsedIcon: fabIcon,
    backgroundColor: '#607D8B'
  }}
      },
      {
        label: 'Study',
        screen: 'Screen2',
        icon: sessionIcon,
        selectedIcon: require('./images/icon2.png'),
        title: 'Study',
      },
         {
        label: 'Study 2',
        screen: 'Screen4',
        icon: require('./images/icon1.png'),
        selectedIcon: require('./images/icon2.png'),
        title: 'Study Session',
      },
       {
        label: 'Animations',
        screen: 'Screen5',
        icon: galleryIcon,
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
}