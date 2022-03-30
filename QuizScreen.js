import "react-native-gesture-handler";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import React, { useState, useEffect } from "react";
import Answer from './Answer'


checked=''
export default function QuizScreen({ quiz, j, nav }) {
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
            }, 1000)   
        }
    }

 if (counter != j) {
     return (
        <View style={{ paddingBottom: 15, flex: 1, justifyContent: "flex-start", alignItems: "center" }}>
            
            <View style={styles.question}>
                <Image
                     style={{ flex: 1, width: '100%', borderRadius: 15, }}
                    //  resizeMode: 'stretch'
                    source={{
                        uri: `https://5szczep.pl/images/${data.photo}`}}
                />
                <Text style={styles.question_text}>
                     {data.question}
                </Text>
                <Text style={styles.counter}>{`\n${counter}/${j}`}</Text>
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
         <Pressable onPress={() => nav.navigate('Lista')}><Text>przycisk</Text></Pressable>
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
        marginBottom: 7,
    },


    question_text: {
        textAlign: 'center',
        fontSize: 20,
        padding: 15,
        paddingBottom: 0,
        color: '#4f4f4f'
    },

    counter: {
        textAlign: 'center',
        color: '#ccc',
        fontSize: 18,
        marginBottom: 5
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
