import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const profile = ({navigation, route}) => {
    return (
         <View style= {styles.container}>
            <View style= {styles.bagian1}>
                <Image style={{width: 100, height: 100, borderRadius: 100/2, backgroundColor: 'white', marginTop:29,}} source={require('../src/user.png')}/>
                <Text style={{color: 'white', fontSize: 16, marginTop: 20, marginBottom: 9 }}>
                    Muahmmad Ihsan Fajri
                </Text>
                <Text style={{color: 'white', fontSize: 16,}}>
                    081212555366
                </Text>
            </View>
            <View style={styles.bagian2}>
                <TouchableOpacity style={styles.btn}>
                    <Text> Ubah Profile </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text> Ganti Password </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text> Bantuan </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text> Tentang </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={ () => navigation.navigate('Login')}>
                    <Text style={{color:'red'}}> Log Out </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default profile

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // backgroundColor: 'red',
    },

    bagian1:{
        backgroundColor: '#005690',
        height: 224,
        width: 360,
        alignItems: 'center',
    },

    bagian2:{
        flex: 1,
    },

    btn:{
        height: 50,
        width: 360,
        justifyContent: 'center',
    }
})
