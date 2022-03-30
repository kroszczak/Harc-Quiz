import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Przyrzeczenie = () => {
  return (
        <View style={{ flex: 1, paddingTop: 20, paddingLeft: 0, backgroundColor: '#fff', justifyContent: "flex-start", alignItems: "flex-start" }}>
            <View style={styles.headerView}>
              <Text style={styles.header}>Przyrzeczenie ZHP</Text>
            </View>
        </View>
  )
}

export default Przyrzeczenie

const styles = StyleSheet.create({

    headerView: {
        marginBottom: 15

    },

    header: { 
        fontSize: 19,
        letterSpacing: 3,
        color: '#888',
        fontWeight: 'bold',
        paddingRight: 10,
        marginLeft: '3%'
    },


    itemContainer: {
        minHeight: 45,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 15,
    },

    item: {
        fontSize: 17,
        color: '#888',
        textAlign: 'justify',
        width:'80%'
    },

    number: {
        width: '10%',
        marginRight: '3%',
        marginLeft: '3%',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#888',

    }

})