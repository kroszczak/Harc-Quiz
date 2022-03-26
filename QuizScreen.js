import "react-native-gesture-handler";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import React, { useState, useEffect } from "react";
import Answer from './Answer'

checked=''
export default function QuizScreen({ quiz, j }) {
    const [answered, setAnswered] = useState(false)
    const [counter, setCount] = useState(0)
    const [score, setScore] = useState(0)
    const [data, setData] = useState([])

    useEffect(() => {
        if (counter != j) {
            setData(quiz[counter])
        }
    })

    right = data.right_answer;



    const getAnswer = (l) => {
        if (!answered) {
            setAnswered(true)
            checked = l;
            if (l == right) { setScore(score+1) } 
            tm1 = setTimeout(() => {
                setAnswered(false)
                setCount(counter+1)
            }, 2000)
            
        }
    }

 if (counter != j) {
     return (
        <View style={{ marginBottom: 15, flex: 1, justifyContent: "flex-start", alignItems: "center" }}>
            
            <View style={styles.question}>
                <Image
                    style = {{flex: 1, width: '100%', borderRadius: 15}}
                    source={{
                        uri: `https://5szczep.pl/images/${data.photo}`}}
                />
                <Text style={styles.question_text}>
                    
                     {data.question}
                     
                     
                </Text>
                    
            </View>
            <Answer letter='A' text={data.A} getAnswer={getAnswer} answered={answered} col='#3A7CA5' right={right} checked={checked}></Answer>
            <Answer letter='B' text={data.B} getAnswer={getAnswer} answered={answered} col='#3A7CA5' right={right} checked={checked}></Answer>
            <Answer letter='C' text={data.C} getAnswer={getAnswer} answered={answered} col='#3A7CA5' right={right} checked={checked}></Answer>
            <Answer letter='D' text={data.D} getAnswer={getAnswer} answered={answered} col='#3A7CA5' right={right} checked={checked}></Answer>
             </View>
    )
 } else return (
        <View style={styles.flex}>
         <Text style={styles.sum_text}>{`${score} / ${j}`}</Text>
        </View>
 )
     
}



const styles = StyleSheet.create({
    question: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        shadowColor: '#000',
        shadowRadius: 10,
        width: '90%',
        flex: 6,
    },


    question_text: {
        
        fontSize: 20,
        padding: 15,
        color: '#4f4f4f'
    },

    flex: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    sum_text: {
        color: '#333',
        fontSize: 36,
        fontWeight: 'bold'
  }
});
