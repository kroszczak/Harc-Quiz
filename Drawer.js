import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import QuizChoose from './QuizChoose'
import Prawo from './Prawo'
import Przyrzeczenie from "./Przyrzeczenie";
import QuizCategories from "./QuizCategories";
import QuizNavigator from "./QuizNavigator";
const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: "front",
        headerStyle: { backgroundColor: "#67b441" },
        // headerLeft: (focused, size, color, this) => (this),
      }}
    >
      <Drawer.Screen
        name="Quizy"
        component={QuizNavigator}
        options={{
          headerTitle: props => <Text {...props} />,
        }}
            />

      <Drawer.Screen
        name="prawo harcerskie"
        component={Prawo}
        // options={{
          // drawerIcon: ({ focused }) => (<FontAwesome5 name={'btc'} size={20} color={'black'} />
      // )}} 
      />
      <Drawer.Screen name="Przyrzeczenie" component={Przyrzeczenie} />
      <Drawer.Screen name="ogniska" component={Prawo} />
      <Drawer.Screen name="coś z wiedzy" component={Prawo} />
      <Drawer.Screen name="coś z wiedzy2" component={Prawo} />
      <Drawer.Screen name="coś z wiedzy3" component={Prawo} />
      <Drawer.Screen name="cytaty" component={Prawo} />
      <Drawer.Screen name="o nas" component={Prawo} />
    </Drawer.Navigator>
  );
}