import { View, Text, StyleSheet, Pressable, FlatList, SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";

export default function Prawo() {

    let prawo = [
        'Harcerz sumiennie spełnia swoje obowiązki wynikające z Przyrzeczenia Harcerskiego',
        'Na słowie harcerza polegaj jak na Zawiszy',
        'Harcerz jest pożyteczny i niesie pomoc bliźnim',
        'Harcerz w każdym widzi bliźniego, a za brata uważa każdego innego harcerza',
        'Harcerz postępuje po rycersku',
        'Harcerz miłuje przyrodę i stara się ją poznać',
        'Harcerz jest karny i posłuszny rodzicom i wszystkim swoim przełożonym',
        'Harcerz jest zawsze pogodny',
        'Harcerz jest oszczędny i ofiarny',
        'Harcerz pracuje nad sobą, jest czysty w myśli, mowie i uczynkach; jest wolny od nałogów'
    ]

    const renderListItem = () => {
        
    }

    return (
    <View style={{ flex: 1, paddingTop: 20, paddingLeft: 0,backgroundColor: '#fff', justifyContent: "flex-start", alignItems: "flex-start" }}>
        <View  style={styles.headerView}>
            <Text style={styles.header}>Prawo Harcerskie</Text>
        </View>
            <SafeAreaView>
            <FlatList
                style = {{ flex: 1}}
                data = {prawo}
                renderItem = { ({ item, index }) =>
                <View style={styles.itemContainer}>
                    <Text style={[styles.number]}>{index + 1}.</Text>    
                    <Text style={styles.item}>{item}</Text>
                </View>}    
                />
                </SafeAreaView>
    </View>
  );
}


const styles = StyleSheet.create({

    headerView: {
        marginBottom: 10

    },

    header: { 
        fontSize: 17,
        letterSpacing: 3,
        color: '#666',
        fontWeight: 'bold',
        paddingRight: 10
    },


    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 10,
    },

    item: {
        fontSize: 17,
        color: '#666',
        textAlign: 'justify'
    },

    number: {
        width: '15%',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#666'

    }

})