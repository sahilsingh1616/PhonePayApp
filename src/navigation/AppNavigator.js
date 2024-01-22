import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import MainContainer from '../components/Maincontainer';
import Home from '../screens/Home';
import Store from '../screens/Store';
import Insurance from '../screens/Insurance';
import Wealth from '../screens/Wealth';
import History from '../screens/History';
import QrCodeScanner from '../screens/QrcodeScanner';
import QrCodeScanner1 from '../screens/QrcodeScanner/index1';
import PayNow from '../screens/PayNow';
import UpiPass from '../screens/UpiPass';
import Submit from '../screens/Submit';
import Transaction from '../screens/Transaction';
import RecieveMoney from '../screens/RecieveMoney';

const Stack=createStackNavigator();



const AppNavigator = () => {
  return (
 <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Maincontainer' component={MainContainer}/>

        <Stack.Screen name='QrcodeScanner' component={QrCodeScanner}/>
        
        <Stack.Screen name='PayNow' component={PayNow}/>


        
<Stack.Screen name='RecieveMoney' component={RecieveMoney}/>
        {/* <Stack.Screen name='Home' component={Home}/>

        
        <Stack.Screen name='Store' component={Store}/>
        <Stack.Screen name='Insurance' component={Insurance}/>
        <Stack.Screen name='Wealth' component={Wealth}/>
        <Stack.Screen name='History' component={History}/> */}
        <Stack.Screen name='UpiPass' component={UpiPass}/>
        <Stack.Screen name='Submit' component={Submit}/>
        <Stack.Screen name='Transaction' component={Transaction}/>
        
        
    </Stack.Navigator>
 </NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})