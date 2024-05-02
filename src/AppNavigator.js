import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './Screens/Splash';
import Login from './Screens/Login';
import Home from './Screens/Home';
import SignUp from './Screens/SignUp';

import AddTodo from './Screens/AddTodo';
import EditTodo from './Screens/EditTodo';

import OnboardingCarousel from './Screens/Onboarding/OnboardingCarousel';
const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Splash"
          component={Splash}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Onboarding"
          component={OnboardingCarousel}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SignUp"
          component={SignUp}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />

        <Stack.Screen
          options={{headerShown: true}}
          name="AddTodo"
          component={AddTodo}
        />
        <Stack.Screen
          options={{headerShown: true}}
          name="EditTodo"
          component={EditTodo}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
