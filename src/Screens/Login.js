import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import TxtInp from '../components/TxtInp';
import Btn from '../components/Btn';
import Toast from 'react-native-toast-message';
import {useSelector} from 'react-redux';
import {rh, rw} from '../components/commonFunctions ';

const Login = props => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const theme = useSelector(state => state.theme);
  const languageRedux = useSelector(state => state.language.language);
  const fontStyle = useSelector(state => state.fontStyle);

  const check = () => {
    if (email !== '' && password !== '') {
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
        getDate();
        setEmail('');
        setPassword('');
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

  const getDate = () => {
    AsyncStorage.getItem('users')
      .then(p => {
        let y = JSON.parse(p).filter(e => {
          return e.email == email && e.password == password;
        });
        if (Array.isArray(y) && y.length == 1) {
          AsyncStorage.setItem('loggedUser', JSON.stringify(y))
            .then(() => {
              props.navigation.navigate('Home', {name: y[0].name});
            })
            .catch(err => console.log(err));
        } else {
          Toast.show({
            type: 'error',
            text1:
              languageRedux == 'ENGLISH'
                ? 'Please Enter valid credentials'
                : 'कृपया मान्य प्रमाणपत्र दर्ज करें',
          });
        }
      })
      .catch(err => {
        console.log(err);
        Toast.show({
          type: 'error',
          text1:
            languageRedux == 'ENGLISH'
              ? 'Please Enter valid credentials'
              : 'कृपया मान्य प्रमाणपत्र दर्ज करें',
        });
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
        {languageRedux == 'ENGLISH' ? 'Login' : 'लॉग इन'}
      </Text>
      <TxtInp
        placeholder={
          languageRedux == 'ENGLISH'
            ? 'Enter Your Email'
            : 'अपना ईमेल दर्ज करें'
        }
        icon={require('../Images/email.png')}
        value={email}
        onChangeText={text => setEmail(text)}
        placeholderTextColor={theme.textColor}
        inputTextColor={theme.textColor}
        borderColor={theme.textColor}
      />
      <TxtInp
        type={'password'}
        placeholder={
          languageRedux == 'ENGLISH'
            ? 'Enter Your Password'
            : 'अपना पासवर्ड दर्ज करें'
        }
        icon={require('../Images/padlock.png')}
        value={password}
        onChangeText={text => setPassword(text)}
        placeholderTextColor={theme.textColor}
        inputTextColor={theme.textColor}
        borderColor={theme.textColor}
      />

      <Btn
        color={theme.textColor}
        bgColor={theme.secondaryColor}
        title={languageRedux == 'ENGLISH' ? 'Login' : 'लॉग इन'}
        onPress={check}
      />
      <Text style={{...style.SignUp, color: theme.textColor}}>
        {languageRedux == 'ENGLISH' ? "Don't have account? " : 'खाता नहीं है? '}
        <TouchableOpacity
          style={style.register}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={{color: theme.textColor}}>
            {languageRedux == 'ENGLISH' ? 'register' : 'रजिस्टर करें'}
          </Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default Login;

const style = StyleSheet.create({
  Img: {
    width: rw(100),
    height: rw(100),
    alignSelf: 'center',
    marginTop: rh(100),
    borderRadius: rh(50),
  },
  txt: {
    marginTop: rh(32),
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
