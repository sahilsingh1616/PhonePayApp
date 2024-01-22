import { StyleSheet, Text, TextInput, View, StatusBar, Dimensions, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters'
const { width, height } = Dimensions.get('screen')

const RecieveMoney = ({navigation}) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const DownWork = () => {
        return (
            <View>
                <View style={styles.lastView}>
                    <Text style={{ fontSize: 17, fontWeight: '700', color: 'black', marginLeft: moderateScale(30) }}>UPI IDs and Numbers</Text>
                    <Text style={{ fontSize: 12, fontWeight: '700', color: 'purple', marginRight: moderateScale(30) }}>MANAGE</Text>

                </View>
                <View style={{ marginTop: moderateScale(20) }}>
                    <TouchableOpacity onPress={() => setSelectedTab(0)} style={[styles.boxesView, { backgroundColor: selectedTab == 0 ? '#F7F0FF' : '#FFF' }]}>
                        <View style={styles.TwoTEXTVIEW}>
                            <Text style={{ fontSize: scale(15), color: selectedTab == 0 ? 'black' : 'grey', marginLeft: moderateScale(20) }}>6283164337@axl</Text>
                            <Image source={require('../../../assets/images/copy.png')} style={[styles.CopyICon, { tintColor: selectedTab == 0 ? 'black' : 'grey' }]} />

                        </View>
                        <Text style={{ fontSize: scale(10), marginLeft: moderateScale(20) }}>Displayed on home</Text>
                    </TouchableOpacity>
                    <View style={{ marginTop: moderateScale(10) }}>
                        <TouchableOpacity onPress={() => setSelectedTab(1)} style={[styles.boxesView, { backgroundColor: selectedTab == 1 ? '#F7F0FF' : '#FFF' }]}>
                            <View style={styles.TwoTEXTVIEW}>
                                <Text style={{ fontSize: scale(15), color: selectedTab == 1 ? 'black' : 'grey', marginLeft: moderateScale(20) }}>6283164337</Text>
                                <Image source={require('../../../assets/images/copy.png')} style={[styles.CopyICon, { tintColor: selectedTab == 1 ? 'black' : 'grey' }]} />

                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        )
    }
    return (
        <View style={styles.mainContainer}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="purple" translucent={true} />
            <View style={styles.header}>
                <View style={styles.subHeader}>

                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../../../assets/images/back.png')} style={styles.backbtn} />
                    </TouchableOpacity>

                    <Text style={styles.title}>Recieve Money</Text>

                    <TouchableOpacity>
                        <Image source={require('../../../assets/images/help.png')} style={styles.backbtn} />
                    </TouchableOpacity>

                </View>

            </View>

            <View style={styles.givenMarign}>
                <View style={styles.threeCompView}>
                    <View style={styles.cbiBckground}>
                        <Image source={require('../../../assets/images/cbi.png')} style={styles.cbiPng} />

                    </View>
                    <Text style={styles.cbiTxt}>Center Bank of India-1616</Text>

                    <View style={styles.primaryView}>
                        <Text style={{ fontSize: 12, color: 'white' }}>Primary</Text>
                    </View>

                </View>
            </View>

            <View style={styles.mainViewTop}>
                <Image source={require('../../../assets/images/barcode.png')} style={styles.BarcodePng} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
                    <View style={styles.ImagesView} >
                        <Image source={require('../../../assets/images/share.png')} style={styles.downloadICon} />
                        <Text style={styles.ShareTXT}>SHARE QR</Text>
                    </View>

                    <View style={styles.LineVIew}>
                    </View>

                    <View style={styles.ImagesView1}>
                        <Image source={require('../../../assets/images/download.png')} style={styles.downloadICon} />
                        <Text style={styles.ShareTXT}>DOWNLOAD QR</Text>

                    </View>

                </View>
                <View style={styles.secondLineView}>

                </View>
            </View>


            <DownWork />

        </View>
    )
}

export default RecieveMoney

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white'
    },

    header: {
        width: '100%',
        height: verticalScale(75),
        backgroundColor: 'purple',
        justifyContent: 'flex-end'
    },
    subHeader: {
        width: '100%',
        height: verticalScale(50),
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        fontSize: moderateScale(20),

    },
    ShareTXT: {
        fontSize: scale(15), fontWeight: '600', marginLeft: moderateScale(6), color: 'purple'
    },
    downloadICon: {
        width: scale(20), height: scale(20), tintColor: 'purple'
    },
    ImagesView: {
        flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: moderateScale(20)
    },
    ImagesView1: {
        flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginRight: moderateScale(20)
    },
    LineVIew: {
        height: scale(30), width: 1, backgroundColor: '#8e8e8e', borderWidth: 0.1, opacity: 0.4
    },
    mainViewTop: {
        justifyContent: 'center', width: width, height: height / 3, marginTop: moderateScale(20), alignItems: 'center'
    },
    BarcodePng: {
        width: scale(280), height: scale(280)
    },
    givenMarign: {
        marginTop: moderateScale(20), alignItems: 'center'
    },
    threeCompView: {
        flexDirection: 'row', width: scale(300), justifyContent: 'center'
    },
    cbiBckground: {
        width: 50, height: 50, backgroundColor: '#FFF', borderWidth: .1, borderRadius: moderateScale(20), justifyContent: 'center', alignItems: 'center'
    },
    cbiPng: {
        width: 30, height: 30, borderRadius: moderateScale(10)
    },
    cbiTxt: {
        fontSize: scale(15), color: 'black', fontWeight: '600', marginLeft: moderateScale(10), marginTop: moderateScale(15)
    },
    primaryView: {
        width: scale(50), height: scale(15), backgroundColor: '#0FCF23', justifyContent: 'center', alignItems: 'center', marginLeft: moderateScale(15), marginTop: moderateScale(15), borderRadius: 10
    },
    secondLineView: {
        width: '90%', marginTop: moderateScale(20), borderBottomWidth: 0.2, backgroundColor: '#8e8e8e', opacity: 0.2
    },
    lastView: {
        flexDirection: 'row', marginTop: moderateScale(60), justifyContent: "space-between"
    },
    boxesView: {
        width: '94%', height: 58, borderRadius: moderateScale(17), alignSelf: 'center', justifyContent: 'center'
    },
    TwoTEXTVIEW: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
    },
    CopyICon: {
        width: 20, height: 20, marginRight: moderateScale(20)
    }
})