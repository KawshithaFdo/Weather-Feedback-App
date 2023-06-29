import { View, StyleSheet, NativeModules } from 'react-native'
import React from 'react'
import { NativeBaseProvider,Text,Input,Button,HStack, Pressable,Icon,Link,Box } from 'native-base'
import { firebase } from '../../firebase/config'

export default function Profile({navigation}) {
  logoutUser = async ()=>{
    try {
      await firebase.auth().signOut() ;
      navigation.navigate("login")
      console.log("SignOut");
    } catch (error) {
      var errorMessage = error.message;
      console.log(errorMessage);
      Alert.alert("Try Again.");
    }
   } 



  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#2d3436" alignItems="center" justifyContent="center">
      <Text fontSize="4xl" bold  mt="10%" color='white' alignItems={"center"}>My App</Text>
        <Box alignItems={"center"} padding={5}>
 
            <Input mx="4" placeholder="Name" w="80%"  borderRadius={10}  marginTop={10} bgColor="#636e72"/>
            <Input type='text' mx="4" placeholder="Email"    w="80%" borderRadius={10} marginTop={5} bgColor="#636e72"/>
           
            <Button size="lg" variant="solid" bgColor={'#fdcb6e'} borderRadius={10}  marginTop="70%" w={300}  colorScheme="black" onPress={()=>{logoutUser()}}>
            <Text style={styles.ttn}>Log out</Text>    
            </Button>
        </Box>
            
      </Box>

    </NativeBaseProvider>
  )
}
var styles = StyleSheet.create({

  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch', 
  },
  innerText: {
    color: 'white',
  
  },
  txt: {
    color: '#fdcb6e',
  
  },
  ttn: {
    color: 'black',
    fontSize:20,
  
  },

});
