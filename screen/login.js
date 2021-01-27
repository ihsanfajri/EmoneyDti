import { NavigationContainer } from '@react-navigation/native'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

const login = ({navigation}) => {
    // const [user, setUser] = useState(" ");

    return (
        <View style={styles.container}>
            <Text style={styles.title}>E-money</Text>
            <TextInput style={styles.textInput} placeholder="Usermame"/>
            <TextInput style={styles.textInput} placeholder="Password" />
            <TouchableOpacity style={styles.btnLogin}>
                <Text style={styles.textLogin} onPress={ () => navigation.navigate('TabNavi')}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnRegis} onPress={ () => navigation.navigate('Registrasi')}>
                <Text style={styles.textRegis}>Registrasi</Text>
            </TouchableOpacity>
        </View>
    )
}

export default login

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },

    title:{
        textAlign : 'center',
        marginBottom: 19,
        fontSize: 24,
        color: '#4982C1'
    }, 
    
    textInput:{
        width: 280,
        height: 48,
        borderRadius: 4,
        borderWidth: 1,
        marginBottom: 25,
        borderColor: '#C3C3C3',
    },

    btnLogin:{
        width: 280,
        height: 48,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#4982C1',
        backgroundColor: '#4982C1',
        justifyContent: 'center',
        marginBottom: 25,
    },

    textLogin:{
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
        fontWeight: "500",
    }






})
