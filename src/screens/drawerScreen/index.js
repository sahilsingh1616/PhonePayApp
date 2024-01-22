import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';

import Homescreen from '../homescreen';
import SettingScreen from '../settingscreen';

const Drawer=createDrawerNavigator();

const DrawerBar = () => {
  return (

    <NavigationContainer>
    <Drawer.Navigator  screenOptions={{headerShown:false,drawerStyle:{backgroundColor:'yellow'},sceneContainerStyle:{backgroundColor:'green'}}}>

        <Drawer.Screen name='homescreen' component={Homescreen}/>
        <Drawer.Screen name='settingscreen' component={SettingScreen}/>
    </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default DrawerBar

const styles = StyleSheet.create({})