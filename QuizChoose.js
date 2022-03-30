import { Text, StyleSheet, View, FlatList, ActivityIndicator, Image, TextInput} from 'react-native'
import React, { useState, useEffect } from "react";
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

export default function QuizChoose({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [result, setResult] = useState([])
    
    const getData = async () => {
     try {
            const response = await fetch('https://5szczep.pl/php/endpoints/Test.php');
            const json = await response.json();
            setData(json);
            setResult(json)
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    const search = (text) => {
        const regex = new RegExp('/(?=.*?\bhello)(?=.*?\bworld).*/i')
        let result=[]
        data.map(e => { if(text.includes(e.title)) result.push(e) })
        setResult(result);
    }
    


    const renderItem = ({ item }) => {
        return (
            <Pressable key={item.id} onPress={() => navigation.navigate('Quiz', { quiz: item  })} style={styles.QuizListItem}>
                <Image
                    style = {{flex: 1, borderTopLeftRadius: 3, borderTopRightRadius: 3}}
                    source={{
                        uri: `https://5szczep.pl/images/${item.src}`}}
      />
                <View style={styles.textContainer}><Text style={[styles.QuizListItemText, styles.title]}>{item.title}</Text></View>
            </Pressable>
        );
    }

    useEffect(() => getData(), [])
    
    return (
        <View style={{ flex: 1}}>
            {isLoading ? <ActivityIndicator /> : (
                <View style={{flex: 1}}>
                    <View style={{ flex: 0.07, backgroundColor: '#67B441', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 20,  paddingRight: 20 }}>
                        <TextInput
                            onChangeText={(text) => {
                                let result = []
                                // let middleware = []
                                // text = text.split(' ').filter(x => x)
                                // console.log(text)
                                data.map(e => { if(e.title.includes(text)) result.push(e) })
                                setResult(result);
                            }}
                            
                            // value
                            placeholder="Wyszukaj"
                        />
                        <Text>LUPA</Text>
                    </View>
                    <FlatList  style={{flex: 3, margin: 10}}
                        data={result}
                        numColumns={2}
                        renderItem={renderItem} 
                    />
                </View>)}
        </View>
    )
}


const styles = StyleSheet.create({
    QuizListItem: {
        flex: 1,
        maxWidth: '50%',
        height: 150,
        backgroundColor: '#ccc',
        borderRadius: 5,
        margin: 2,
        justifyContent: 'flex-end'
    },

    textContainer: {
        backgroundColor: '#67B441',
        borderBottomEndRadius: 3,
        borderBottomLeftRadius: 3,
        height: '30%',
        zIndex: 0,
    },

    QuizListItemText: {
        color: '#f7f7f7',
        paddingLeft: 8,
        paddingBottom: 4,
        paddingTop: 2,
        paddingRight: 8,
        fontSize: 15,
        fontWeight: 'bold',
    },


})