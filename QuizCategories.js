import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import QuizChoose from './QuizChoose'



    



const QuizCategories = () => {

    const [activeCategoryList, setActiveCategoryList] = useState('')

    const reset = () => { setActiveCategoryList('') }
    const getListItems = cat => {
        output = quizy.filter(obj => obj.kategoria == cat)
        setActiveCategoryList(output)
    }

    if (!activeCategoryList) {
        return (
            <View style={styles.container}>
                
                <View style={styles.row_container}>
                    <Pressable onPress={() => getListItems('wiedza harcerska')} style={styles.item}>
                        <Text style={styles.itemText}>wiedza harcerska</Text>
                    </Pressable>
                    <Pressable onPress={() => getListItems('ogniska')} style={styles.item}>
                        <Text style={styles.itemText}>ogniska</Text>
                    </Pressable>
                </View>

                <View style={styles.row_container}>
                    <Pressable onPress={() => getListItems('symbolika')} style={styles.item}>
                        <Text style={styles.itemText}>symbolika</Text>
                    </Pressable>
                    <Pressable onPress={() => getListItems('szyfry')} style={styles.item}>
                        <Text style={styles.itemText}>szyfry</Text>
                    </Pressable>
                </View>

                <View style={styles.row_container}>
                    <Pressable onPress={() => getListItems('nawigacja')} style={styles.item}>
                        <Text style={styles.itemText}>nawigacja</Text>
                    </Pressable>
                    <Pressable onPress={() => getListItems('inne')} style={styles.item}>
                        <Text style={styles.itemText}>inne</Text>
                    </Pressable>
                </View>
                



            </View>
        )
    }
    else
    {
        return (
                <QuizChoose data={activeCategoryList} categoryReset={reset}></QuizChoose>
        )
    }
}

export default QuizCategories

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },

    row_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

    },
    
  item: {
      height: '100%',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  },
  
  itemText: {
      fontSize: 18,
      color: '#333'
  }
})