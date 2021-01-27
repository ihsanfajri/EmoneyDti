import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'

const qr = ({navigation}) => {
    return (
        <View style={{justifyContent:"center", alignItems: 'center',}}>
            <Text>Menu Qr Code Sementara</Text>
            <TouchableOpacity style={styles.btn} onPress={ () => navigation.navigate('QrPayment')}>
                    <Text  style={{color: 'white', fontSize: 16, }}>Komfirmasi Pembayaran</Text>
            </TouchableOpacity>
        </View>
    )
}

export default qr

const styles = StyleSheet.create({
    btn:{
        width: 280,
        height: 48,
        borderWidth: 1,
        borderRadius: 4, 
        backgroundColor: '#4982C1',
        borderColor: '#4982C1',
        marginTop: 32,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
