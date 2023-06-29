/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  NativeBaseProvider,
  Text,
  Input,
  Button,
  HStack,
  Pressable,
  Icon,
  Link,
  Box,
  AlertDialog,
} from 'native-base';
import {Alert, Image, StyleSheet, View} from 'react-native';
import {firebase} from '../../firebase/config';
import Logo from '../../assets/rain.png';
import Spinner from '../../components/spinner';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const loginUser = async (email, password) => {
    try {
      setLoading(true);
      await firebase.auth().signInWithEmailAndPassword(email, password);
      navigation.navigate('welcome');
      setEmail('');
      setPassword('');
      setLoading(false);
    } catch (error) {
      var errorMessage = error.message;
      setLoading(false);
      Alert.alert('Wrong Email or Password.');
    }
  };

  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#2d3436" alignItems="center" justifyContent="center">
        <Image source={Logo} style={styles.image} />
        {loading && <Spinner />}
        <Box alignItems={'center'} padding={15}>
          <Input
            mx="4"
            placeholder="Email"
            w="80%"
            value={email}
            borderRadius={10}
            onChangeText={email => {
              setEmail(email);
            }}
            marginTop={20}
            bgColor="#636e72"
          />
          <Input
            type="password"
            mx="4"
            placeholder="Password"
            value={password}
            onChangeText={password => {
              setPassword(password);
            }}
            w="80%"
            borderRadius={10}
            marginTop={5}
            bgColor="#636e72"
          />

          <Button size="lg" variant="link" w={200}>
            <Text style={styles.innerText}>Forgot Password ?</Text>
          </Button>

          <Button
            size="lg"
            variant="solid"
            bgColor={'#fdcb6e'}
            borderRadius={10}
            marginTop={8}
            w={300}
            colorScheme="black"
            onPress={() => {
              loginUser(email, password);
            }}>
            <Text style={styles.ttn}> sign in</Text>
          </Button>
        </Box>

        <Button
          size="lg"
          variant="link"
          style={styles.btn}
          marginTop={8}
          w={800}
          onPress={() => {
            navigation.navigate('signup');
          }}>
          <Text style={styles.innerText}>
            Don't have an account ?
            <Text style={styles.txt} underline>
              sign up
            </Text>
          </Text>
        </Button>
      </Box>
    </NativeBaseProvider>
  );
}
var styles = StyleSheet.create({
  image: {
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
    fontWeight: 'bold',
  },
});
