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

// Create a stack navigator
const Stack = createNativeStackNavigator();

// AppNavigator component to handle navigation
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Main splash page */}
        <Stack.Screen
          options={{headerShown: false}}
          name="Splash"
          component={Splash}
        />

        {/* Onboarding Carousel*/}
        <Stack.Screen
          options={{headerShown: false}}
          name="Onboarding"
          component={OnboardingCarousel}
        />

        {/* Login page*/}
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />

        {/* Sign up page*/}
        <Stack.Screen
          options={{headerShown: false}}
          name="SignUp"
          component={SignUp}
        />

        {/* Home page*/}
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />

        {/* Add Todo page*/}
        <Stack.Screen
          options={{headerShown: true}}
          name="AddTodo"
          component={AddTodo}
        />

        {/* Edit Todo page*/}
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
