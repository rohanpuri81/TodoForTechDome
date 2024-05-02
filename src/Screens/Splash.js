import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {StackActions} from '@react-navigation/native';


// First main spalsh page
const Splash = () => {
  const navigation = useNavigation();

  // useEffect hook to handle navigation logic after a delay
  useEffect(() => {
    setTimeout(() => {
      AsyncStorage.getItem('loggedUser')
        .then(res => {
          return JSON.parse(res);
        })
        .then(res => {
          if (Array.isArray(res) && res[0].name) {
            navigation.dispatch(StackActions.replace('Home'));
          } else {
            navigation.dispatch(StackActions.replace('Onboarding'));
          }
        });
    }, 3000);
  }, []);
  return (
    <View style={style.open}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#DE2821"
        translucent={true}
      />
      <Image style={style.Img} source={require('../Images/loggo.png')} />
      <ActivityIndicator size={'large'} />
    </View>
  );
};

export default Splash;


// styles
const style = StyleSheet.create({
  open: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Img: {
    width: 200,
    height: 200,
    marginBottom: 120,
  },
});
