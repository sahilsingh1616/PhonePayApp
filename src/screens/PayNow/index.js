import { StyleSheet, Text,TextInput, View,StatusBar,TouchableOpacity,Image } from 'react-native'
import React, { useState } from 'react'
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters'
import Modal from "react-native-modal";


const PayNow = ({navigation}) => {
    const [amount,setAmount]=useState('');
    const [modalOpen,setModalOpen]=useState(false)
  return (
    
    <View style={styles.mainContainer}>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "purple" translucent = {true}/>
     <View style={styles.header}>
     <View style={styles.subHeader}>

     <TouchableOpacity onPress={()=>navigation.goBack()}>
            
        <Image source={require('../../../assets/images/back.png')} style={styles.backbtn}/>
     </TouchableOpacity>

     <Text style={styles.title}>Pay</Text>

     <TouchableOpacity>

   

<Image source={require('../../../assets/images/help.png')} style={styles.backbtn}/>


</TouchableOpacity>

     </View>

     </View>
     <View style={styles.cardView}>
     <View style={styles.topView}>
     <View style={styles.leftView}>
     <View style={styles.nameView}>
     <Text style={styles.namechar}>SA</Text>

     </View>

     <View>
     <Text style={styles.name}>Sahil Singh</Text>
     <Text style={styles.upiID}>sahilSingh@phonepay</Text>

     </View>

     </View>
     <Text style={styles.ViewHistory}>View History</Text>


     </View>
     <View style={styles.amountView}>
     <Image source={require('../../../assets/images/indian.png')} style={[styles.backbtn,{tintColor:'black'}]}/>
     <TextInput placeholderTextColor='#929292' placeholder='Enter Amount' style={[styles.input,{flex:1}]} keyboardType='number-pad' value={amount} onChangeText={txt=>setAmount(txt)} autoFocus={true}/>

     </View>
     <View style={[styles.amountView,{borderWidth:1,marginBottom:moderateVerticalScale(20)}]}>
     <TextInput placeholderTextColor='#929292' placeholder='Add a Message (Optional)' style={[styles.input,{fontSize:moderateScale(14)}]}/>

     </View>

     </View>

     <TouchableOpacity onPress={()=>setModalOpen(true)} style={[styles.proceedtopay,{backgroundColor:amount!=''?'purple':'#929292'}]}>
     <Text style={styles.paynow}>Proceed to Pay</Text>

     </TouchableOpacity>

     <Modal isVisible={modalOpen} backdropOpacity={.2} style={styles.modalView}>
     <View  style={styles.mainView}>
     <View style={styles.modalTopview}>
     <Text style={styles.payable}>Total Payable</Text>

    <View style={styles.modaltopRight}>
    <Text style={styles.confirmAmount}>{'₹'+amount}</Text>

    <TouchableOpacity onPress={()=>setModalOpen(false)}>
        <Image source={require('../../../assets/images/cancel.png')} style={[styles.backbtn,{tintColor:'black',width:scale(16)}]}/>
    </TouchableOpacity>


    </View>


     </View>

     <View style={styles.divider}>
     <View style={styles.BankView}>
     <View style={styles.bankLeftView}>
     <Image source={require('../../../assets/images/IBN.png')} style={styles.logo}/>
       <View style={{marginLeft:moderateScale(10)}}>
       <View style={{flexDirection:'row',alignItems:'center'}}>
       <Text style={{fontSize:15,fontWeight:'800',color:'black'}}>{"ICICI Bank - *****25"}</Text>
       <Image source={require('../../../assets/images/upi.png')} style={styles.logo}/>

       </View>
       <Text style={[styles.bankAccount,{marginTop:-8}]}>{"Bank Account"}</Text>

       </View>
     </View>

     <View style={[styles.bankRightView]}>
     <Text style={[styles.payable,{marginRight:-15}]}>{'₹'+amount}</Text>

     <Image source={require('../../../assets/images/correct.png')} style={[styles.logo,{width:20,height:20,marginRight:moderateScale(20)}]}/>

     </View>


     </View>

     <TouchableOpacity style={styles.confirmPayNow} onPress={()=>[setModalOpen(false),navigation.navigate('UpiPass',{Amount:amount})]}>
     <Text style={[styles.title,{fontWeight:'500'}]}>{'Pay '+'₹'+amount}</Text>

     </TouchableOpacity>

     </View>

     </View>

     </Modal>
     </View>
  )
}

export default PayNow

const styles = StyleSheet.create({

    mainContainer:{
        flex:1,
        backgroundColor:'white'
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
    fontSize:moderateScale(20),

},
cardView:{
    width:'94%',
    //height:verticalScale(200),
    alignSelf:'center',
    backgroundColor:'white',
    marginTop:moderateVerticalScale(10),
    borderRadius:moderateScale(5),
    elevation:3
},
topView:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:moderateScale(15)
},

leftView:{
    flexDirection:'row',
    alignItems:'center'
},
nameView:{
    width:scale(40),
    height:scale(40),
    backgroundColor:'#929292',
    borderRadius:scale(20),
    justifyContent:'center',
    alignItems:'center'
},
namechar:{
    fontSize:20,
    color:'black',
    fontWeight:'600'
},
name:{
    fontSize:18,
    color:'#000',
    marginLeft:moderateScale(10)
},
upiID:{
    fontSize:14,
    color:'#929292',
    marginLeft:moderateScale(10),
    marginTop:moderateScale(1)
},
ViewHistory:{
    color:'purple',
    fontSize:moderateScale(15),
    fontWeight:'600'
},
amountView:{
    width:'94%',
    height:verticalScale(50),
    borderWidth:3,
    alignSelf:'center',
    borderColor:'#929292',
    borderRadius:moderateScale(5),
    flexDirection:'row',
    paddingLeft:moderateScale(10),
    paddingRight:moderateScale(10),
    alignItems:'center',
    marginTop:moderateScale(17)
},
input:{

    fontSize:20,
    marginLeft:moderateScale(15),
    color:'black',
    fontWeight:'600'
},
proceedtopay:{
    width:'100%',
    height:verticalScale(60),
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    bottom:0,
   // backgroundColor:'red'
},
paynow:{
    fontSize:moderateScale(19),
    color:'white',
    fontWeight:'800'
},
modalView:{
    margin:0
},

mainView:{
    backgroundColor:'white',
    width:'100%',
    height:verticalScale(200),
    position:'absolute',
    bottom:0,
    borderTopLeftRadius:moderateScale(20),
    borderTopRightRadius:moderateScale(20)
},
modalTopview:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:moderateScale(20)
},
payable:{
    fontWeight:'700',
    color:'black',
    fontSize:moderateScale(15)
},
modaltopRight:{
    flexDirection:'row',
    alignItems:'center'
},
confirmAmount:{
    fontSize:30,
    fontWeight:'700',
    color:'black',
    marginRight:moderateScale(30)
},
divider:{
    width:'100%',
    height:0.9,
    backgroundColor:'#929292',
    marginTop:moderateScale(10),
    //opacity:0.5
},
BankView:{
    width:'100%',
    height:verticalScale(50),
    backgroundColor:'#f2f2f2',
    alignSelf:'center',
    marginTop:moderateVerticalScale(15),
    flexDirection:'row',
    justifyContent:'space-between'
},

bankLeftView:{
    flexDirection:'row',
    alignItems:'center'
},

bankRightView:{
    flexDirection:'row',
    alignItems:'center'
},

logo:{
    width:scale(30),
    height:scale(30),
    resizeMode:'contain',
    marginLeft:moderateScale(20),   

},
bankAccount:{
color:'#929292',
fontSize:moderateScale(15)
},
confirmPayNow:{
    width:'94%',
    height:verticalScale(40),
    backgroundColor:'purple',
    alignSelf:"center",
    borderRadius:moderateScale(30),
    marginBottom:moderateVerticalScale(10),
    marginTop:moderateVerticalScale(10),
    justifyContent:'center',
    alignItems:'center'
}

})