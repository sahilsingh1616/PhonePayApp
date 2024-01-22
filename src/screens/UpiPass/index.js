import { StyleSheet, Text, Image, View, StatusBar,Alert, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters'
import Toast from 'react-native-toast-message';

const UpiPass = ({navigation,route}) => {
console.log(route)
  const [pin, setPin] = useState('');
  const [state,setState]=useState(route?.params?.Amount);
  console.log(state)

  // const Message=()=>{
  //   if(pin.length='') {
  //    setPin(navigation.navigate('Submit'))
  //   }
  //   Alert.alert(  
  //     'PHONE PAY',  
  //     'Please Fill Full UPI',  
  //     [  
  //         {  
  //             text: 'Cancel',  
  //             onPress: () => console.log('Cancel Pressed'),  
  //             style: 'cancel',  
  //         },  
  //         {text: 'OK', onPress: () => console.log('OK Pressed')},  
  //     ]  
  // ); 
  // }


  


  return (
    <View style={styles.container}>
     <StatusBar barStyle="dark-content" hidden={false} backgroundColor="purple" translucent={true} />
      <View style={styles.header}>
        <View style={styles.subHeader}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>

          <Text style={{ fontSize: moderateScale(20), color: 'black', marginLeft: moderateScale(20), marginTop: moderateScale(10) }}>CANCEL</Text>
</TouchableOpacity>
        </View>

      </View>

      <View style={styles.topView}>
        <View>
          <Text style={styles.BankName}>ICICI Bank</Text>
          <Text style={styles.account}>XXXXXXXX032</Text>
        </View>

        <Image source={require('../../../assets/images/upi.png')} style={styles.logo} />

      </View>

      <View style={styles.secondView}>
        <View>
          <Text style={{ color: 'black', fontWeight: '600' }}>To :</Text>
          <Text style={{ color: 'black', fontWeight: '600' }}>Sending :</Text>


        </View>

        <View style={styles.secondRightView}>
          <Text style={{ color: 'black', fontWeight: '600' }}>6283164337@paytm</Text>
          <Text style={{ color: 'black', fontWeight: '600' }}>{'₹ '+route.params.Amount}</Text>

        </View>


      </View>

      <Text style={styles.title}>ENTER 4-DIGIT UPI PIN</Text>

      <View style={styles.pinView}>
        <View style={{ width: scale(15), height: scale(15), borderRadius: scale(8), borderWidth: 0.5,backgroundColor:pin.length==1 || pin.length==2 || pin.length==3|| pin.length==4? 'black':'white' }}>

        </View>
        <View style={{ width: scale(15), height: scale(15), borderRadius: scale(8), borderWidth: 0.5, marginLeft: moderateScale(20),backgroundColor: pin.length==2 || pin.length==3|| pin.length==4? 'black':'white' }}>

        </View>

        <View style={{ width: scale(15), height: scale(15), borderRadius: scale(8), borderWidth: 0.5, marginLeft: moderateScale(20),backgroundColor: pin.length==3|| pin.length==4? 'black':'white'}}>

        </View>

        <View style={{ width: scale(15), height: scale(15), borderRadius: scale(8), borderWidth: 0.5, marginLeft: moderateScale(20),backgroundColor:pin.length==4? 'black':'white' }}>

        </View>

      </View>

      <View style={styles.bottomSheet}>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
       <Image source={require('../../../assets/images/warning.png')} style={{width:scale(20),height:scale(20),marginRight:'5%'}}/>
       <Text style={{fontSize:12,color:'grey',textAlign:'center',marginRight:'10%'}}>You are transferring money from your Central Bank{'\n'}of India Account To 6284399969</Text>
</View>
      </View>

      <View style={styles.numberpad}>
        <View style={{ flexDirection: 'row', width: '100%' }}>
          <TouchableOpacity onPress={() => {
            if (pin.length < 4) {
              setPin(pin + '1')
            }
          }} activeOpacity={1} style={styles.numberpadBtn}>
            <Text style={{ fontSize: moderateScale(25), color: 'black' }}>1</Text>
          </TouchableOpacity>


          <TouchableOpacity
          onPress={() => {
            if (pin.length < 4) {
              setPin(pin + '2')
            }
          }}
           activeOpacity={1} style={styles.numberpadBtn}>
            <Text style={{ fontSize: moderateScale(25), color: 'black' }}>2</Text>
          </TouchableOpacity>

       
          <TouchableOpacity
           onPress={() => {
            if (pin.length < 4) {
              setPin(pin + '3')
            }
          }}
           activeOpacity={1} style={styles.numberpadBtn}>
            <Text style={{ fontSize: moderateScale(25), color: 'black' }}>3</Text>
          </TouchableOpacity>





        </View>
        <View style={{ flexDirection: 'row', width: '100%' }}>
        
          <TouchableOpacity
          onPress={() => {
            if (pin.length < 4) {
              setPin(pin + '4')
            }
          }}
           activeOpacity={1} style={styles.numberpadBtn}>
            <Text style={{ fontSize: moderateScale(25), color: 'black' }}>4</Text>
          </TouchableOpacity>

         
          <TouchableOpacity
          onPress={() => {
            if (pin.length < 4) {
              setPin(pin + '5')
            }
          }}
           activeOpacity={1} style={styles.numberpadBtn}>
            <Text style={{ fontSize: moderateScale(25), color: 'black' }}>5</Text>
          </TouchableOpacity>

         
          <TouchableOpacity 
          onPress={() => {
            if (pin.length < 4) {
              setPin(pin + '6')
            }
          }}
           activeOpacity={1} style={styles.numberpadBtn}>
            <Text style={{ fontSize: moderateScale(25), color: 'black' }}>6</Text>
          </TouchableOpacity>





        </View>
        <View style={{ flexDirection: 'row', width: '100%' }}>
          <TouchableOpacity 
          onPress={() => {
            if (pin.length < 4) {
              setPin(pin + '7')
            }
          }}
           activeOpacity={1} style={styles.numberpadBtn}>
            <Text style={{ fontSize: moderateScale(25), color: 'black' }}>7</Text>
          </TouchableOpacity>

         
          <TouchableOpacity 
          onPress={() => {
            if (pin.length < 4) {
              setPin(pin + '8')
            }
          }} 
           activeOpacity={1} style={styles.numberpadBtn}>
            <Text style={{ fontSize: moderateScale(25), color: 'black' }}>8</Text>
          </TouchableOpacity>

       
         
          <TouchableOpacity
          onPress={() => {
            if (pin.length < 4) {
              setPin(pin + '9')
            }
          }}
          
           activeOpacity={1} style={styles.numberpadBtn}>
            <Text style={{ fontSize: moderateScale(25), color: 'black' }}>9</Text>
          </TouchableOpacity>





        </View>
        <View style={{ flexDirection: 'row', width: '100%' }}>
          <TouchableOpacity onPress={()=>{
          
             let newPin=pin.substring(0,pin.length-1)
             setPin(newPin)
          }
          } activeOpacity={1} style={styles.numberpadBtn}>
            <Image source={require('../../../assets/images/clear.png')} style={styles.icon} />
          </TouchableOpacity>

          <TouchableOpacity
          onPress={() => {
            if (pin.length < 4) {
              setPin(pin + '0')
            }
          }}
          
           activeOpacity={1} style={styles.numberpadBtn}>
            <Text style={{ fontSize: moderateScale(25), color: 'black' }}>0</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>navigation.navigate('Submit',{Data:state})} activeOpacity={1} style={styles.numberpadBtn}>
            <Text style={{ fontSize: moderateScale(16), color: 'black' }}>SUBMIT</Text>
          </TouchableOpacity>





        </View>
      </View>
    </View>
  )
}

export default UpiPass

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  header: {
    width: '100%',
    height: verticalScale(80),
    justifyContent: 'flex-end'
  },
  subHeader: {
    width: '100%',
    height: verticalScale(60),
    justifyContent: "center",
    borderBottomWidth: 0.4,
    borderBottomColor: '#929292'
  },
  numberpad: {
    width: '100%',
    position: "absolute",
    bottom: moderateVerticalScale(30)
  },
  icon: {
    width: scale(22),
    height: scale(22)
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: moderateScale(20),
    paddingRight: moderateScale(20),
    marginTop: moderateScale(20),
    //borderWidth:1
  },

  BankName: {
    fontSize: moderateScale(16),
    color: 'black',
    fontWeight: '600'
  },
  account: {
    fontSize: moderateScale(14),
    color: 'black',
    fontWeight: '600'
  },
  logo: {
    width: scale(60),
    height: scale(50),
    resizeMode: 'contain', marginTop: -10
  },

  secondView: {
    width: '100%',
    height: verticalScale(50),
    justifyContent: 'space-between',
    paddingLeft: moderateScale(20),
    paddingRight: moderateScale(20),
    marginTop: moderateVerticalScale(10),
    backgroundColor: '#b3b3b3',
    flexDirection: 'row',
    alignItems: 'center'
  },
  secondRightView: {
    alignItems: 'flex-end',

  },
  title: {
    alignSelf: 'center',
    marginTop: moderateVerticalScale(70),
    fontSize: scale(18),
    color: 'black',
    fontWeight: '700'
  },
  pinView: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: moderateScale(20)
  },
  numberpadBtn: {
    width: '33%', height: verticalScale(45), borderWidth: 0.4, justifyContent: 'center', alignItems: 'center'
  },
  bottomSheet:{
    width:'88%',
    height:scale(30),
    backgroundColor:'#F4FE99',
    alignSelf:'center',
    marginTop:moderateScale(60),
    borderRadius:moderateScale(30),
    justifyContent:'center'
  }
})