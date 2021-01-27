import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const transferSukses = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image style={{width: 125, height: 125}} source={require('../src/success.png')}/>
            <Text style={styles.text1}>Transfer Berhasil!</Text>
            <Text style={styles.text2}>Rp. 200.000</Text>
            <View style={styles.kotak}>
                <Text style={styles.textkotak}> 20 Agustus 2020 </Text>
                <Text style={styles.textkotak}>Penerima: </Text>
                <Text style={styles.textkotak}>Muhammad Ihsan Fajri</Text>
                <Text style={styles.textkotak}>0812123499XXX</Text>
            </View>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('TabNavi')}>
                <Text style={styles.textbtn}>SELESAI</Text>
            </TouchableOpacity>
        </View>
    )
}

export default transferSukses

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text1:{
        fontSize: 24,
        fontWeight: '400',
        lineHeight: 28,
        textAlign: 'center',
        fontFamily: 'roboto',
        marginTop: 43,
    },

    text2:{
        marginTop: 23,
        fontSize: 24,
        fontWeight: '400',
        lineHeight: 28,
        textAlign: 'center',
        fontFamily: 'roboto',
    },

    kotak:{
        marginTop: 23,
        backgroundColor: '#4982C1',
        width: 280,
        height: 130,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textkotak:{
        color: 'white',
        fontSize: 18,
        fontWeight: '400',
        lineHeight: 21,
        marginTop: 5,
    },

    btn:{
        backgroundColor: '#4982C1',
        width: 280,
        height: 48,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#4982C1',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 29,
    },

    textbtn:{
        color: 'white',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 18,
    }

})
