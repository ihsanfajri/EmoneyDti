import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'


const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d71',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d73',
        title: 'Third Item',
    },
  ];

const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

const home = ({navigation}) => {

      const renderItem = ({ item }) => (
        <Item title={item.title} />
      );
    

    return (
        <View style={styles.container}>
            <View style={styles.bagian1}>
                <Text style={styles.text1}>Saldo Anda: </Text>
                <Text style={styles.text2}>RP. 10.000.000</Text>
            </View>
            <View style={styles.bagian2}>
                <View style={styles.kotak}>
                    <View style={{alignItems: 'center', marginLeft: 23}}>
                        <TouchableOpacity style={styles.btn} onPress={ () => navigation.navigate('Topup')}>
                            <Image style={{height: 17, width: 17,}} source={require('../src/plus.png')}/>
                        </TouchableOpacity>
                        <Text style={styles.textBtn}>Top Up</Text>
                    </View>
                    <View style={{alignItems: 'center',}}>
                        <TouchableOpacity style={styles.btn} onPress={ () => navigation.navigate('Qr')}>
                            <Image style={{height: 17, width: 17,}} source={require('../src/qr-code.png')}/>
                        </TouchableOpacity>
                        <Text style={styles.textBtn}>Qr Code</Text>
                    </View>
                    <View style={{alignItems: 'center', marginRight: 23}}>
                        <TouchableOpacity style={styles.btn} onPress={ () => navigation.navigate('Transfer')}>
                            <Image style={{height: 17, width: 17,}} source={require('../src/transfer.png')}/>
                        </TouchableOpacity>
                        <Text style={styles.textBtn}>Transfer</Text>
                    </View>
                </View>
            </View>
            <View style={styles.bagian3}>
                <Text>
                    Transaksi Terakhir
                </Text>
                <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                />
                
            </View>
         </View>
    )
}

export default home

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#E5E5E5',
    },

    bagian1:{
        flex: 1,
        height: 134,
        backgroundColor: 'white',
        borderBottomEndRadius: 4,
        borderWidth: 1,  
        borderColor: 'white',
        justifyContent: 'flex-end'
    },

    text1:{
        fontSize: 14,
        fontWeight: '400',
        fontStyle: 'normal',
        color: '#575757',
        marginLeft: 20,
    },

    text2:{
        fontSize: 36,
        color: '#575757',
        marginLeft: 20,
    },

    bagian2:{
        flex: 0.75,
        marginTop: 20,
        alignItems: 'center',
    },

    kotak:{
        width: 320,
        height: 89,
        backgroundColor: '#4982C1',
        borderWidth: 1,
        borderColor: '#4982C1',
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    btn:{
        width: 48,
        height: 48,
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 4,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },

    textBtn:{
        color: 'white',
        fontWeight: '500',
        fontSize: 14,
        textAlign:'center',
    }, 

    bagian3:{
        flex: 3,
        // backgroundColor: 'blue',
        marginTop: 38,
    },

    item: {
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    
    title: {
    fontSize: 18,
    }



    
})
