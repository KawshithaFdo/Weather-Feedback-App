import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  View,
} from 'react-native';
import {firebase} from '../../firebase/config';

export default function Profile({navigation}) {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    // Handle submitting feedback here
    console.log('Feedback submitted:', feedback);
    // Reset the feedback input
    setFeedback('');
    navigation.goBack();
  };

  logoutUser = async () => {
    try {
      await firebase.auth().signOut();
      navigation.navigate('login');
      console.log('SignOut');
    } catch (error) {
      var errorMessage = error.message;
      console.log(errorMessage);
      Alert.alert('Try Again.');
    }
  };

  const renderOldFeedbacks = () => {
    return (
      <View>
        <Text style={styles.oldFeedback}>Hello</Text>
        <Text style={styles.oldFeedback}>Hello</Text>
        <Text style={styles.oldFeedback}>Hello</Text>
        <Text style={styles.oldFeedback}>Hello</Text>
        <Text style={styles.oldFeedback}>Hello</Text>
        <Text style={styles.oldFeedback}>Hello</Text>
        <Text style={styles.oldFeedback}>Hello</Text>
        <Text style={styles.oldFeedback}>Hello</Text>
        <Text style={styles.oldFeedback}>Hello</Text>
        <Text style={styles.oldFeedback}>Hello</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Give Us Your Feedback</Text>
      <TextInput
        style={styles.input}
        placeholder="Type your feedback here"
        value={feedback}
        onChangeText={setFeedback}
        multiline
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit Feedback</Text>
      </TouchableOpacity>
      <Text style={[styles.buttonText, styles.txt, styles.yellow]}>
        You have submitted Bad Comment
      </Text>
      <View>
        <Text style={[styles.buttonText, styles.txt, styles.red]}>
          Negative Comments : 0
        </Text>
        <Text style={[styles.buttonText, styles.txt, styles.green]}>
          Positive Comments : 0
        </Text>
      </View>
      <ScrollView style={styles.oldFeedbacksContainer}>
        {renderOldFeedbacks()}
      </ScrollView>
    </SafeAreaView>
  );
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 40,
    alignItems: 'center',
    backgroundColor: 'black',
  },
  red: {color: 'red'},
  green: {color: 'green'},
  yellow: {color: 'yellow'},
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 120,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 20,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#e91e63',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    bottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  txt: {bottom: 50},
  oldFeedbacksContainer: {
    flex: 1,
    width: '100%',
    borderWidth: 1,
    borderColor: '#fff',
    bottom: 70,
    padding: 10,
    borderRadius: 12,
  },
  oldFeedback: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: 'gray',
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});
