import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import dynamicLinks from '@react-native-firebase/dynamic-links';
import Clipboard from '@react-native-clipboard/clipboard';

const DeepLinking = () => {

    const [generateLink,setGenerateLink]=useState('');

   const buildLink=  async function buildLink() {
        const link = await dynamicLinks().buildLink({
          link: 'https://invertase.io',
          // domainUriPrefix is created in your Firebase console
          domainUriPrefix: 'https://phonepaycloneapp16.page.link',
          // optional setup which updates Firebase analytics campaign
          // "banner". This also needs setting up before hand
          analytics: {
            campaign: 'banner',
          },
        });
      
        setGenerateLink(link);
      }
  return (
    <View style={{flex:1,backgroundColor:'white',justifyContent:"center",alignItems:'center'}}>
      <Text style={{fontSize:11,color:'red'}}>{generateLink}</Text>
      <TouchableOpacity onPress={()=>{buildLink()}} style={{width:200,height:50,borderWidth:1,borderRadius:10,justifyContent:'center',alignItems:'center',marginTop:50}}>
         <Text style={{fontSize:22,color:'black'}}>Generate Deep Link</Text>
              </TouchableOpacity>
         <TouchableOpacity onPress={()=>{Clipboard.setString(generateLink)}} style={{width:200,height:50,borderWidth:1,borderRadius:10,justifyContent:'center',alignItems:'center',marginTop:50}}>
                <Text style={{fontSize:22,color:'black'}}>Copy Deep Link</Text>
      </TouchableOpacity>
      
    </View>
  )
}

export default DeepLinking

const styles = StyleSheet.create({})