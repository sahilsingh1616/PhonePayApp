import { StyleSheet, Text, View, StatusBar, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native'
import React, { useState } from 'react';
import { moderateScale, moderateVerticalScale, s, scale, verticalScale } from 'react-native-size-matters'
import { SEND } from '../../utils/mocks';
import { startMapper } from 'react-native-reanimated';
const { width, height } = Dimensions.get('screen')

const LOGO = require('../../../assets/images/upload.png');
const LOGO1 = require('../../../assets/images/downupload.png');

const Transaction = ({ navigation,route }) => {
  console.log(route)
  const [image, setImage] = useState(true)


  const ImageShow = () => {
    setImage(!image)
  }
  return (

    <View style={styles.mainContainer}>
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor="green" translucent={true} />
      <View style={styles.header}>
        <View style={styles.subHeader}>

          <TouchableOpacity onPress={() => navigation.goBack()}>

            <Image source={require('../../../assets/images/back.png')} style={styles.backbtn} />
          </TouchableOpacity>

          <View style={styles.successfullview}>

            <Text style={styles.title}>Transaction SuccessFull</Text>
            <Text style={{ fontSize: scale(9), color: 'white' }}>04:00PM on 16 oct,2001</Text>

          </View>



        </View>
      </View>

      <View style={styles.cardView}>
        <View style={styles.cardViewMarign}>
          <Text style={styles.paidto}>Paid to</Text>

          <View style={styles.topView}>
            <View style={styles.SSbckground}>
              <Text style={styles.sstxt}>SS</Text>

            </View>
            <View style={{ marginRight: '16%' }}>
              <Text style={styles.MrSahilTxt}>Mr SAHIL SINGH</Text>
            </View>

            <View style={{ marginRight: '6%' }}>
              <Text style={styles.MrSahilTxt}>{'₹' + route.params.DONE}</Text>


            </View>
          </View>

          <View style={styles.lineView}>

          </View>

          <View style={styles.TransferView}>
            <Image source={require('../../../assets/images/list.png')} style={{ width: 30, height: 30 }} />
            <Text style={styles.transferTxt}>Transfer Details</Text>
            <TouchableOpacity onPress={ImageShow}>
              <Image source={image ? LOGO : LOGO1} style={styles.increaseIcon} />
            </TouchableOpacity>

          </View>

          {
            image && (
              <View style={{ marginTop: moderateScale(20) }}>
              <Text style={styles.Messagetxt}>Message</Text>
              <Text style={styles.Paytobharattxt}>Pay to BharatPe Merchant</Text>
              <View style={{ marginTop: moderateScale(10) }}>
                <Text style={styles.Messagetxt}>Transaction ID</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={styles.Paytobharattxt}>T2311012111374999862</Text>
                  <TouchableOpacity>
                    <Image source={require('../../../assets/images/copy.png')} style={styles.copyicon} />
                  </TouchableOpacity>
                </View>
              </View>


              <View style={{ marginTop: moderateScale(20) }}>
                <Text style={styles.Messagetxt}>Debited from</Text>

                <View style={styles.bottomView}>
                  <View style={styles.cbibckgroundView}>
                    <Image source={require('../../../assets/images/cbi.png')} style={{ width: 30, height: 30 }} />
                  </View>
                  <View style={{ marginRight: '16%' }}>
                    <Text style={styles.Messagetxt}>XXXXXXXXXXX9021</Text>
                    <Text style={ [styles.Messagetxt,{ marginTop: moderateScale(6)}] }>UTR: 33033331959332</Text>


                  </View>

                  <View style={{ marginRight: '6%' }}>
                    <Text style={styles.Messagetxt}>{'₹' +route.params.DONE}</Text>
                    <Image source={require('../../../assets/images/copy.png')} style={styles.firstcopyicon} />
                  </View>

                </View>

              </View>
            </View>
            )
          }
          <View style={styles.FlatListmainView}>
          </View>

          <View style={{ marginBottom: 10 }}>
            <FlatList
              data={SEND}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              // style={{ marginLeft: 19 }}
              renderItem={({ item, index }) => {
                return (
                  <View style={{ marginTop: 4 }}>
                    <TouchableOpacity style={styles.touchView}>
                      <Image source={item.image} style={styles.FlatListImg} />
                    </TouchableOpacity>

                    <View style={{ marginTop: -10 }}>
                      <Text style={styles.titleTxt}>{item.title}</Text>
                    </View>
                  </View>
                )
              }}
            />
          </View>
        </View>


      </View>

      <View style={styles.lastCardView}>
        <View style={styles.imageandTXTview}>
          <Image source={require('../../../assets/images/help.png')} style={{ width: 30, height: 30, marginLeft: 10 }} />
          <Text style={styles.ContactTxt}>Contact PhonePe Support</Text>
        </View>
        <View style={{ justifyContent: 'center' }}>
          <Image source={require('../../../assets/images/increase.png')} style={{ width: 20, height: 20, marginRight: '4%' }} />
        </View>
      </View>

      <View style={{ marginTop: moderateScale(40) }}>
        <Text style={styles.PoweredbyTXt}>Powered by</Text>
        <View style={styles.lastTwoimgView}>
          <Image source={require('../../../assets/images/upi.png')} style={styles.upiImg} />
          <Image source={require('../../../assets/images/axis.png')} style={styles.upiImg} />
        </View>
      </View>
    </View>

  )
}

export default Transaction

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white'
  },

  header: {
    width: '100%',
    height: verticalScale(90),
    backgroundColor: 'green',
    justifyContent: 'flex-end'
  },
  subHeader: {
    width: '100%',
    height: verticalScale(50),
    flexDirection: 'row',
    // justifyContent:'space-between',
    alignItems: 'center',
    paddingLeft: moderateScale(15),
    paddingRight: moderateScale(15)
  },
  backbtn: {
    width: scale(24),
    height: scale(24),
    justifyContent: 'center',
    alignItems: 'center',
    tintColor: 'white'

  },
  title: {
    color: 'white',
    fontSize: moderateScale(19),

  },
  successfullview: {
    alignItems: 'center', marginTop: 10, width: '90%'
  },
  cardView: {
    width: '94%', backgroundColor: '#fff', elevation: 3, alignSelf: 'center', marginTop: moderateScale(10), borderRadius: 9
  },
  lastCardView: {
    width: '94%', height: height / 11, backgroundColor: '#fff', elevation: 3, alignSelf: 'center', marginTop: moderateScale(12), borderRadius: 9, justifyContent: 'space-between', flexDirection: 'row'
  },
  cardViewMarign:{
     marginTop: moderateScale(20), marginLeft: moderateScale(20) 
  },
  paidto:{
    fontSize: scale(13), fontWeight: '500', color: 'black' 
  },
  MrSahilTxt:{
     fontSize: scale(14), color: 'black', fontWeight: '500' 
  },
  upiImg:{
     width: 60, height: 14, resizeMode: 'contain' 
  },
  lastTwoimgView:{
   flexDirection: 'row', alignSelf: "center", marginTop: moderateScale(5) 
  },
  PoweredbyTXt:{
    fontSize: scale(13), fontWeight: '500', color: 'black', textAlign: 'center' 
  },
  ContactTxt:{
     fontSize: scale(15), fontWeight: '500', color: 'black', textAlign: 'center', width: 200 
  },
  imageandTXTview:{
     flexDirection: 'row', justifyContent: 'center', alignItems: 'center' 
},
touchView:{
   width: 60, borderRadius: 20, height: 60, backgroundColor: 'purple', margin: 12, justifyContent: 'center', alignItems: 'center' 
},
FlatListImg:{
   width: 25, height: 25, tintColor: 'white' 
},
titleTxt:{
fontSize: 12, color: 'purple', fontWeight: '800', textAlign: "center" 
},
FlatListmainView:{
   width: '94%', height: .9, backgroundColor: 'grey', marginTop: moderateScale(10) 
},
Messagetxt:{
  fontSize: scale(12), color: 'black', fontWeight: '500' 
},
Paytobharattxt:{
   fontSize: scale(14), color: 'black', fontWeight: '300' 
},
copyicon:{
  width: 20, height: 20, marginRight: '6%' 
},
firstcopyicon:{
   width: 20, height: 20, marginTop: moderateScale(6),marginLeft:moderateScale(8)
},
cbibckgroundView:{
   width: 50, height: 50, backgroundColor: '#F1D6D6', borderRadius: 50, justifyContent: 'center', alignItems: 'center' 
},
bottomView:{
   marginTop: moderateScale(14), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' 
},
lineView:{
   width: '94%', height: .9, backgroundColor: 'grey', marginTop: moderateScale(14) 
},
sstxt:{
   fontSize:scale(18), fontWeight: '500', color: 'white' 
},
SSbckground:{
   width: 50, height: 50, backgroundColor: 'purple', borderRadius: 50, justifyContent: 'center', alignItems: 'center' 
},
topView:{
   marginTop: moderateScale(14), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' 
},
increaseIcon:{
   width: 25, height: 25, marginRight: '8%' 
},
transferTxt:{
  fontSize: scale(14), color: 'black', marginRight: '30%' 
},
TransferView:{
  marginTop: moderateScale(20), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' 
}

})