import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Homescreen from './src/screens/homescreen'
import DrawerBar from './src/screens/drawerScreen'
import DeepLinking from './src/screens/deeplinking'
import MainContainer from './src/components/Maincontainer'
import AppNavigator from './src/navigation/AppNavigator'

const App = () => {
  return (
//<DrawerBar/>
 //<Homescreen/> 
//  <DeepLinking/>

<AppNavigator/>
  )
}

export default App

const styles = StyleSheet.create({})

