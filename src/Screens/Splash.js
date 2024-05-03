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

  const saveTestUser = async () => {
    AsyncStorage.getItem('users').then(p => {
      if (p == null) {
        AsyncStorage.setItem(
          'users',
          JSON.stringify([
            {
              name: 'Test User',
              email: 'test@user.com',
              password: '1234567',
              currentTodo: [
                {
                  title: 'Dance1',
                  desc: 'akjhdsx ygadjhysd dshk az asiduhj asdhk sahd skuhd ksahd kashd',
                  expiry: '2024-05-31T02:13:00.000Z',
                  isCompleted: false,
                },
                {
                  title: 'Dance2',
                  desc: 'akjhdsx ygadjhysd dshk az asiduhj asdhk sahd skuhd ksahd kashd',
                  expiry: '2024-05-31T02:13:00.000Z',
                  isCompleted: true,
                },
                {
                  title: 'Dance3',
                  desc: 'akjhdsx ygadjhysd dshk az asiduhj asdhk sahd skuhd ksahd kashd',
                  expiry: '2022-05-31T02:13:00.000Z',
                  isCompleted: false,
                },
                {
                  title: 'Dance4',
                  desc: 'akjhdsx ygadjhysd dshk az asiduhj asdhk sahd skuhd ksahd kashd',
                  expiry: '2024-05-31T02:13:00.000Z',
                  isCompleted: true,
                },
              ],
            },
          ]),
        );
      } else {
        console.log('there are aready users');
      }
    });
  };
  // useEffect hook to handle navigation logic after a delay
  useEffect(() => {
    saveTestUser();
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
    }, 1700);
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
