import { StyleSheet, Image, Text, ScrollView,View, Dimensions, StatusBar, TouchableOpacity, Pressable, FlatList } from 'react-native'
import React, { useRef, useState } from 'react'
import { moderateScale, moderateVerticalScale,scale, verticalScale } from 'react-native-size-matters'
import Carousel from 'react-native-snap-carousel';
const { width, height } = Dimensions.get('screen')
import { DATA, WELCOMESCREEN } from '../../utils/mocks';
import CommonHeader from '../../components/CommonHeader';


const renderItem1 = ({ item }) => {
  console.log(item)
  return (

    <View>
      <View style={{ alignItems: "center" }}>
        <Image source={item.image} style={{ width: '95%', height: height / 6, borderRadius: 10 }} />
      </View>
    </View>

  );

}

const Home = ({navigation}) => {
  const [page, setPage] = useState(0);
  const ref = useRef();
  return (
   

    <View style={styles.container}>
     
    
      {/* <View style={styles.header}>
        <View style={styles.header2}>
          <View style={styles.headerLeftView}>

            <View>
              <Image source={require('../../../assets/images/sort.png')} style={styles.user} />
              <Image source={require('../../../assets/images/flag.png')} style={styles.flag} />
            </View>

            <View style={{ marginLeft: moderateScale(14) }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.home}>Sahil Singh</Text>
                <Image source={require('../../../assets/images/down.png')} style={styles.dropdown} />
              </View>

              <Text style={styles.address}>65,Pathankot,Subdistrict</Text>
            </View>

          </View>

          <View style={styles.headerRightView}>
            <TouchableOpacity>
              <Image source={require('../../../assets/images/scanner.png')} style={styles.icon} />
            </TouchableOpacity>
            <Image source={require('../../../assets/images/bell.png')} style={[styles.icon, { marginLeft: moderateScale(15), marginRight: moderateScale(15) }]} />
            <Image source={require('../../../assets/images/help.png')} style={styles.icon} />
          </View>

        </View>


      </View> */}
      <CommonHeader/>

      <ScrollView style={{height:height}}>

      <View style={styles.carousel}>
        <Carousel
          ref={ref}
          onSnapToItem={(page) => setPage(page)}
          layout={"default"}
          data={WELCOMESCREEN}
          renderItem={renderItem1}
          sliderWidth={width}
          itemWidth={width}
          enableSnap={true}
          disableIntervalMomentum={true}
          removeClippedSubviews={true}
          snapToInterval={1}
        // loop={true}
        //autoplay={true}
        />
      </View>

      <View style={styles.moneytransferstyle}>
        <Text style={styles.heading}>Transfer Money</Text>
        <View style={styles.tranferView}>
          <TouchableOpacity style={styles.tranferTab}>
            <View style={styles.tranferCard}>
              <Image source={require('../../../assets/images/tomobile.png')} style={styles.icon} />

            </View>

            <Text style={styles.transferMoney}>To Moblie Number</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tranferTab}>
            <View style={styles.tranferCard}>
              <Image source={require('../../../assets/images/tobank.png')} style={styles.icon} />
            </View>
            <Text style={styles.transferMoney}>To Bank/UPI ID</Text>
          </TouchableOpacity>

          <TouchableOpacity  style={styles.tranferTab}>
            <View style={styles.tranferCard}>
              <Image source={require('../../../assets/images/toself.png')} style={styles.icon} />
            </View>
            <Text style={styles.transferMoney}>To Self Account</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tranferTab}>
            <View style={styles.tranferCard}>
              <Image source={require('../../../assets/images/check.png')} style={styles.icon} />
            </View>
            <Text style={styles.transferMoney}>check Balance</Text>
          </TouchableOpacity>


        </View>

      </View>

      <TouchableOpacity onPress={()=>navigation.navigate('RecieveMoney')} style={styles.MYORTOUCH_ABLE}>
        <View style={styles.FiveComponentView}>
          <View style={styles.FourComponentView}>
            <Image source={require('../../../assets/images/tech.png')} style={{ width: 20, height: 20 }} />
            <Text style={styles.MyORtxt}>MY OR</Text>

            <View style={styles.LineView}>
            </View>

            <Text style={styles.NumberTxt}> UPI: 6283164337@axl</Text>

          </View>
          <View style={{ justifyContent: 'center', marginRight: moderateScale(10) }}>
            <Image source={require('../../../assets/images/increase.png')} style={{ width: 15, height: 15,opacity:0.3 }} />

          </View>
        </View>
      </TouchableOpacity>

      <View style={{ width: '100%', height: height / 8 }}>
        <FlatList
          data={DATA}
          horizontal
          style={{ marginLeft: moderateScale(6), marginTop: moderateScale(4) }}
          renderItem={({ item, index }) => {
            return (

              <TouchableOpacity style={styles.BLUETOUCHOPACITYVIEW}>
                <Image source={item.image} style={styles.icon} />
                <Text style={styles.BlueContainerTXt}>{item.Text}</Text>
              </TouchableOpacity>
            )
          }}
        />

      </View>

<View>
      <View style={styles.RechargeView}>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
      <Text style={styles.heading}>Recharge & Pay Bills</Text>
      <Text style={{fontSize:11,color:'#8e8e8e',fontWeight:'400',marginRight:moderateScale(27),marginTop:verticalScale(10)}}>My Bills</Text>
      </View>
      <View style={styles.tranferView}>
          <TouchableOpacity style={styles.tranferTab}>
            <View style={[styles.tranferCard,{backgroundColor:'white'}]}>
              <Image source={require('../../../assets/images/battery.png')} style={[styles.icon,{tintColor:'purple',width:scale(30),height:scale(30)}]} />

            </View>

            <Text style={styles.transferMoney}>Mobile Recharge</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tranferTab}>
            <View style={[styles.tranferCard,{backgroundColor:'white'}]}>
              <Image source={require('../../../assets/images/antenna.png')} style={[styles.icon,{tintColor:'purple',width:scale(30),height:scale(30)}]} />
            </View>
            <Text style={styles.transferMoney}>DTH</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tranferTab}>
          <View style={[styles.tranferCard,{backgroundColor:'white'}]}>
              <Image source={require('../../../assets/images/bulb.png')} style={[styles.icon,{tintColor:'purple',width:scale(30),height:scale(30)}]} />
            </View>
            <Text style={styles.transferMoney}>Electricity</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tranferTab}>
          <View style={[styles.tranferCard,{backgroundColor:'white'}]}>
              <Image source={require('../../../assets/images/creditcard.png')} style={[styles.icon,{tintColor:'purple',width:scale(30),height:scale(30)}]} />
            </View>
            <Text style={[styles.transferMoney,{width:100}]}>Credit Card Bill Payment</Text>
          </TouchableOpacity>


        </View>

        <View style={styles.tranferView}>
          <TouchableOpacity style={styles.tranferTab}>
            <View style={[styles.tranferCard,{backgroundColor:'white'}]}>
              <Image source={require('../../../assets/images/house.png')} style={[styles.icon,{tintColor:'purple',width:scale(30),height:scale(30)}]} />

            </View>

            <Text style={styles.transferMoney}>Rent Payment</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tranferTab}>
            <View style={[styles.tranferCard,{backgroundColor:'white'}]}>
              <Image source={require('../../../assets/images/loan.png')} style={[styles.icon,{tintColor:'purple',width:scale(30),height:scale(30)}]} />
            </View>
            <Text style={[styles.transferMoney,{width:100}]}>Loan{'\n'} Repayment</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tranferTab}>
          <View style={[styles.tranferCard,{backgroundColor:'white'}]}>
              <Image source={require('../../../assets/images/gas.png')} style={[styles.icon,{tintColor:'purple',width:scale(30),height:scale(30)}]} />
            </View>
            <Text style={styles.transferMoney}>Book A Cylinder</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tranferTab}>
          <View style={styles.tranferCard}>
              <Image source={require('../../../assets/images/increase.png')} style={[styles.icon,{width:scale(15),height:scale(15)}]} />
            </View>
            <Text style={[styles.transferMoney,{width:100}]}>See All</Text>
          </TouchableOpacity>


        </View>

      </View>
      </View>

      <View style={[styles.RechargeView,{marginTop:scale(10)}]}>
      <Text style={styles.heading}>Insurance</Text>

      <View style={styles.tranferView}>
          <TouchableOpacity style={styles.tranferTab}>
            <View style={[styles.tranferCard,{backgroundColor:'white'}]}>
              <Image source={require('../../../assets/images/bike.png')} style={[styles.icon,{tintColor:'purple',width:scale(30),height:scale(30)}]} />

            </View>

            <Text style={styles.transferMoney}>Bike</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tranferTab}>
            <View style={[styles.tranferCard,{backgroundColor:'white'}]}>
              <Image source={require('../../../assets/images/brand.png')} style={[styles.icon,{tintColor:'purple',width:scale(40),height:scale(40)}]} />
            </View>
            <Text style={styles.transferMoney}>Car</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tranferTab}>
          <View style={[styles.tranferCard,{backgroundColor:'white'}]}>
              <Image source={require('../../../assets/images/healthin.png')} style={[styles.icon,{tintColor:'purple',width:scale(30),height:scale(30)}]} />
            </View>
            <Text style={styles.transferMoney}>Health</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tranferTab}>
          <View style={[styles.tranferCard,{backgroundColor:'white'}]}>
              <Image source={require('../../../assets/images/accident.png')} style={[styles.icon,{tintColor:'purple',width:scale(30),height:scale(30)}]} />
            </View>
            <Text style={[styles.transferMoney,{width:100}]}>Accident</Text>
          </TouchableOpacity>


        </View>

        <View style={styles.tranferView}>
          <TouchableOpacity style={styles.tranferTab}>
            <View style={[styles.tranferCard,{backgroundColor:'white'}]}>
              <Image source={require('../../../assets/images/lifein.png')} style={[styles.icon,{tintColor:'purple',width:scale(30),height:scale(30)}]} />

            </View>

            <Text style={styles.transferMoney}>Term Life</Text>
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

      <View style={[styles.TravelBookingView,{marginTop:scale(10)}]}>
      <Text style={[styles.heading,{marginTop:9}]}>Travel Bookings</Text>

      <View style={styles.tranferView}>
          <TouchableOpacity style={styles.tranferTab}>
            <View style={[styles.tranferCard,{backgroundColor:'white'}]}>
              <Image source={require('../../../assets/images/airplane.png')} style={[styles.icon,{tintColor:'purple',width:scale(30),height:scale(30)}]} />

            </View>

            <Text style={styles.transferMoney}>Flights</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tranferTab}>
            <View style={[styles.tranferCard,{backgroundColor:'white'}]}>
              <Image source={require('../../../assets/images/bus.png')} style={[styles.icon,{tintColor:'purple',width:scale(30),height:scale(30)}]} />
            </View>
            <Text style={styles.transferMoney}>Bus</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tranferTab}>
          <View style={[styles.tranferCard,{backgroundColor:'white'}]}>
              <Image source={require('../../../assets/images/train.png')} style={[styles.icon,{tintColor:'purple',width:scale(30),height:scale(30)}]} />
            </View>
            <Text style={styles.transferMoney}>Trains</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tranferTab}>
          <View style={[styles.tranferCard,{backgroundColor:'white'}]}>
              <Image source={require('../../../assets/images/hotel.png')} style={[styles.icon,{tintColor:'purple',width:scale(30),height:scale(30)}]} />
            </View>
            <Text style={[styles.transferMoney,{width:100}]}>Hotels</Text>
          </TouchableOpacity>


        </View>

      </View>

      <View style={{marginBottom:'20%'}}>

      </View>
</ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },

  header: { width: width, height: scale(85), backgroundColor: 'purple' },
  header2: { width: width, height: verticalScale(50), flexDirection: 'row', justifyContent: 'space-between', paddingLeft: moderateScale(10), paddingRight: moderateScale(10), marginTop: moderateScale(10) },
  headerLeftView: { flexDirection: 'row', alignItems: 'center' },
  user: { width: scale(40), height: scale(40) },
  flag: {
    width: scale(20),
    height: scale(20),
    position: 'absolute',
    right: -moderateScale(6),
    bottom: moderateScale(0),
    borderRadius: scale(10),
    borderWidth: 1,
    borderColor: 'white'
  },
  home: {
    fontSize: moderateScale(18),
    color: 'white',
    fontWeight: '600'
  },
  dropdown: {
    width: scale(16),
    height: scale(16),
    tintColor: 'white',
    marginLeft: moderateScale(5),
    marginTop: moderateScale(3)
  },
  address: {
    color: 'white',
    fontSize: moderateScale(12),
    marginTop: moderateScale(2)
  },
  headerRightView: { flexDirection: 'row', alignItems: 'center' },
  icon: { width: scale(22), height: scale(22), tintColor: 'white' },
  carousel: { marginTop: moderateScale(5) },
  moneytransferstyle: {
    width: '94%',
    height: verticalScale(120),
    backgroundColor: 'white',
    marginTop: moderateVerticalScale(10),
    elevation: 2,
    alignSelf: 'center',
    borderRadius: moderateScale(10),
   

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
  RechargeView:{
    backgroundColor:'white',
    width:'94%',
    height:verticalScale(200),
    borderRadius:moderateScale(10),
    marginTop:moderateVerticalScale(3),
    alignSelf:'center',
    elevation:3,
    // borderWidth:1,
    // borderColor:'white'
  },
  TravelBookingView:{
    width: '94%', height: verticalScale(100), backgroundColor: '#FFF', elevation: 3, marginTop: moderateScale(3), borderRadius: moderateScale(10),alignSelf:'center'  },

 



})