import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import CommonHeader from '../../components/CommonHeader'
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters'
import { FlatList } from 'react-native-gesture-handler'

const History = () => {
  return (
    <View style={styles.maincontainer}>
      <CommonHeader />

      <View style={styles.searchView}>
        <Image source={require('../../../assets/images/search.png')} style={styles.search} />
        <Text style={styles.searchTxt}>Search by name,number or UPI ID</Text>

      </View>
      <View style={styles.card}  >
        <View style={styles.FiltersView}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity style={styles.dropdown}>
              <Text style={{ fontSize: 11, color: 'black', fontWeight: '600' }}>Month</Text>

              <Image source={require('../../../assets/images/downarrow.png')} style={styles.Icons} />

            </TouchableOpacity>
            <TouchableOpacity style={[styles.dropdown, { marginLeft: moderateScale(15) }]}>
              <Text style={{ fontSize: 11, color: 'black', fontWeight: '600' }}>Catagories</Text>

              <Image source={require('../../../assets/images/downarrow.png')} style={styles.Icons} />

            </TouchableOpacity>

          </View>

          <TouchableOpacity style={styles.dropdown}>
            <Text style={{ fontSize: 11, color: 'black', fontWeight: '600' }}>Filters</Text>

            <Image source={require('../../../assets/images/downarrow.png')} style={styles.Icons} />

          </TouchableOpacity>
        </View>

        <FlatList contentContainerStyle={{ marginTop: moderateVerticalScale(30) }}
          data={[1, 1, 1, 1]}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.transactionItem}>

                <View>

                  <View style={styles.topLeftView}>
                    <View style={styles.iconView}>
                      <Image source={index % 2 == 0 ? require('../../../assets/images/upright.png') : require('../../../assets/images/eeee.png')} style={{ width: scale(12), height: scale(12), tintColor: 'white', resizeMode: 'contain' }} />

                    </View>

                    <View>
                      <View style={{ marginLeft: moderateScale(10) }}>
                        <Text style={styles.paidto}>Paid to</Text>
                        <Text style={styles.name}>Sahil</Text>

                      </View>
                    </View>
                  </View>
                  <Text style={styles.time}>Yesterday</Text>
                </View>

                <View style={{alignItems:'flex-end'}}>
                  <Text style={styles.amount}>{'₹ 1000'}</Text>

                  <View style={styles.bankview}>
                  <Text style={[styles.time,{marginTop:0}]}>{index%2==0? 'Debited from':'Credited to'}</Text>
                  <Image source={require('../../../assets/images/IBN.png')} style={styles.logo}/>

                  </View>
                </View>
              </View>



            )

          }}
        />

      </View>
    </View>
  )
}

export default History

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
  card: {
    backgroundColor: 'white',
    width: '94%',
    marginTop: moderateVerticalScale(15),
    //height: verticalScale(200),
    alignSelf: 'center',
    borderRadius: moderateScale(10),
    shadowOpacity: 0.4,
    // shadowColor:'rgba(0,0,0,.5)',
    shadowOffset: {
      x: 1,
      y: 1

    }
  },
  FiltersView: {
    width: '90%',
    justifyContent: 'space-between',
    alignItems: "center",
    marginTop: moderateVerticalScale(15),
    flexDirection: "row",
    alignSelf: 'center'

  },
  dropdown: {
    height: verticalScale(20),
    borderWidth: 1,
    borderRadius: moderateScale(10),
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(10),
    paddingBottom: moderateVerticalScale(5),
    paddingTop: moderateVerticalScale(4),
    flexDirection: 'row'
  },
  Icons: {
    marginLeft: moderateScale(10),
    width: scale(8),
    height: scale(8),
    marginTop: moderateScale(1),
    marginRight: moderateScale(.2)

  },
  transactionItem: {
    width: '94%',
    height: 100,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  topLeftView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: moderateScale(15)
  },
  iconView: {
    width: scale(36),
    height: scale(36),
    backgroundColor: 'purple',
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center'

  },
  paidto: {
    fontSize: 16,
    color: 'black'
  },
  name: {
    fontSize: 16,
    color: '#4f4f4f'
  },
  time: {
    marginLeft: moderateScale(20),
    marginTop: moderateScale(10),
    color: "#929292"
  },
  amount: {
    fontWeight: "700",
    fontSize: 18,
    color: 'black'
  },
  bankview: {
    flexDirection: "row",
    marginTop: moderateVerticalScale(20),
  },
  logo:{
    width:scale(12),
    height:scale(12),
    marginLeft:moderateScale(11)
  }
})