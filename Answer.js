import { Animated, View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import React, { useEffect, useState, useRef } from "react";


 


export default function Answer({ id, letter, text, getAnswer, bgState, col }) {

    const [color, setColor] = useState(col)
    useEffect(() => setColor(col), [id])
    
    
    return (
        <TouchableWithoutFeedback onPress={() => {
            if(!color) setColor('#ff0000')
            getAnswer(letter)
            }}>
            <Animated.View style={styles.answer(bgState, color)}>
            <Animated.View style={styles.letterView(bgState)}>
                <Animated.Text style={styles.letter(bgState)}>
                    {letter}
                </Animated.Text>    
            </Animated.View>
                
            <View style={styles.answer_view}>
                <Animated.Text style={[styles.answerText(bgState)]}>
                    {text}
                </Animated.Text>
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
    
  answer: (bgState, col) => ({
        width: '100%' ,
        borderRadius: 40,
        backgroundColor: col ? bgState.interpolate({
            inputRange: [0, 1],
            outputRange: ['#fff', col]
        }): '#fff',
        borderWidth: 1,
        borderColor: bgState.interpolate({
            inputRange: [0, 1],
            outputRange: ['#ccc', '#fff'],
        }),
        margin: 7,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center",
        flexDirection: 'row'
  }),
  
    answerText: (bgState) => ({
        fontSize: 18,
        color: bgState.interpolate({
            inputRange: [0, 1],
            outputRange: ['#666', '#fff']
        })
    }),

    letterView: (bgState) => ({
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        height: 35,
        width: 35,
        borderWidth: 1,
        borderRadius: 40,
        borderColor: bgState.interpolate({
            inputRange: [0, 1],
            outputRange: ['#67B441', '#eee']
        }),
    }),
  
  letter: (bgState) => ({
    fontSize: 20,
    color: bgState.interpolate({
      inputRange: [0, 1],
      outputRange: ['#67B441', '#eee']
    }),
    }),
  
    answer_view: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
    },

  question_text: {
    fontSize: 20,
    padding: 15,
    color: '#f4f4f4'
  }
});
