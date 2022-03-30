import { Animated, View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import React, { useRef, useEffect, useState } from "react";


 


export default function Answer({ letter, text, getAnswer, answered, col, right, checked }) {
  const bgState = useRef(new Animated.Value(0)).current
  useEffect(() => {
    bgState.setValue(0)
  }, [ text ])

  const animTo1 = () => {
  Animated.timing(
      bgState,
      {
        useNativeDriver: false,
        toValue: 1,
        duration: 300,
      }
    ).start();
}

  return (
    <TouchableWithoutFeedback onPress={() => { getAnswer(letter); animTo1() }}>
      <Animated.View style={ styles.answer(bgState)}>
      <View style={[styles.letter_view, answered ? { borderColor: '#eee' }:{}]}>
        <Animated.Text style={[styles.letter(bgState), answered ? { color: '#eee' }:{}]}>
          {letter}
        </Animated.Text>
      </View>
      <View style={styles.answer_view}>
        <Text style={[styles.answer_text, answered ? { color: '#fff' }:{}]}>
          {text}
        </Text>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  )
}
    
const styles = StyleSheet.create({
  question: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    shadowColor: '#000',
    shadowRadius: 10,
    margin: 15,
    width: '90%',
    flex: 3,
    justifyContent: "center",
    alignItems: "center" 
    },
    
  answer: (bgState) => ({
    width: '100%' ,
    borderRadius: 40,
    backgroundColor: bgState.interpolate({
      inputRange: [0, 1],
      outputRange: ['#fff', '#6a4866'],
    }),
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 7,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: "center",
    flexDirection: 'row'
  }),
  
  answer_text: {
        fontSize: 18,
        color: '#666'
    },

  correct: { backgroundColor: '#67B441'},
    incorrect: { backgroundColor: '#D0482A' },
    disabled: { opacity: 0.6 },

  letter_view: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    height: 35,
    width: 35,
    borderWidth: 1,
    borderRadius: 40,
    borderColor: '#67B441',
    },
  
  letter: (bgState) => ({
    fontSize: 20,
    color: bgState.interpolate({
      inputRange: [0, 1],
      outputRange: ['#67B441', '#eee'],
    }),
    }),
  
    answer_view: {
        borderColor: '#555',
        borderRadius: 40,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

  question_text: {
    fontSize: 20,
    padding: 15,
    color: '#f4f4f4'
  }
});
