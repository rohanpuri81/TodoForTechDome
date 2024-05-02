import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import TxtInp from '../components/TxtInp';
import Btn from '../components/Btn';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';
import Toast from 'react-native-toast-message';
import {rw, rh} from '../components/commonFunctions ';

const SignUp = () => {
  const navigation = useNavigation();
  const theme = useSelector(state => state.theme);
  const languageRedux = useSelector(state => state.language.language);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    cart: [],
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
    completedTodo: [],
  });

  const check = () => {
    let {email, name, password} = user;
    if (email !== '' && password !== '' && name !== '') {
      if (!email.includes('@') && !email.includes('.')) {
        Toast.show({
          type: 'error',
          text1:
            languageRedux == 'ENGLISH'
              ? 'Enter Correct Email'
              : 'सही ईमेल दर्ज करें',
        });
      } else if (password.length <= 6) {
        Toast.show({
          type: 'error',
          text1:
            languageRedux == 'ENGLISH'
              ? 'Password length must be more than 6 digits'
              : 'पासवर्ड की लंबाई 6 अंको से अधिक होनी चाहिए',
        });
      } else {
        saveData();
        setUser({
          ...user,
          name: '',
          email: '',
          password: '',
        });
        Toast.show({
          type: 'success',
          text1:
            languageRedux == 'ENGLISH'
              ? 'User successfully registered'
              : 'उपयोगकर्ता सफलतापूर्वक पंजीकृत हो गया',
        });
        setTimeout(() => {
          navigation.navigate('Login');
        }, 1300);
      }
    } else {
      Toast.show({
        type: 'error',
        text1:
          languageRedux == 'ENGLISH'
            ? 'Enter All the details'
            : 'सभी विवरण दर्ज करें',
      });
    }
  };

  const saveData = async () => {
    AsyncStorage.getItem('users').then(p => {
      if (p == null) {
        AsyncStorage.setItem('users', JSON.stringify([user]));
      } else {
        let j = JSON.parse(p);
        AsyncStorage.setItem('users', JSON.stringify([...j, user]));
      }
    });
  };

  return (
    <View style={{flex: 1, backgroundColor: theme.primaryBgColor}}>
      <StatusBar
        barStyle={theme.statusBarStyle}
        hidden={false}
        backgroundColor="transparent"
        translucent={true}
      />
      <Image style={style.Img} source={require('../Images/loggo.png')} />
      <Text style={{...style.txt, color: theme.textColor}}>
        {languageRedux == 'ENGLISH' ? 'Sign Up' : 'साइन अप'}
      </Text>
      <TxtInp
        placeholder={
          languageRedux == 'ENGLISH' ? 'Enter Your Name' : 'अपना नाम दर्ज करें'
        }
        value={user.name}
        onChangeText={text => {
          setUser({...user, name: text});
        }}
        icon={require('../Images/profile.png')}
        placeholderTextColor={theme.textColor}
        inputTextColor={theme.textColor}
        borderColor={theme.textColor}
      />
      <TxtInp
        placeholder={
          languageRedux == 'ENGLISH'
            ? 'Enter Your Email'
            : 'अपना ईमेल दर्ज करें'
        }
        value={user.email}
        onChangeText={text => {
          setUser({...user, email: text});
        }}
        icon={require('../Images/email.png')}
        placeholderTextColor={theme.textColor}
        inputTextColor={theme.textColor}
        borderColor={theme.textColor}
      />
      <TxtInp
        type={''}
        placeholder={
          languageRedux == 'ENGLISH'
            ? 'Enter Your Password'
            : 'अपना पासवर्ड दर्ज करें'
        }
        value={user.password}
        onChangeText={text => {
          setUser({...user, password: text});
        }}
        icon={require('../Images/padlock.png')}
        placeholderTextColor={theme.textColor}
        inputTextColor={theme.textColor}
        borderColor={theme.textColor}
      />

      <Btn
        color={theme.textColor}
        bgColor={theme.secondaryColor}
        title={languageRedux == 'ENGLISH' ? 'Register' : 'रजिस्टर'}
        onPress={check}
      />

      <Text style={{...style.SignUp, color: theme.textColor}}>
        {languageRedux == 'ENGLISH'
          ? 'Already have an account? '
          : 'पहले से ही एक खाता है? '}
        <TouchableOpacity
          style={style.register}
          onPress={() => navigation.navigate('Login')}>
          <Text style={{color: theme.textColor}}>
            {languageRedux == 'ENGLISH' ? 'Login' : 'लॉग इन'}
          </Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default SignUp;

const style = StyleSheet.create({
  Img: {
    width: rw(100),
    height: rw(100),
    alignSelf: 'center',
    marginTop: rh(100),
    borderRadius: rh(50),
  },
  txt: {
    marginTop: rh(25),
    alignSelf: 'center',
    fontSize: 26,
    letterSpacing: rh(3),
  },
  SignUp: {
    fontSize: 17,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: rh(17),
  },
  register: {
    marginTop: rh(120),
  },
});
