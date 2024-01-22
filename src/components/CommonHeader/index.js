
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Image, Text, ScrollView,View, Dimensions, StatusBar, TouchableOpacity, Pressable, FlatList } from 'react-native'
import { moderateScale, moderateVerticalScale,scale, verticalScale } from 'react-native-size-matters'

const { width, height } = Dimensions.get('screen')

const CommonHeader = ( ) => {
const navigation=useNavigation()
  return (
    
          <View style={styles.header}>
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
            <TouchableOpacity onPress={()=>navigation.navigate('QrcodeScanner')} >
              <Image source={require('../../../assets/images/scanner.png')} style={styles.icon} />
            </TouchableOpacity>
            <Image source={require('../../../assets/images/bell.png')} style={[styles.icon, { marginLeft: moderateScale(15), marginRight: moderateScale(15) }]} />
            <Image source={require('../../../assets/images/help.png')} style={styles.icon} />
          </View>

        </View>


      </View>
    
  )
}

export default CommonHeader

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
})