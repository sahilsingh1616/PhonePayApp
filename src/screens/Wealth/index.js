// import { StyleSheet, Text, View,ScrollView } from 'react-native'
// import React,{useState,useEffect} from 'react'

// const Wealth = () => {
  
// const [todos, setTodos] = useState();

// const getTodoData = () => {
//   fetch('https://jsonplaceholder.typicode.com/todos')
//       .then(response => response.json())
//       .then((json) => {
//           setTodos(json);
//           console.log(json)
//       })
// }


// useEffect(() => {
//   getTodoData();
// }, [])

//   return (
//     <View style={styles.container}>
//     <Text>Integrating APIs</Text>
//     <ScrollView>
          
//                         {
//                           todos.length && todos.map((txt)=>{
//                             return(
//                               <View style={styles.todo}>
//                               <Text>{txt.title}</Text>

//                               </View>
//                             )
//                           }
//                           )
//                         }
                    
//             </ScrollView>
//             </View>
//   )
// }

// export default Wealth

// const styles = StyleSheet.create({
//   container: {
//     paddingHorizontal: 16,
// },

// todo: {
//     width: '100%',
//     marginVertical: 16,
//     paddingHorizontal: 8,
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: 50,
//     borderRadius: 5,
//     backgroundColor: 'lightgreen'
// }

// })

// import React, { useEffect, useState } from 'react';
// import { ScrollView, StyleSheet, Text, View, ActivityIndicator } from 'react-native';

// const ExampleAPIs = () => {

//     const [todos, setTodos] = useState();
//     const [isLoading, setIsLoading] = useState(true);

//     const getTodoData = () => {
//         fetch('https://jsonplaceholder.typicode.com/todos')
//             .then(response => response.json())
//             .then((json) => {
//                 setTodos(json);
//                 setIsLoading(false);
//             })
//             .catch((error) => {
//                 console.log(error);
//                 setIsLoading(false);
//             })
//     }

//     useEffect(() => {
//         getTodoData();
//     }, [])

//     return (
//         <View style={styles.container}>
//             <Text>Integrating APIs</Text>

//             {isLoading ? (
//                 <ActivityIndicator size="large" color="#0000ff" />
//             ) : (
//                 <ScrollView>
//                     {!!todos?.length && todos?.map((todo) => {
//                         return (
//                             <View style={styles.todo}>
//                             <Text style={styles.title1}>{todo.id}</Text>

//                                 <Text style={styles.title}>{todo.title}</Text>
//                             </View>
//                         )
//                     })}
//                 </ScrollView>
//             )}
//         </View>
//     )
// }

import { StyleSheet, Text, View, Image, TouchableOpacity,Dimensions } from 'react-native'
import React from 'react'
import CommonHeader from '../../components/CommonHeader'
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters'
import { FlatList } from 'react-native-gesture-handler'
import { WELCOMESCREEN } from '../../utils/mocks'
const { width, height } = Dimensions.get('screen')


const Wealth = () => {
  return (
    <View style={styles.maincontainer}>
      <CommonHeader />

      <View style={styles.searchView}>
        <Image source={require('../../../assets/images/search.png')} style={styles.search} />
        <Text style={styles.searchTxt}>Search Mutual Funds</Text>

      </View>
      <View style={styles.sipView}>
      <View>
      <Text style={styles.siptitle}>Create Wealth with SIP</Text>
      <Text style={styles.sipesc}>{'6 cr+ SIP investments every months.'}</Text>

      <TouchableOpacity style={styles.startsipbtn}>
        <Text style={styles.btnSIP}>START A SIP</Text>
        <Image source={require('../../../assets/images/rightarrow.png')} style={styles.icon}/>
      </TouchableOpacity>

      </View>
      <Image source={require('../../../assets/images/ssss.jpg')} style={{width:90,height:90,borderRadius:45,resizeMode:"contain"}}/>


      </View>

      <View>
      <View style={styles.RechargeView}>
      <Text style={styles.heading}>Investment Ideas</Text>
   
      <View style={styles.tranferView}>
          <TouchableOpacity style={styles.tranferTab}>
            <View style={[styles.tranferCard,{backgroundColor:'white'}]}>
              <Image source={require('../../../assets/images/gold.png')} style={[styles.icon,{tintColor:'purple',width:scale(30),height:scale(30)}]} />

            </View>

            <Text style={styles.transferMoney}>Gold</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tranferTab}>
            <View style={[styles.tranferCard,{backgroundColor:'white'}]}>
              <Image source={require('../../../assets/images/office.png')} style={[styles.icon,{tintColor:'purple',width:scale(32),height:scale(32),marginRight:8}]} />
            </View>
            <Text style={[styles.transferMoney,{width:100}]}>Top Companies</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tranferTab}>
          <View style={[styles.tranferCard,{backgroundColor:'white'}]}>
              <Image source={require('../../../assets/images/calculate.png')} style={[styles.icon,{tintColor:'purple',width:scale(30),height:scale(30)}]} />
            </View>
            <Text style={[styles.transferMoney,{width:100}]}>Tax Saving Funds</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tranferTab}>
          <View style={[styles.tranferCard,{backgroundColor:'white'}]}>
              <Image source={require('../../../assets/images/prime.png')} style={[styles.icon,{tintColor:'purple',width:scale(30),height:scale(30)}]} />
            </View>
            <Text style={[styles.transferMoney,{width:100}]}>Start with ₹100</Text>
          </TouchableOpacity>


        </View>

        <View style={styles.tranferView}>
          <TouchableOpacity style={styles.tranferTab}>
            <View style={[styles.tranferCard,{backgroundColor:'white'}]}>
              <Image source={require('../../../assets/images/moneyplant.png')} style={[styles.icon,{tintColor:'purple',width:scale(30),height:scale(30)}]} />

            </View>

            <Text style={styles.transferMoney}>Best SIP Funds</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tranferTab}>
            <View style={[styles.tranferCard,{backgroundColor:'white'}]}>
              <Image source={require('../../../assets/images/sharepartner.png')} style={[styles.icon,{tintColor:'purple',width:scale(30),height:scale(30)}]} />
            </View>
            <Text style={[styles.transferMoney,{width:100}]}>3-in-1 Funds</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tranferTab}>
          <View style={[styles.tranferCard,{backgroundColor:'white'}]}>
              <Image source={require('../../../assets/images/trend.png')} style={[styles.icon,{tintColor:'purple',width:scale(30),height:scale(30)}]} />
            </View>
            <Text numberOfLines={1} style={[styles.transferMoney,{}]}>Trending Themes</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tranferTab}>
          <View style={styles.tranferCard}>
              <Image source={require('../../../assets/images/potential.png')} style={[styles.icon,{width:scale(15),height:scale(15),marginRight:8}]} />
            </View>
            <Text style={[styles.transferMoney,{width:100}]}>High Return Funds</Text>
          </TouchableOpacity>


        </View>

      </View>
      </View>
  
    </View>
  )
}

export default Wealth

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },

  searchView: {
    width: '94%',
    height: verticalScale(40),
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: moderateVerticalScale(10),
    borderRadius: moderateScale(10),
    flexDirection: 'row',
    borderWidth: .5,
    borderColor: '#8e8e8e',
    alignItems: 'center',
    paddingLeft: moderateScale(15)
  },
  search: {
    width: scale(15),
    height: scale(15)
  },
  searchTxt: {
    fontSize: moderateScale(16),
    color: '#8e8e8e', marginLeft: moderateScale(20)
  },

  sipView:{
    width:'94%',
    // height:verticalScale(100),
    backgroundColor:'white',
    alignSelf:'center',
    marginTop:moderateVerticalScale(10),
    borderRadius:moderateScale(10),
    flexDirection:'row',
    justifyContent:'space-between',
    padding:10
  },
  siptitle:{
    fontSize:20,
    fontWeight:'700',
    color:'black',
    marginTop:moderateVerticalScale(10)

  },
  sipesc:{
    color:'#929292',
    marginTop:moderateVerticalScale(5),
    fontSize:moderateScale(14)
  },
  startsipbtn:{
    backgroundColor:'purple',
    width:scale(120),
    height:verticalScale(30),
    justifyContent:'center',
    alignItems:"center",
    borderRadius:20,
    marginTop:moderateVerticalScale(10),
    flexDirection:'row'
  },
  btnSIP:{
    color:'white',
    fontWeight:'600'
  },
  icon:{
    width:scale(16),
    height:scale(16),
    tintColor:'white',
    marginLeft:moderateScale(10)
  },
  RechargeView:{
    backgroundColor:'white',
    width:'94%',
    // height:verticalScale(200),
    borderRadius:moderateScale(10),
    marginTop:moderateVerticalScale(15),
    alignSelf:'center',
    elevation:3,
    paddingBottom:10
    // borderWidth:1,
    // borderColor:'white'
  },
  heading: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    marginLeft: moderateScale(15),
    marginTop: moderateVerticalScale(15),
    color: 'black'
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
  MYORTOUCH_ABLE: { width: '94%', height: verticalScale(47), backgroundColor: '#FFF', elevation: 3, marginTop: moderateScale(8), borderRadius: moderateScale(10), alignSelf: 'center', justifyContent: 'center' },
  FiveComponentView: { flexDirection: 'row', width: '100%', justifyContent: 'space-between' },

  FourComponentView: {
    flexDirection: 'row', marginLeft: moderateScale(10), alignItems: 'center'
  },

  MyORtxt: { fontSize: 14, color: 'black', fontWeight: '500', marginLeft: moderateScale(8) },

  LineView: { height: height / 27, width: 1, backgroundColor: 'black', marginLeft: '4%' },

  NumberTxt: { fontSize: 16, color: 'black', marginLeft: 10, fontWeight: '300' },

  OtherOptions: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '94%', marginTop: moderateScale(10), alignSelf: 'center' },

  BlueContainerTXt: {
    color: 'white',
    fontWeight: '600',
    marginTop: moderateScale(10)
  },
  BLUETOUCHOPACITYVIEW: { width: moderateScale(100), height: moderateScale(70), borderRadius: moderateScale(10), margin:moderateScale(9), backgroundColor: '#277be8', justifyContent: 'center', alignItems: 'center',elevation:5 },
})

// export default ExampleAPIs

// const styles = StyleSheet.create({
//     container: {
//         paddingHorizontal: 16,
//     },

//     todo: {
//         width: '100%',
//         marginVertical: 16,
//         paddingHorizontal: 8,
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: 50,
//         borderRadius: 5,
//         backgroundColor: 'lightgreen',
//         borderWidth:1,
//         flexDirection:'row'
//     },
//     title:{
//       fontSize:12,
//       color:'purple',
//       fontWeight:'bold',textAlign:"center"
//     },
//     title1:{
//       fontSize:20,
//       color:'purple',
//       fontWeight:'bold',
      
      
//     }
// })
