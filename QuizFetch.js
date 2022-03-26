import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react';
import QuizScreen from './QuizScreen';


const QuizFetch = ({id}) => {
    const [isLoading, setLoading] = useState(true);
    const [quiz, setQuiz] = useState([]);

  const getQuiz = async () => {
     try {
      const response = await fetch(`https://5szczep.pl/php/endpoints/Test.php?action=getStandardQuestionWithGivenId&id=${id}`);
      const json = await response.json();
      setQuiz(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getQuiz();
  }, []);
  return (
    <View style={{ flex: 1, padding: 24, paddingTop: 5 }}>
      {isLoading ? <ActivityIndicator/> : (
              <QuizScreen quiz={quiz} j={quiz.length}></QuizScreen>
          
      )}
    </View>
  );
}

export default QuizFetch

const styles = StyleSheet.create({})