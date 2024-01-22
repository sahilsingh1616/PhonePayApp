// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React, { useState } from 'react'

// const Insurance = () => {
//   const [selectedTab,setSelectedTab]=useState(0);

//   return (
//     <View style={{backgroundColor:'#FFF',flex:1,justifyContent:'center',alignItems:'center'}}>

//     <View style={{width:'94%',borderWidth:0.5,borderRadius:15,height:65,backgroundColor:'white',paddingLeft:5,paddingRight:5,flexDirection:'row'}}>
//     <TouchableOpacity onPress={()=>setSelectedTab(0)} style={{width:'50%',height:60,backgroundColor:selectedTab==0?'blue':'white',borderRadius:10,justifyContent:'center',alignItems:'center',marginTop:3}}>
//     <Text style={{fontSize:20,color: selectedTab==0?'#FFF':'black',fontWeight:'700'}}>Sahil</Text>

//     </TouchableOpacity>

//      <TouchableOpacity onPress={()=>setSelectedTab(1)} style={{width:'50%',height:60,backgroundColor:selectedTab==1?'blue':'white',borderRadius:10,justifyContent:'center',alignItems:'center',marginTop:3}}>
//     <Text style={{fontSize:20,color:selectedTab==1?'#FFF':'#000',fontWeight:'700'}}>Singh</Text>

//     </TouchableOpacity> 

//     </View>
//       <Text>Insurance</Text>
//     </View>
//   )
// }

// export default Insurance

// const styles = StyleSheet.create({})

import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import CommonHeader from '../../components/CommonHeader'
import { scale, verticalScale } from 'react-native-size-matters'

const Insurance = () => {

  return (
    <View style={styles.maincontainer}>
      <CommonHeader />

      <View style={styles.card}>
        <Text style={styles.vehicletxt}>Insure your Vehicle</Text>

        <View style={{ flexDirection: 'row' }}>
          <View style={styles.bikeandtxtview}>

            <Image source={require('../../../assets/images/bike.png')} style={styles.bikeicon} />
            <View style={styles.popularview}>
              <Text style={{ fontSize: 5, color: 'white' }}>Popular</Text>
            </View>
            <View>
              <Text style={styles.Biketxt}>Bike</Text>
              <Text style={styles.fromfivetxt}>From ₹500/yr</Text>
            </View>
          </View>

          <View style={styles.lineview}>

          </View>


          <View style={styles.carandtxtview}>
            <Image source={require('../../../assets/images/brand.png')} style={styles.caricon} />
            <View>
              <Text style={styles.cartxt}>Car</Text>
              <Text style={styles.fromtwotxt}>From ₹2094/yr</Text>
            </View>
          </View>

        </View>


        <View style={styles.pinkbckgroundView}>
          <Text style={styles.ortxt}>Or,provide vehicle registration number </Text>
          <TouchableOpacity style={styles.toucheg}>
            <Text style={styles.egtxt}>Eg.KA00XX0000</Text>

          </TouchableOpacity>

        </View>




      </View>

      <View style={styles.insureView}>
      <Text style={styles.vehicletxt}>Insure Self and family</Text>

      <View style={{ flexDirection: 'row' }}>
          <View style={styles.bikeandtxtview}>

            <Image source={require('../../../assets/images/healthin.png')} style={[styles.bikeicon1,{resizeMode:'contain'}]} />
            <View style={styles.popularview}>
              <Text style={{ fontSize: 5, color: 'white' }}>Popular</Text>
            </View>
            <View>
              <Text style={styles.Biketxt}>Health</Text>
              <Text style={styles.fromfivetxt}>From ₹577/yr</Text>
            </View>
          </View>

          <View style={styles.lineview}>

          </View>


          <View style={styles.carandtxtview}>
            <Image source={require('../../../assets/images/lifein.png')} style={[styles.caricon1,{resizeMode:'contain',marginLeft:20}]} />
            <View>
              <Text style={styles.cartxt}>Life</Text>
              <Text style={styles.fromtwotxt}>Cover upto 10cr</Text>
            </View>
          </View>

        </View>

      </View>
     
      <View style={{width:'94%',paddingVertical:10,backgroundColor:'white',elevation:3,borderRadius:12,alignSelf:'center',marginTop:7}}>
      <Text style={styles.vehicletxt}>Other Insurances</Text>

      <View style={{ flexDirection: 'row',justifyContent:'space-around',marginTop:10 }}>
      <TouchableOpacity>
      <View style={{alignItems:'center'}}>
     
      <Image source={require('../../../assets/images/travel.png')} style={styles.bikeicon} />
     
      <Text style={styles.traveltxt}>Travel</Text>
      </View>
      </TouchableOpacity>

      <View style={{alignItems:'center'}}>
      <Image source={require('../../../assets/images/accident.png')} style={styles.bikeicon} />
      <Text style={styles.traveltxt}>Accident</Text>
      </View>


      <View style={{alignItems:'center'}}>
      <Image source={require('../../../assets/images/shield.png')} style={styles.bikeicon} />
      <Text style={styles.traveltxt}>Super Top-up</Text>

      

      </View>

      <View style={{alignItems:'center'}}>
      <Image source={require('../../../assets/images/shop.png')} style={styles.bikeicon} />
      <Text style={styles.traveltxt}>Shop</Text>


</View>
      </View>
 </View>

 <View>
  <Text style={{fontSize:10,color:'black',textAlign:'center',marginTop:'10%'}}>PhonePe Insurance Broking Services Private Limited.IRDAI Direct Broker (Life and General) Reg.766</Text>
  <Text style={{fontSize:10,color:'black',textAlign:'center'}}>and Broker Registration Code IRDA/D8 822/20 Valid till 10/08/2024</Text>


  <Text style={{fontSize:10,color:'#929292',textAlign:'center',marginTop:5}}>Reg.Address-Office,Floor 4,5,6,7 Wing A,block A,Salarpuria Softzone,Services Road,Green Glen</Text>
  <Text style={{fontSize:10,color:'#929292',textAlign:'center'}}>Layout,Bellandur,Bengaluru,Karnataka-KA Pin-56565656</Text>
 
  <View style={{flexDirection:'row',alignSelf:'center',marginTop:10}}>

  <Text style={{fontSize:10,color:'#929292'}}>CIN:U660000KA2020FTC13814:</Text>
  
  <Text style={{fontSize:10,color:'purple'}}>TnC Privacy Policy & Grievance Policy</Text>

</View>
 </View>

    </View>
  )
}

export default Insurance

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  card: {
    width: '94%',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 8, elevation: 2,
    alignSelf: 'center',
    marginTop: verticalScale(7)
  },

  vehicletxt: { fontSize: 18, fontWeight: '600', marginTop: 10, marginLeft: 14, color: 'black' },
  bikeandtxtview: {
    flexDirection: 'row', marginLeft: 10, marginTop: verticalScale(13)
  },
  bikeicon: {
    width: 40, height: 40, tintColor: 'purple'
  },
  popularview: {
    position: 'absolute', left: 4, top: -3, backgroundColor: 'orange', width: 25, height: 8, borderRadius: 12, justifyContent: 'center', alignItems: 'center'
  },
  Biketxt: {
    fontSize: 14, fontWeight:'600',color: 'black', marginLeft: 10
  },
  fromfivetxt: {
    fontSize: 14, color: '#929292', marginLeft: 10
  },
  lineview: {
    height: 50, marginLeft: 50, backgroundColor: '#CBCBCB', width: 1
  },
  carandtxtview: {
    flexDirection: 'row', marginLeft: 10, marginTop: verticalScale(13)
  },
  caricon: {
    width: 50, height: 50, tintColor: 'purple'
  },
  cartxt: {
    fontSize: 14,fontWeight:'600', color: 'black', marginLeft: 10
  },
  fromtwotxt: {
    fontSize: 14, color: '#929292', marginLeft: 10
  },
  pinkbckgroundView: {
    width: '94%', height: 90, backgroundColor: '#FBE5FD', borderRadius: 13, alignSelf: "center"
  },
  ortxt: {
    fontSize: 14, color: 'black', textAlign: 'center', marginTop: verticalScale(5)
  },
  toucheg: {
    width: '90%', height: 50, marginTop: 6, borderRadius: 10, borderWidth: 1, borderColor: '#929292', backgroundColor: 'white', alignSelf: 'center', justifyContent: 'center', alignItems: 'center'
  },
  egtxt: {
    fontSize: 19, color: '#929292', fontWeight: '600'
  },
  bikeicon1: {
    width: 30, height: 30, tintColor: 'purple'
  },
  caricon1: {
    width: 30, height: 30, tintColor: 'purple'
  },
  insureView:{
    width:'94%',paddingVertical:10,backgroundColor:'white',elevation:3,borderRadius:12,alignSelf:'center',marginTop:7
  },
  traveltxt:{
    fontSize:16,marginTop:2,fontWeight:'600',color:'purple'
  }


})