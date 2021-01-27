import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'

const topup = ({navigation}) => {
    const [nominal, setNominal] = useState(0);

    return (
        <ScrollView style={{backgroundColor:'white'}}>
            <View style={styles.bagian1}>
                <Image style={{width:156, height: 156,}} source={require('../src/digital-wallet.png')}/>
                <TextInput onChangeText={setNominal} style={styles.textinput} placeholder='Nominal Top Up' />
                <TouchableOpacity style={styles.btn} onPress={ () => navigation.navigate('TopupSukses', {nominal})}>
                    <Text style={styles.titleBtn}>SUBMIT</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default topup

const styles = StyleSheet.create({
    bagian1:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 136,
    },

    textinput:{
        width: 280,
        height: 48,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#C3C3C3',
        backgroundColor: 'white',
        marginTop: 28,
    },

    btn:{
        width:280,
        height: 48,
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor: '#4982C1',
        borderColor: '#4982C1',
        marginTop: 20,
        justifyContent: 'center',
    },

    titleBtn:{
        color: 'white',
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 16,
    }

})
