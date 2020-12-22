import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import CustomSidebarMenu from './CustomSidebarMenu';
import SettingsScreen from '../screens/SettingsScreen';
import NotificationScreen from '../screens/NotificationScreen';
import MyDonationScreen from '../screens/MyDonateScreen';

export const AppDrawer = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator
  },
  Settings : {
    screen : SettingsScreen
  },
  MyDonations : {
    screen : MyDonationScreen
  },
  NotificationScreen : {
    screen : NotificationScreen
  },
  },
  {
    contentComponent : CustomSidebarMenu
  },
  {
    initialRouteName : 'Home'
})