import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { moderateScale, scale } from 'react-native-size-matters'

const Submit = ({navigation,route}) => {
   const [NXTstate,setState]=useState(route?.params?.Data);
   console.log(NXTstate)
  return (
    <View style={{flex:1,backgroundColor:'#26A708',justifyContent:'center',alignItems:'center'}}>
    <Image source={require('../../../assets/images/whitetick.png')} style={{width:70,height:70,tintColor:'white'}}/>
    <Text style={{fontSize:30,color:'white',textAlign:'center',marginTop:scale(30),fontWeight:'bold'}}>Your Payment is SuccessFull{'\n'} Rs {route.params.Data} Transfer </Text>
      
     <View style={{marginTop:15}}>
        <Text style={{fontSize:17,color:'white',fontWeight:'300'}}>Your Payment will be applied on by 2:00PM Today</Text>
     </View>
          
     <View style={{marginTop:'10%'}}>
     <View style={{width:180,height:50,backgroundColor:'white',borderRadius:30,justifyContent:'center',alignItems:'center'}}>
     <Text style={{fontSize:19,color:'black',fontWeight:'600'}}>View Details</Text>

     </View>
     </View>

     <View style={{marginTop:moderateScale(40)}}>
        <TouchableOpacity style={{width:scale(300),height:80,backgroundColor:'#F5E0BD',borderRadius:8,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        <View style={{width:50,height:50,backgroundColor:'orange',borderRadius:50,justifyContent:'center',alignItems:'center',marginLeft:20}} >
        <Image source={require('../../../assets/images/reward.png')} style={{width:30,height:30,tintColor:'white'}}/>
       
             
        </View>
        <Text style={{fontSize:17,color:'black',marginLeft:10,fontWeight:'700'}}>New Reward earned!</Text>

        </View>
        <Image source={require('../../../assets/images/increase.png')} style={{width:20,height:20,tintColor:'black',marginRight:'5%'}}/>
        </TouchableOpacity>
     </View>


     <View style={{marginTop:20}}>
     <TouchableOpacity style={{width:scale(300),height:80,backgroundColor:'#D3DFFF',borderRadius:8,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        <View style={{width:50,height:50,backgroundColor:'#0D45DB',borderRadius:50,justifyContent:'center',alignItems:'center',marginLeft:20}} >
        <Image source={require('../../../assets/images/visa.png')} style={{width:30,height:30,tintColor:'white'}}/>
       
             
        </View>
        <Text style={{fontSize:17,color:'black',marginLeft:10,fontWeight:'700',textAlign:'center'}}>Register for OTP less{'\n'}Payment</Text>

        </View>
        <Image source={require('../../../assets/images/increase.png')} style={{width:20,height:20,tintColor:'black',marginRight:'5%'}}/>
        </TouchableOpacity>
     </View>

     <View style={{marginTop:'44%'}}>
        <View style={{width:scale(350),height:1,backgroundColor:'black',borderWidth:1}}>
        <View style={{width:scale(350),height:70,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity onPress={()=>navigation.navigate('Transaction',{DONE:NXTstate})}>
        <Text style={{fontSize:22,color:'black'}}>Done</Text>
</TouchableOpacity>
        </View>
        <View style={{width:scale(350),height:1,backgroundColor:'black'}}>

        </View>

        </View>
     </View>


    </View>
  )
}

export default Submit

const styles = StyleSheet.create({
  
})