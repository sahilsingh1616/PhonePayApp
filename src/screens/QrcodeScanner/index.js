import { StatusBar, StyleSheet,FlatList, Text,TouchableOpacity,Image, View } from 'react-native'
import React,{useState} from 'react'
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters'


const Photo=require('../../../assets/images/flash.png')
const Photo1=require('../../../assets/images/noflash.png')


const QrCodeScanner = ({navigation}) => {
    const [image,setImage]=useState(true);

    const Tranverse = () => {
        setImage(!image)
    }

  return (
  
    <View style={styles.mainContainer}>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "purple" translucent = {true}/>
     <View style={styles.header}>
     <View style={styles.subHeader}>

     <TouchableOpacity onPress={()=>navigation.goBack()}>

        <Image source={require('../../../assets/images/back.png')} style={styles.backbtn}/>
     </TouchableOpacity>

     <Text style={styles.title}>Scan any OR</Text>

     <TouchableOpacity>

   

<Image source={require('../../../assets/images/help.png')} style={styles.backbtn}/>


</TouchableOpacity>

     </View>


     </View>
     <View style={styles.options}>
     <Image source={require('../../../assets/images/photo.png')} style={styles.backbtn}/>
     <TouchableOpacity onPress={()=>Tranverse()}>
     <Image source={image?Photo:Photo1} style={[styles.backbtn,{marginLeft:scale(30)}]}/>

     </TouchableOpacity>

     </View>

     <View style={styles.ScannerView}>
     <TouchableOpacity>
<Image source={require('../../../assets/images/scan.png')} style={{width:350,height:350}}/>
</TouchableOpacity>
     </View>

     <View style={styles.recentList}>
     <Text style={[styles.title,{marginLeft:moderateScale(20),fontWeight:'600'}]}>Recents</Text>

     <View>
        <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={{marginBottom:moderateVerticalScale(20),marginTop:moderateVerticalScale(10)}}
            data={[1,1,1,1,1,1]}
            renderItem={({ item, index }) => {
            return (
                <View style={styles.recentItem}>
                <TouchableOpacity onPress={()=>navigation.navigate('PayNow')} style={styles.nameView}>
                <Text style={styles.nameChar}>{index==0? "A":index==1?"B":"C"}</Text>
                </TouchableOpacity>
                <Text style={styles.name}>{'Sahil'}</Text>
                </View>

            )
            }}
        />
     </View>


     </View>
    </View>
  )
}

export default QrCodeScanner

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'rgba(0,0,0,.5)'
    },

header:{
    width:'100%',
    height:verticalScale(75),
    backgroundColor:'purple',
    justifyContent:'flex-end'
},
subHeader:{
    width:'100%',
    height:verticalScale(50),
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingLeft:moderateScale(15),
    paddingRight:moderateScale(15)
},
backbtn:{
    width:scale(24),
    height:scale(24),
    justifyContent:'center',
    alignItems:'center',
    tintColor:'white'

},
title:{
    color:'white',
    fontSize:moderateScale(20)
},
options:{
    flexDirection:'row',
    alignSelf:'center',
    marginTop:moderateVerticalScale(30)
},

recentList:{
    position:'absolute',
    bottom:10
},

ScannerView:{flex:1,alignItems:'center',marginTop:moderateScale(30)
},

nameView:{
    width:scale(50),
    height:scale(50),
    borderRadius:scale(25),
    backgroundColor:'yellow',
    justifyContent:'center',
    alignItems:'center'
},
recentItem:{
    marginLeft:scale(20),
    alignItems:'center'
},

nameChar:{
    fontSize:30,
    fontWeight:'600',
    color:'black',
   // marginTop:moderateVerticalScale(1)
},
name:{
fontSize:18,
fontWeight:'600',
color:'white',
marginTop:moderateVerticalScale(5)
}


})