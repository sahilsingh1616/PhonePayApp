
import React from 'react'

import { StyleSheet, Image, Text, ScrollView,View, Dimensions,TextInput ,StatusBar, TouchableOpacity, Pressable, FlatList } from 'react-native'
import { moderateScale, moderateVerticalScale,s,scale, verticalScale } from 'react-native-size-matters'

const { width, height } = Dimensions.get('screen')

import CommonHeader from '../../components/CommonHeader'
import { POPULAR } from '../../utils/mocks'

const Store = () => {
  return (
    <View style={styles.mainContainer}>
      <CommonHeader/>

      <ScrollView style={{flex:1}}>

      <View style={styles.searchBOx}>
      <Image source={require('../../../assets/images/search.png')} style={styles.searchBOxIcon}/>
      <TextInput placeholderTextColor='#9e9e9e' placeholder='Search by Store name or phone Number' style={{width:'90%',fontSize:scale(13),color:'black',marginLeft:moderateScale(4)}}></TextInput>

      </View>
      
      <View style={{}}>
        <FlatList
          data={[1,1,1,1,1]}
          renderItem={({item,index}) =>{
            return(
              <View style={styles.shopItem}>
              <Text style={styles.transactionText}>Last Paid ₹100,3 Months ago</Text>

              <View style={styles.shopDetails}>
              <View style={styles.leftSection}>
              <Image source={require('../../../assets/images/sort.png')} style={styles.shopIcon}/>

              <View style={styles.showNameView}>
              <Text style={styles.XYZText}>XYZ Store</Text>
              
              <View style={styles.shopRatingView}>
              <Image source={require('../../../assets/images/star.png')} style={styles.rating}/>

              <Text style={styles.ratingcount}>4.3</Text>
              <Text style={[styles.ratingcount,{marginLeft:moderateScale(30)}]}>50m</Text>
              <Text style={[styles.ratingcount,{marginLeft:moderateScale(40)}]}>Closed at 10:00pm</Text>
              </View>
              </View>

              </View>
              </View>
              <TouchableOpacity style={styles.PayNowBTn}>

              <Image source={require('../../../assets/images/arrow.png')} style={styles.paynowicon}/>
              <Text style={styles.paynowText}>Pay Now</Text>

              </TouchableOpacity>

              </View>
            )
          }}
        />

    
        
      </View>
      <View style={styles.categoryCard}>
        <Text style={styles.heading}>Popular Category</Text>
        <View style={styles.tranferView}>
          <TouchableOpacity style={styles.tranferTab}>
            <View style={[styles.tranferCard,{backgroundColor:'white'}]}>
              <Image source={require('../../../assets/images/store.png')} style={[styles.icon,{tintColor:'purple',width:scale(30),height:scale(30)}]} />

            </View>

            <Text style={styles.transferMoney}>General Store</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tranferTab}>
            <View style={[styles.tranferCard,{backgroundColor:'white'}]}>
              <Image source={require('../../../assets/images/vegetable.png')} style={[styles.icon,{tintColor:'purple',width:scale(30),height:scale(30)}]} />
            </View>
            <Text style={styles.transferMoney}>Fruits & Vegetable</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tranferTab}>
          <View style={[styles.tranferCard,{backgroundColor:'white'}]}>
              <Image source={require('../../../assets/images/chicken.png')} style={[styles.icon,{tintColor:'purple',width:scale(30),height:scale(30)}]} />
            </View>
            <Text style={styles.transferMoney}>Meat Shop</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tranferTab}>
          <View style={[styles.tranferCard,{backgroundColor:'white'}]}>
              <Image source={require('../../../assets/images/medicine.png')} style={[styles.icon,{tintColor:'purple',width:scale(30),height:scale(30)}]} />
            </View>
            <Text style={[styles.transferMoney,{width:100}]}>Pharmancy</Text>
          </TouchableOpacity>


        </View>
        <View style={styles.tranferView}>
          <TouchableOpacity style={styles.tranferTab}>
            <View style={[styles.tranferCard,{backgroundColor:'white'}]}>
              <Image source={require('../../../assets/images/doctor.png')} style={[styles.icon,{tintColor:'purple',width:scale(30),height:scale(30)}]} />

            </View>

            <Text style={styles.transferMoney}>Doctor & Path Lab</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tranferTab}>
            <View style={[styles.tranferCard,{backgroundColor:'white'}]}>
              <Image source={require('../../../assets/images/travel.png')} style={[styles.icon,{tintColor:'purple',width:scale(30),height:scale(30)}]} />
            </View>
            <Text style={[styles.transferMoney,{width:100}]}>Travel</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tranferTab}>
          <View style={[styles.tranferCard,{backgroundColor:'white'}]}>
              <Image source={require('../../../assets/images/renewable.png')} style={[styles.icon,{tintColor:'purple',width:scale(30),height:scale(30)}]} />
            </View>
            <Text style={[styles.transferMoney,{width:scale(80)}]}>Insurance Renewable</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tranferTab}>
          <View style={styles.tranferCard}>
              <Image source={require('../../../assets/images/increase.png')} style={[styles.icon,{width:scale(15),height:scale(15)}]} />
            </View>
            <Text style={[styles.transferMoney,{width:100}]}>See All</Text>
          </TouchableOpacity>


        </View>


        </View>
        {/* <View style={{marginBottom:'10%'}}>
      


        </View> */}
      </ScrollView>

    </View>
  )
}

export default Store

const styles = StyleSheet.create({
  mainContainer:{flex:1,backgroundColor:'#fff'},
  searchBOx:{
    width:'94%',
    height:verticalScale(45),
    backgroundColor:'#f2f2f2',
    alignSelf:'center',
    marginTop:moderateVerticalScale(10),
    borderRadius:moderateScale(20),
    flexDirection:'row',
    paddingLeft:moderateScale(20),
    paddingRight:moderateScale(15)
  },
  searchBOxIcon:{
    width:scale(18),
    height:scale(18),
    marginTop:moderateScale(14)
  },
  shopItem:{
    width:'92%',
   
    backgroundColor:'#F6ECEC',
    alignSelf:'center',
    marginTop:moderateScale(10),
    borderRadius:moderateScale(10),
    paddingTop:moderateScale(10),
   // justifyContent:'center',
    elevation:1
  },

  transactionText:{
      color:'#9e9e9e',
      fontSize:moderateScale(12),
      marginLeft:moderateScale(6)
  },
  shopDetails:{
     flexDirection:'row',
     justifyContent:'space-between',
     alignItems:'center',
     marginTop:moderateVerticalScale(10),

  },
  leftSection:{
    flexDirection:'row',
    alignItems:'center',

  },
  shopIcon:{
    width:scale(40),
    height:scale(40),
    borderRadius:scale(10),
    marginTop:moderateScale(-6),
    marginLeft:moderateScale(10)
  },
  showNameView:{
    marginLeft:moderateScale(10)
  },
  XYZText:{fontSize:11,color:'black',marginTop:moderateScale(-10)},

  shopRatingView:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:moderateScale(5)
  },

  rating:{
    width:scale(10),
    height:scale(10)
  },
  ratingcount:{
    color:'#9e9e9e',
    marginLeft:moderateScale(3)
  },
  PayNowBTn:{
   width:'93%',
   height:verticalScale(30),
   borderRadius:moderateScale(30),
   borderWidth:1,
   marginTop:moderateVerticalScale(10),
   marginBottom:moderateVerticalScale(10),
   alignSelf:'center',
   flexDirection:'row',
   justifyContent:'center',
   alignItems:'center'
  },

  paynowicon:{
    width:scale(15),
    height:scale(15),
    tintColor:'purple'
  },
  paynowText:{
    color:'purple',
    marginLeft:moderateScale(10),
    fontSize:scale(13)
  },
  categoryCard:{
    width:'94%',
    height:verticalScale(200),
    alignSelf:'center',
    backgroundColor:'#fefefe',
    marginTop:moderateVerticalScale(20),
    marginBottom:moderateVerticalScale(100),
    borderRadius:scale(8),
    elevation:2
  },
  heading: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    marginLeft: moderateScale(15),
    marginTop: moderateVerticalScale(15),
    color: 'black'},
   
    cardItem:{
      width:'25%',
     justifyContent:'center',
     alignItems:'center'
    },

    categoryItem:{
      width:scale(30),
      height:scale(30),
      tintColor:'purple',
      marginLeft:moderateScale(20)
    },
    tranferView: {
      width: '100%',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: moderateScale(20)
    },
    tranferTab: {
      width: '25%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    tranferCard: {
      width: scale(36),
      height: scale(36),
      borderRadius: moderateScale(10),
      backgroundColor: 'purple',
      justifyContent: 'center',
      alignItems: 'center'
    },
    transferMoney: { fontSize: moderateScale(12), color: 'black', width: 50, textAlign: 'center', marginTop: moderateScale(3) },

})