
import { Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
 import React, { useRef, useState } from 'react'
//mport DrawerScreenWrapper from '../../DrawerScreenWrapper'

 const Homescreen = ({navigation}) => {

return(

  // <DrawerScreenWrapper>
    <SafeAreaView style={{flex:1,backgroundColor:'aqua'}}>

    <View style={{marginTop:'4%',marginLeft:'4%'}}>
    <TouchableOpacity onPress={()=>navigation.openDrawer()}>
    <Image source={require('../../../assets/images/sidemenu.png')} style={{width:50,height:50}}/>

</TouchableOpacity>
    </View>

    </SafeAreaView>
//</DrawerScreenWrapper>
    

    
)
 }

 export default Homescreen

 const styles = StyleSheet.create({})



// import { Animated, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React, { useRef, useState } from 'react'

// const Homescreen = () => {
//     const [showMenu, setShowMenu] = useState(false);
//     const moveToRight = useRef(new Animated.Value(1)).current
//     const scale = useRef(new Animated.Value(0)).current
//     return (
//         <View style={{ flex: 1, backgroundColor: 'red' }}>
//             <Animated.View style={{ flex: 1, backgroundColor: 'white', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,transform:[{scale:scale},{translateX:moveToRight}] }}>


//                 <View style={{ flexDirection: 'row', marginTop: 50 }}>
//                     <TouchableOpacity  style={{ marginLeft: 20 }} onPress={()=> {Animated.timing(scale,{toValue:showMenu?1:0.8,duration:300,useNativeDriver:true,}).start();
//                         Animated.timing(moveToRight,{toValue:showMenu?0:230,duration:300,useNativeDriver:true,}).start(); setShowMenu(!showMenu)
//                     }}>
//                         <Image source={require('../../../assets/images/sidemenu.png')} style={{ width: 40, height: 40 }} />
//                     </TouchableOpacity>

//                 </View>

//             </Animated.View>

//         </View>
//     )
// }

// export default Homescreen
