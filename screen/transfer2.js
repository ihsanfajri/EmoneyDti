import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ScrollView, TouchableOpacity, TextInput } from 'react-native-gesture-handler'

const transfer2 = ({navigation}) => {
    return (
        <ScrollView style={{backgroundColor:'white'}}>
            <View style={styles.bagian1}>
                <Image style={{width:240, height: 172,}} source={require('../src/6617.png')}/>
                <TextInput style={styles.textinput} placeholder='Nominal Transfer' />
                <TextInput style={styles.textinput} placeholder='Nomor Handphone Penerima' />
                <Text style={styles.text1}> Penerima :  </Text>
                <Text style={styles.text2}> Muhammad Ihsan Fajri </Text>
                <TouchableOpacity style={styles.btn} onPress={ () => navigation.navigate('TransferSukses')}>
                    <Text style={styles.titleBtn}>Transfer</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default transfer2

const styles = StyleSheet.create({
    bagian1:{
        marginTop: 21,
        alignItems: 'center',
    },

    textinput:{
        width: 280,
        height: 48,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#C3C3C3',
        backgroundColor: 'white',
        marginTop: 21,
    },

    btn:{
        width:280,
        height: 48,
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor: '#4982C1',
        borderColor: '#4982C1',
        marginTop: 21,
        justifyContent: 'center',
    },

    titleBtn:{
        color: 'white',
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 16,
    },

    text1:{
        marginTop: 21,
        fontSize: 16,
        fontWeight: 'bold',
    },

    text2:{
        marginTop: 21,
        fontSize: 16,
        fontWeight: '300',
    }
})
