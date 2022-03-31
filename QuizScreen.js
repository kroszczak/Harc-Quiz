import "react-native-gesture-handler";
import { View, Text, StyleSheet, Pressable, Image, Animated, Dimensions } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import Answer from './Answer'


checked=''
export default function QuizScreen({ quiz, j, nav }) {
    const [answered, setAnswered] = useState(false)
    const [counter, setCount] = useState(0)
    const [score, setScore] = useState(0)
    const [data, setData] = useState([])

    const bgState = useRef(new Animated.Value(0)).current
    const countdown = useRef(new Animated.Value(100)).current
    const slideOut = useRef(new Animated.Value(0)).current

    useEffect(() => {
        if (counter != j) {
            setData(quiz[counter])
        }
        bgState.setValue(0)
        countdown.setValue(0)
        slideOut.setValue(0)

        Animated.timing(
            countdown,
            {
            useNativeDriver: false,
            toValue: 1000,
            duration: 5000
            }
        ).start(() => onPressHandle('O'))
        Animated.timing(
            slideOut,
            {
            useNativeDriver: true,
            toValue: 50,
            duration: 150
            }
        ).start()
    },[ counter ])

    right = data.right_answer;



    const getAnswer = (l) => {
        if (!answered) {
            setAnswered(true)
            checked = l;
            if (l == right) { setScore(score+1) } 
            tm1 = setTimeout(() => {
                setAnswered(false)
                setCount(counter+1)
            }, 200)   
        }
    }

    const onPressHandle = (letter) => {
    Animated.timing(
        bgState,
        {
        useNativeDriver: false,
        toValue: 1,
        duration: 200,
        }
    ).start();
    Animated.timing(
            slideOut,
            {
            useNativeDriver: true,
            toValue: 100,
            duration: 150,
            delay: 800
            }
        ).start(() => getAnswer(letter))
        
    }

 if (counter != j) {
     return (
         <Animated.View style={[styles.container(slideOut), {
             transform:
                 [{
                     translateX: slideOut.interpolate({
                         inputRange: [0, 50, 100],
                         outputRange: [Dimensions.get('window').width, 0, -Dimensions.get('window').width]
                     })
                 }]
         }]}>
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
                 <Text style={styles.counter}>{`\n${counter + 1}/${j}`}</Text>
                 <Animated.View style={styles.timeBar(countdown)}></Animated.View>
            </View>
             <Answer id={data.question_id} num={counter} letter='A' text={data.A} getAnswer={onPressHandle} bgState={bgState} col={'A'== right? '#67B441': ''}></Answer>
            <Answer id={data.question_id} num={counter} letter='B' text={data.B} getAnswer={onPressHandle} bgState={bgState} col={'B' == right? '#67B441': ''}></Answer>
            <Answer id={data.question_id} num={counter} letter='C' text={data.C} getAnswer={onPressHandle} bgState={bgState} col={'C' == right? '#67B441': ''}></Answer>
            <Answer id={data.question_id} num={counter} letter='D' text={data.D} getAnswer={onPressHandle} bgState={bgState} col={'D' == right? '#67B441': ''}></Answer>
             </Animated.View>
    )
 } else return (
        <View style={styles.flex}>
         <Text style={styles.sum_text}>{`${score} / ${j}`}</Text>
         <Pressable onPress={() => nav.navigate('Lista')}><Text>przycisk</Text></Pressable>
        </View>
 )
     
}



const styles = StyleSheet.create({
    container: out => ({
        paddingBottom: 15,
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center"
    }),

    question: {
        // borderBottomWidth: 1,
        borderColor: '#ccc',
        shadowColor: '#000',
        shadowRadius: 10,
        width: '90%',
        flex: 6,
        marginBottom: 7,
        alignItems: 'center'
    },

    timeBar: w => ({
        width: w.interpolate({
            inputRange: [0, 1000],
            outputRange: ['100%', '0%']
        }),
        borderBottomWidth: 1,
        borderColor: '#67B441'
    }),

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
