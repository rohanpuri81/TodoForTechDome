import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Btn from '../components/Btn';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {rh, rw} from '../components/commonFunctions ';

const Home = props => {
  const [name, setName] = useState('User');
  const navigation = useNavigation();
  const theme = useSelector(state => state.theme);
  const languageRedux = useSelector(state => state.language.language);

  useEffect(() => {
    AsyncStorage.getItem('loggedUser').then(p => {
      let user = JSON.parse(p);
      let n = user[0].name;
      setName(n);
    });
  }, []);

  return (
    <View style={style.main}>
      <View style={style.HeaderView}>
        <Text style={style.txt}>Hello, {name}</Text>
        <TouchableOpacity
          onPress={() => {
            let k = 'k';
            AsyncStorage.setItem('loggedUser', JSON.stringify(k)).then(() => {
              props.navigation.navigate('Splash2');
            });
          }}>
          <Image style={style.img} source={require('../Images/logout.png')} />
        </TouchableOpacity>
      </View>

      <View style={style.HeadingView}>
        <View style={style.logo}>
          <Text style={style.h1}>Todo App</Text>
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            // backgroundColor: 'red',
            paddingHorizontal: rw(12),
            marginBottom: rh(14),
          }}>
          <Btn
            onPress={() => navigation.navigate('AddTodo')}
            title={'Add Todo'}
            width="42%"
            color={theme.textColor == 'white' ? 'black' : 'white'}
            bgColor={theme.secondaryColor}
          />
          <Btn
            onPress={() => navigation.navigate('AddTodo')}
            title={'Completed Todo'}
            width="42%"
            color={theme.textColor == 'white' ? 'black' : 'white'}
            bgColor={theme.secondaryColor}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const style = StyleSheet.create({
  main: {
    flex: 1,
    // marginTop: 40,
    backgroundColor: '#fff',
  },
  txt: {
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: '700',
    color: 'black',
  },
  HeaderView: {
    height: 70,
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  img: {
    height: 40,
    width: 40,
  },
  HeadingView: {
    paddingHorizontal: 20,
    marginTop: 14,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    paddingBottom: 10,
  },
  h2: {
    fontSize: 22,
  },
  h1: {
    fontSize: 40,
    fontWeight: '700',
  },
  logo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoImg: {
    height: 40,
    width: 40,
  },
  searching: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 16,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderColor: 'lightgrey',
    paddingVertical: 10,
    marginLeft: 10,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  SearchInp: {
    height: 30,
    width: '90%',
  },
  filters: {
    width: '100%',
    marginHorizontal: 10,
    marginTop: 20,
    paddingHorizontal: 20,
  },
});
