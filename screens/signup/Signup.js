/* eslint-disable prettier/prettier */
import {NativeBaseProvider, Text, Input, Button, Box} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, Image} from 'react-native';
import {firebase} from '../../firebase/config';
import Logo from '../../assets/rain.png';

export default function Signup({navigation}) {
  const [username, setuserName] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [confirmpassword, setconfirmpassword] = useState('');

  const createUser = async (email, password) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      Alert.alert('Successfully.');
      navigation.navigate('login');
      setemail('');
      setpassword('');
    } catch (error) {
      var errorMessage = error.message;
      console.log(errorMessage);
      Alert.alert('Try Again.');
    }
  };

  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#2d3436" alignItems="center" justifyContent="center">
        <Image source={Logo} style={styles.image} />
        <Box alignItems={'center'} padding={15}>
          <Input
            bgColor="#636e72"
            mx="4"
            placeholder="Name"
            w="80%"
            borderRadius={10}
            marginTop={20}
            value={username}
            onChangeText={e => {
              setuserName(e);
            }}
          />
          <Input
            bgColor="#636e72"
            mx="4"
            placeholder="Email"
            w="80%"
            borderRadius={10}
            marginTop={5}
            value={email}
            onChangeText={e => {
              setemail(e);
            }}
          />
          <Input
            bgColor="#636e72"
            type="password"
            mx="4"
            placeholder="Password"
            w="80%"
            borderRadius={10}
            marginTop={5}
            value={password}
            onChangeText={e => {
              setpassword(e);
            }}
          />
          <Input
            bgColor="#636e72"
            type="password"
            mx="4"
            placeholder="confirmPassword"
            w="80%"
            borderRadius={10}
            marginTop={5}
            value={confirmpassword}
            onChangeText={e => {
              setconfirmpassword(e);
            }}
          />
          <Button
            size="lg"
            variant="solid"
            bgColor={'#fdcb6e'}
            borderRadius={10}
            marginTop={8}
            w={300}
            colorScheme="black"
            onPress={() => {
              createUser(email, password);
            }}>
            <Text style={styles.ttn} bold>
              sign up
            </Text>
          </Button>
        </Box>
        <Button
          size="lg"
          variant="link"
          style={styles.btn}
          marginTop={8}
          w={800}
          onPress={() => {
            navigation.navigate('login');
          }}>
          <Text style={styles.innerText}>
            Have an account?
            <Text style={styles.txt} underline>
              sign in
            </Text>
          </Text>
        </Button>
      </Box>
    </NativeBaseProvider>
  );
}
var styles = StyleSheet.create({
  image: {
    top: 20,
    width: 100,
    height: 100,
  },
  innerText: {
    color: 'white',
  },
  txt: {
    color: '#fdcb6e',
  },
  ttn: {
    color: 'black',
    fontSize: 20,
  },
});
