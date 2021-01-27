import React from 'react'
import { StyleSheet, Text, View , ScrollView } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

const registrasi = () => {
    return (
        <ScrollView style={styles.scroll}>
            <View style={styles.container}>
             
                <TextInput style={styles.textInput} placeholder=" Email"/>
                <TextInput style={styles.textInput} placeholder=" Password"/>
                <TextInput style={styles.textInput} placeholder=" Nama"/>
                <TextInput style={styles.textInput} placeholder=" No.Handphone"/>    
                <TouchableOpacity style={styles.btnRegis}>
                    <Text style={styles.textRegis}> SUBMIT </Text>
                </TouchableOpacity>  
            
            </View>
        </ScrollView>   
        
    )
}

export default registrasi

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems:'center',
        marginTop: 95,
    },

    scroll:{
        flex: 1,
        backgroundColor: 'white',
    },

    textInput:{
        width: 280,
        height: 48,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#C3C3C3',
        marginBottom: 31,
        backgroundColor: 'white'
    },

    btnRegis:{
        backgroundColor: '#4982C1',
        width: 280,
        height: 48,
        borderWidth: 1,
        borderColor: '#4982C1',
        justifyContent: 'center',

    },

    textRegis:{
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '500',

    },
})
