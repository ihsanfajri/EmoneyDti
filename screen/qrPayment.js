import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'

const qrPayment = ({navigation}) => {
    const [nominal, setNominal] = useState(0)

    return (
        <ScrollView style={{backgroundColor: 'white'}}>
            <View style={styles.bagian1}>
                <Image style={{width: 199, height: 199}} source={require('../src/292.png')}/>
                <TextInput style={styles.textInput} placeholder="Nominal Pembayaran" keyboardType='number-pad' onChangeText={setNominal} />
                <View style={styles.kotak}>
                    <Text style={{color: 'white', fontSize: 18, marginTop: 17, }}>Pembayaran Kepada: </Text>
                    <Text style={{color: 'white', fontSize: 18, textAlign: 'center', marginTop: 13,}}>DTI TELKOM UNIVERSITY </Text>
                </View>
                <TouchableOpacity style={styles.btn} onPress={ () => navigation.navigate('QrSukses', {nominal})}>
                    <Text  style={{color: 'white', fontSize: 16, }}>SUBMIT</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
        
    )
}

export default qrPayment

const styles = StyleSheet.create({

    bagian1:{
        justifyContent: 'center',
        alignItems: 'center',
    },

    textInput:{
        width: 280,
        textAlign: 'center'
    },  

    kotak:{
        alignItems: 'center',
        width: 280,
        height: 129,
        backgroundColor: '#4982C1',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#4982C1',
        marginTop: 21,
    },

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
