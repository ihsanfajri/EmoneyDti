import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, FlatList} from 'react-native'

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
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f61',
        title: 'Second Item',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d71',
        title: 'Third Item',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f64',
        title: 'Second Item',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d74',
        title: 'Third Item',
      },
  ];
  
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );


const  histTransaksi = () => {
    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );

    return (

        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}

export default histTransaksi

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
        title: {
        fontSize:18,
    },
})
