import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React, {useState} from 'react'
import QuizFetch from './QuizFetch';

const QuizInfo = ({ route, navigation }) => {
    const { quiz } = route.params;
    const [started, setStarted] = useState(false);

    if (!started) {
        return (
            <View style={{ flex: 1 }}>
                 <Image
                    style = {{flex: 5, borderTopLeftRadius: 5, borderTopRightRadius: 8}}
                    source={{
                        uri: `https://5szczep.pl/images/${quiz.src}`}}
                />

                <View style={{flex: 6, marginBottom: 30, justifyContent: 'space-between'}}>
                    <View style={{ alignItems: 'center'}}>
                        <Text style={styles.question_text}>{quiz.title}</Text>
                        <Text style={styles.question_text}>{quiz.opis}</Text>
                        <Text>autor: {quiz.autor}</Text>
                        <Text>rozegrano: {quiz.graj}</Text>
                        <Text>ilość pytań: {quiz.ilo}</Text>
                        <Text>Trudność: {quiz.poziom}</Text>
                    </View>
                    <Pressable style={{ alignSelf: 'center', backgroundColor: '#67B441', padding: 10, borderRadius: 10 }} onPress={() => setStarted(true)}>
                        <Text style={{color: '#eee', fontWeight: 'bold', fontSize: 18}}>Start</Text>
                    </Pressable>
                </View>

                <View style = {{flex: 1, paddingLeft: 20, paddingTop: 15, borderTopColor: '#ccc', borderTopWidth: 1}}>
                    <Text>utworzono: {quiz.data}</Text>
                    <Text>zaktualizowano: {quiz.aktualizacja}</Text>
                </View>
            </View>
            
        )
    } else {
        return(
            <QuizFetch id={quiz.id} nav={navigation}></QuizFetch>
        )
    }
}

export default QuizInfo

const styles = StyleSheet.create({
    question_text: {
        fontSize: 20,
        padding: 15,
        color: '#4f4f4f'
    },
})