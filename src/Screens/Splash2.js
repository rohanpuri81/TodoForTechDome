import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Filters from '../components/Filters';
import Recipies from '../components/Recipies';

const Splash2 = props => {
  useEffect(() => {}, []);

  return (
    <View style={style.main}>
      <View style={style.HeaderView}>
        <Text style={style.txt}>Hello, New user</Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Login');
          }}>
          <Image style={style.img} source={require('../Images/login.png')} />
        </TouchableOpacity>
      </View>
      <View style={style.HeadingView}>
        <Text style={style.h2}>Welcome to</Text>
        <View style={style.logo}>
          <Text style={style.h1}>Todo App</Text>
          <Image
            style={style.logoImg}
            source={require('../Images/loggo.png')}
          />
        </View>
      </View>
      {/* <View style={style.searching}>
        <Image style={style.img} source={require('../Images/search.png')} />
        <TextInput
          onChangeText={text => {
            getDataByName(text);
          }}
          style={style.SearchInp}
        />
      </View> */}
    </View>
  );
};

export default Splash2;

const style = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: 40,
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
    height: 60,
    width: 70,
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
