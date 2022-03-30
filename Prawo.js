import { View, Text, StyleSheet, FlatList,SafeAreaView} from "react-native";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function Prawo() {

    const Tab = createBottomTabNavigator();

 

    // const List = prawo.map((item, index) => {
    //         return (
    //             <View key={ index } style={styles.itemContainer}>
    //                 <Text style={[styles.number]}>{index + 1}.</Text>
    //                 <Text style={styles.item}>{item}</Text>
    //             </View>
    //         )
    // })
    

const PrawoZHP = () => {
        
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

    return ( 
        <SafeAreaView style={styles.container}>
            <FlatList
                style={{marginTop: 20}}
                data={prawo}
                renderItem={({ item, index }) =>
                    <View key={index} style={styles.itemContainer}>
                        <Text style={[styles.number]}>{index + 1}.</Text>    
                        <Text style={styles.item}>{item}</Text>
                    </View>}
            />
        </SafeAreaView>
  );
}
            
const PrawoZHR = () => {
   let prawo = [
       'Harcerz służy Bogu i Polsce i sumiennie spełnia swoje obowiązki',
        'Na słowie harcerza polegaj jak na Zawiszy',
        'Harcerz jest pożyteczny i niesie pomoc bliźnim',
        'Harcerz w każdym widzi bliźniego, a za brata uważa każdego innego harcerza',
        'Harcerz postępuje po rycersku',
        'Harcerz miłuje przyrodę i stara się ją poznać',
        'Harcerz jest karny i posłuszny rodzicom i wszystkim swoim przełożonym',
        'Harcerz jest zawsze pogodny',
        'Harcerz jest oszczędny i ofiarny',
        'Harcerz jest czysty w myśli, mowie i uczynkach, nie pali tytoniu i nie pije napojów alkoholowych'
        ]

    return ( 
        <SafeAreaView style={styles.container}>
            <FlatList
                style={{marginTop: 20}}
                data={prawo}
                renderItem={({ item, index }) =>
                    <View key={index} style={styles.itemContainer}>
                        <Text style={[styles.number]}>{index + 1}.</Text>    
                        <Text style={styles.item}>{item}</Text>
                    </View>}
            />
        </SafeAreaView>
    )
}

const PrawoSHK = () => {
   let prawo = [
       'Harcerz dba o swój honor, aby zasłużyć na zaufanie',
        'Harcerz jest lojalny wobec swojego kraju, rodziców, przełożonych i podwładnych',
        'Harcerz jest powołany do służby bliźniemu i jego zbawieniu',
        'Harcerz jest przyjacielem wszystkich i bratem dla każdego innego Harcerza',
        'Harcerz jest uprzejmy i rycerski',
        'Harcerz widzi w przyrodzie dzieło Boże, szanuje rośliny i zwierzęta',
        'Harcerz jest karny, każde zadanie wykonuje sumiennie do końca',
        'Harcerz jest panem samego siebie, uśmiecha się i śpiewa w kłopotach',
        'Harcerz jest gospodarny i troszczy się o dobro innych',
        'Harcerz jest czysty w myśli, mowie i uczynkach'
        ]

    return ( 
        <SafeAreaView style={styles.container}>
            <FlatList
                style={{marginTop: 20}}
                data={prawo}
                renderItem={({ item, index }) =>
                    <View key={index} style={styles.itemContainer}>
                        <Text style={[styles.number]}>{index + 1}.</Text>    
                        <Text style={styles.item}>{item}</Text>
                    </View>}
            />
        </SafeAreaView>
    )
}

    return (
    <NavigationContainer independent={true}>
        <Tab.Navigator>
            <Tab.Screen name="ZHP" component={PrawoZHP} />
            <Tab.Screen name="ZHR" component={PrawoZHR} />
            <Tab.Screen name="SHK" component={PrawoSHK} />
        </Tab.Navigator>
    </NavigationContainer>

  );
}


const styles = StyleSheet.create({

    container: {
        backgroundColor: '#fff'
    },

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
        width:'75%'
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
