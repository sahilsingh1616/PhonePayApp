import { StyleSheet, Text, View, useAnimatedValue } from 'react-native'
import React, { Children } from 'react'
import Animated ,{useAnimatedStyle,interpolate} from 'react-native-reanimated';
import {useDrawerProgress} from '@react-navigation/drawer';

const DrawerScreenWrapper = ({children}) => {

const progress=useDrawerProgress();
const animatedStyle=useAnimatedStyle (()=>({
    transform:[
        {scale:interpolate(progress.value,[0,1],[1,0.8],'clamp')},
        {rotateY:interpolate(progress.value,[0,1],[1,-0.2],'clamp')}
    ],
    borderRadius:20,
    overflow:'hidden'

}));

  return (
<Animated.View style={[styles.container,animatedStyle]}>
{Children}
</Animated.View>
  )
}

export default DrawerScreenWrapper

const styles = StyleSheet.create({
    container:{flex:1}
})