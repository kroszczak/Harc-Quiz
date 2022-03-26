import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import QuizChoose from './QuizChoose'
import Article from './Article'
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
        component={Article}
        // options={{
          // drawerIcon: ({ focused }) => (<FontAwesome5 name={'btc'} size={20} color={'black'} />
      // )}} 
      />
      <Drawer.Screen name="symbolika" component={Article} />
      <Drawer.Screen name="ogniska" component={Article} />
      <Drawer.Screen name="coś z wiedzy" component={Article} />
      <Drawer.Screen name="coś z wiedzy2" component={Article} />
      <Drawer.Screen name="coś z wiedzy3" component={Article} />
      <Drawer.Screen name="cytaty" component={Article} />
      <Drawer.Screen name="o nas" component={Article} />
    </Drawer.Navigator>
  );
}