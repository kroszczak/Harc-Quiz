import "react-native-gesture-handler";
import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
// import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MyDrawer from "./Drawer";

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
