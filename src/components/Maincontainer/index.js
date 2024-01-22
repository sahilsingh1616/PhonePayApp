import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import Home from '../../screens/Home';
import History from '../../screens/History';
import Store from '../../screens/Store';
import Insurance from '../../screens/Insurance';
import Wealth from '../../screens/Wealth';


const Tab = createBottomTabNavigator();
const screenOption = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 3,
    height: 60,
    backgroundColor: '#fff',
    width: '100%',



  }
}

const MainContainer = () => {
  return (
   
      <Tab.Navigator screenOptions={screenOption}>
        <Tab.Screen name='Home' component={Home} options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <View style={{ width: 34, height: 34, backgroundColor: focused ? 'purple' : '#bdbdbd', borderRadius: 17, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../../../assets/images/home.png')} resizeMode='contain' style={{ width: 20, height: 20, tintColor: 'white' }} />
              </View>
              <Text style={{ color: focused ? 'purple' : '#bdbdbd' }}>Home</Text>
            </View>
          )
        }}

        />

        <Tab.Screen name='Store' component={Store} options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <View style={{ width: 34, height: 34, backgroundColor: focused ? 'purple' : '#bdbdbd', borderRadius: 17, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../../../assets/images/stores.png')} resizeMode='contain' style={{ width: 20, height: 20, tintColor: 'white' }} />
              </View>
              <Text style={{ color: focused ? 'purple' : '#bdbdbd' }}>Stores</Text>
            </View>
          )
        }} />

        <Tab.Screen name='Insurance' component={Insurance} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ width: 34, height: 34, backgroundColor: focused ? 'purple' : '#bdbdbd', borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../../../assets/images/insurance.png')} resizeMode='contain' style={{ width: 20, height: 20, tintColor: 'white' }} />
              </View>
              <Text style={{ color: focused ? 'purple' : '#bdbdbd' }}>Insurance</Text>
            </View>
          )
        }} />

        <Tab.Screen name='Wealth' component={Wealth} options={{
          tabBarIcon: ({ focused }) => (
          <View>
              <View style={{ width: 34, height: 34, backgroundColor: focused ? 'purple' : '#bdbdbd', borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../../../assets/images/rupee.png')} resizeMode='contain' style={{ width: 20, height: 20, tintColor: 'white' }} />
              </View>
              <Text style={{ color: focused ? 'purple' : '#bdbdbd' }}>Wealth</Text>
            </View>
          )
        }}
        />

        <Tab.Screen name='History' component={History} options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <View style={{ width: 34, height: 34, backgroundColor: focused ? 'purple' : '#bdbdbd', borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../../../assets/images/transaction.png')} resizeMode='contain' style={{ width: 20, height: 20, tintColor: 'white' }} />
              </View>
              <Text style={{ color: focused ? 'purple' : '#bdbdbd' }}>History</Text>
            </View>
          )
        }} />

      </Tab.Navigator>
   
  )
}

export default MainContainer

const styles = StyleSheet.create({})

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: 'white' },
//   bottomNav: { width: '100%', height: verticalScale(70), backgroundColor: '#f2f2f2', position: 'absolute', bottom: 0 },

//   bottomNav2: { width: '100%', height: verticalScale(55), justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row' },

//   bottomTab: { width: '20%', height: height, justifyContent: 'center', alignItems: 'center' },
//   tabIcon: { width: scale(20), height: scale(20), tintColor: 'white' },
//   tabIconBg: { width: scale(30), height: scale(30), borderRadius: (15), justifyContent: 'center', alignItems: 'center' }
// })


// {/* <View style={styles.container}>
// {selectedTab == 0 ? <Home /> : selectedTab == 1 ? <Store /> : selectedTab == 2 ? <Insurance /> : selectedTab == 3 ? <Wealth /> : <History />}
// <View style={[styles.bottomNav,{backgroundColor:'pink'}]}>
//   <View style={[styles.bottomNav2,{backgroundColor:'red'}]}>
//     <TouchableOpacity onPress={() => setSelectedTab(0)} style={styles.bottomTab}>
//       <View style={[styles.tabIconBg, { backgroundColor: selectedTab == 0 ? 'purple' : '#bdbdbd' }]}>
//         <Image source={require('../../../assets/images/home.png')} style={styles.tabIcon} />

//       </View>
//       <Text style={{ color: selectedTab == 0 ? 'purple' : '#bdbdbd' }}>Home</Text>

//     </TouchableOpacity>
//     <TouchableOpacity onPress={() => setSelectedTab(1)} style={styles.bottomTab}>
//       <View style={[styles.tabIconBg, { backgroundColor: selectedTab == 1 ? 'purple' : '#bdbdbd' }]}>
//         <Image source={require('../../../assets/images/stores.png')} style={styles.tabIcon} />

//       </View>
//       <Text style={{ color: selectedTab == 1 ? 'purple' : '#bdbdbd' }}>Stores</Text>

//     </TouchableOpacity>
//     <TouchableOpacity onPress={() => setSelectedTab(2)} style={styles.bottomTab}>
//       <View style={[styles.tabIconBg, { backgroundColor: selectedTab == 2 ? 'purple' : '#bdbdbd' }]}>
//         <Image source={require('../../../assets/images/insurance.png')} style={styles.tabIcon} />

//       </View>
//       <Text style={{ color: selectedTab == 2 ? 'purple' : '#bdbdbd' }}>Insurance</Text>

//     </TouchableOpacity>
//     <TouchableOpacity onPress={() => setSelectedTab(3)} style={styles.bottomTab}>
//       <View style={[styles.tabIconBg, { backgroundColor: selectedTab == 3 ? 'purple' : '#bdbdbd' }]}>
//         <Image source={require('../../../assets/images/rupee.png')} style={styles.tabIcon} />

//       </View>
//       <Text style={{ color: selectedTab == 3 ? 'purple' : '#bdbdbd' }}>Wealth</Text>

//     </TouchableOpacity>
//     <TouchableOpacity onPress={() => setSelectedTab(4)} style={styles.bottomTab}>
//       <View style={[styles.tabIconBg, { backgroundColor: selectedTab == 4 ? 'purple' : '#bdbdbd' }]}>
//         <Image source={require('../../../assets/images/transaction.png')} style={[styles.tabIcon, { tintColor: 'white' }]} />

//       </View>
//       <Text style={{ color: selectedTab == 4 ? 'purple' : '#bdbdbd' }}>History</Text>
//     </TouchableOpacity>

//   </View>

// </View>
// </View>  */}

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const MainContainer = () => {
//   return (
//     <View>
//       <Text>MainContainer</Text>
//     </View>
//   )
// }

// export default MainContainer

// const styles = StyleSheet.create({})