import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import login from './screen/login'
import registrasi from './screen/registrasi'
import home from './screen/home'
import histTransaksi from './screen/histTransaksi'
import profile from './screen/profile'
import topup from './screen/topup'
import transfer from './screen/transfer'
import transfer2 from './screen/transfer2'
import transferSukses from './screen/transferSukses'
import topupSukses from './screen/topupSukses'
import qr from './screen/qr'
import qrPayment from './screen/qrPayment'
import qrSukses from './screen/qrSukses'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const IconBottom = (props) => {
  const {color, focused} = props.data
  let colorSelected = focused ? color : '#4982C1'
  return (
    <View>
      <Image source={props.image} style={{ width: 25, height: 25, tintColor: colorSelected }}/>
    </View>
  )
}

const TabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="Home"
                component={home}
                options={{tabBarLabel: () => {return null},
                          tabBarIcon: (props) => (
                            <IconBottom data={props} image={require('./src/homepage.png')}/>
                          )
                        }}
            />
            <Tab.Screen 
                name="HistTransaksi"
                component={histTransaksi}
                options={{tabBarLabel: () => {return null},
                          tabBarIcon: (props) => (
                            <IconBottom data={props} image={require('./src/transaction.png')}/>
                          )
                        }}
            />
            <Tab.Screen 
                name="Profile"
                component={profile}
                options={{tabBarLabel: () => {return null},
                          tabBarIcon: (props) => (
                            <IconBottom data={props} image={require('./src/user2.png')}/>
                          )
                        }}
            />
        </Tab.Navigator>
    )
}

const Router = () => {
  return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={login} options={{headerShown: false,}}/>
        <Stack.Screen name="Registrasi" component={registrasi} options={{title:'Registrasi', headerStyle:{backgroundColor:'#005690',}, headerTintColor: 'white' }} />
        <Stack.Screen name="Home" component={home} options={{headerShown: false,}} />
        <Stack.Screen name="HistTransaksi" component={histTransaksi} options={{headerShown: false,}} />
        <Stack.Screen name="Profile" component={profile} options={{headerShown: false,}} />
        <Stack.Screen name="Topup" component={topup} options={{title:'Top Up', headerStyle:{backgroundColor:'#005690',}, headerTintColor: 'white' }} />
        <Stack.Screen name="TopupSukses" component={topupSukses} options={{headerShown: false,}} />
        <Stack.Screen name="Transfer" component={transfer} options={{title:'Transfer', headerStyle:{backgroundColor:'#005690',}, headerTintColor: 'white' }} />
        <Stack.Screen name="Transfer2" component={transfer2} options={{title:'Transfer', headerStyle:{backgroundColor:'#005690',}, headerTintColor: 'white' }} />
        <Stack.Screen name="TransferSukses" component={transferSukses} options={{headerShown: false, }} />
        <Stack.Screen name="Qr" component={qr} options={{title: 'Qr Payment', headerStyle:{backgroundColor:'#005690',}, headerTintColor: 'white'}} />
        <Stack.Screen name="QrPayment" component={qrPayment} options={{title: 'Konfirmasi Pembayaran', headerStyle:{backgroundColor:'#005690',}, headerTintColor: 'white' }} />
        <Stack.Screen name="QrSukses" component={qrSukses} options={{headerShown: false,}} />
        <Stack.Screen name="TabNavi" component={TabNavigation} options={{headerShown: false,}}  />
      </Stack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
    
  )
}

export default App

const styles = StyleSheet.create({})
