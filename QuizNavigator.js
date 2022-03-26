import * as React from 'react';
import QuizChoose from './QuizChoose';
import QuizScreen from './QuizScreen';
import { View, Text, StyleSheet, Pressable } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackActions } from '@react-navigation/native';
import { CommonActions } from '@react-navigation/native';
import QuizFetch from './QuizFetch';
import QuizInfo from './QuizInfo';


const Stack = createNativeStackNavigator();

const QuizNavigator = ({ navigation }) => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Lista" component={QuizChoose} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz" component={QuizInfo} options={{
          headerTitle: props => <Text {...props} />,
          headerShown: true
          
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default QuizNavigator