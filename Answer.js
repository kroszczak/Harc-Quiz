import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";


export default function Answer({ letter, text, getAnswer, answered, col, right, checked }) {
    return (
        <Pressable onPress={() => { getAnswer(letter) }} style={() => [
            styles.answer,
            { backgroundColor: col},
                answered ?
                    (letter == right ? styles.correct :
                    (checked == letter ? styles.incorrect : styles.disabled )) : {}
            ]}>
        <View style={[styles.letter_view]}>
          <Text style={styles.letter}>
            {letter}
          </Text>
        </View>
            
        <View style={[styles.answer_view]}>
            <Text style={styles.answer_text}>
                {text}
            </Text>
        </View>
    </Pressable>
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
    
  answer: {
    borderRadius: 8,
    margin: 5,
    width: '90%',
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: 'row'
    },
    answer_text: {
        fontSize: 18,
        color: '#444'
    },

    correct: { backgroundColor: '#67B441' },
    incorrect: { backgroundColor: '#D0482A' },
    disabled: { opacity: 0.6 },

  letter_view: {
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    width: 50,
    height: '100%',
    },
  
  letter: {
    fontSize: 42,
    color: '#f7f7f7' 
    },
  
    answer_view: {
        borderBottomColor: 'transparent',
        backgroundColor: '#f7f7f7',
        borderColor: '#555',
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderTopRightRadius: 9,
        height: '92%',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

  question_text: {
    fontSize: 20,
    padding: 15,
    color: '#4f4f4f'
  }
});
