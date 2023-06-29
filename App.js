import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screens/login/Login';
import Signup from './screens/signup/Signup';
import Welcome from './screens/welcome/Welcome';
import Profile from './screens/profile/Profile';
import {firebase} from './firebase/config';
import SplashScreen from 'react-native-splash-screen';
const Stack = createStackNavigator();

function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  SplashScreen.hide();
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) {
    return null;
  }

  if (!user) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="login"
          component={Login}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="signup"
          component={Signup}
        />
      </Stack.Navigator>
    );
  }
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="welcome"
        component={Welcome}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="profile"
        component={Profile}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="login"
        component={Login}
      />
    </Stack.Navigator>
  );
}
export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};
