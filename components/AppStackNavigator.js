import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import BookDonateScreen from '../screens/BookDonateScreen';
import RecieverDetailsScreen from '../screens/RecieverDetailsScreen';

export const AppStackNavigator = createStackNavigator({
  BookDonateScreen : {
    screen : BookDonateScreen,
    navigationOptions : {
      headerShown : false
    }
  },
  RecieverDetailsScreen : {
    screen : RecieverDetailsScreen,
    navigationOptions : {
      headerShown : false
    }
  },
  },
  {initialRouteName : 'BookDonateList'
})