import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Btn from '../components/Btn';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {useRoute} from '@react-navigation/native';
import ToggleSwitch from 'toggle-switch-react-native';
import {setLanguageToEnglish, setLanguageToHindi} from '../redux/LanguageSlice';
import {rh, rw} from '../components/commonFunctions ';
import {setThemeToDark, setThemeToLight} from '../redux/ThemeSlice';
import {StackActions} from '@react-navigation/native';

// Home component
const Home = props => {
  const [name, setName] = useState('User');
  const route = useRoute();
  const dispatch = useDispatch();
  const isRefresh = route?.params?.isRefresh;
  const EditRefresh = route?.params?.EditRefresh;
  const [userEmail, setUserEmail] = useState('User');
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const theme = useSelector(state => state.theme);
  const languageRedux = useSelector(state => state.language.language);
  const [isLoaded, setIsLoaded] = useState(false);
  const [languageSwitch, setLanguageSwitch] = useState(
    languageRedux === 'ENGLISH' ? false : true,
  );
  const [themeSwitch, setThemeSwitch] = useState(
    theme.theme === 'LIGHT' ? false : true,
  );

  // Function to fetch users from AsyncStorage
  const getData = async () => {
    AsyncStorage.getItem('users')
      .then(res => {
        return JSON.parse(res);
      })
      .then(resM => {
        AsyncStorage.getItem('loggedUser')
          .then(ele => {
            return JSON.parse(ele);
          })
          .then(res => {
            let d = resM.filter(ele => {
              return ele.email == res[0].email;
            });
            setData(d[0].currentTodo);
            console.log(d[0].currentTodo);
            setIsLoaded(true);
          });
      });
  };

  // UseEffect to fetch data when isRefresh or EditRefresh changes from AddTodo and EditTodo
  useEffect(() => {
    isRefresh ? getData() : null;
  }, [isRefresh]);
  useEffect(() => {
    EditRefresh ? getData() : null;
  }, [EditRefresh]);

  // Function to check if a todo item is expired
  const isExpired = expiryDate => {
    const now = new Date();
    const expiry = new Date(expiryDate);
    return now > expiry;
  };

  // Function to delete a todo item
  const deleteTodo = index => {
    // Remove the todo item from the data array
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);

    // Update AsyncStorage to persist the changes
    AsyncStorage.getItem('users')
      .then(res => {
        const users = JSON.parse(res);
        const loggedUser = users.find(user => user.email === userEmail);
        if (loggedUser) {
          loggedUser.currentTodo = updatedData;
          AsyncStorage.setItem('users', JSON.stringify(users));
        }
      })
      .catch(error => {
        console.error('Error deleting todo: ', error);
      });
  };

  // Function to mark a todo item as complete or incomplete
  const completeTodo = index => {
    // Update the isCompleted property of the todo item
    const updatedData = [...data];
    updatedData[index].isCompleted = !updatedData[index].isCompleted;
    setData(updatedData);

    // Update AsyncStorage to persist the changes
    AsyncStorage.getItem('users')
      .then(res => {
        const users = JSON.parse(res);
        const loggedUser = users.find(user => user.email === userEmail);
        if (loggedUser) {
          loggedUser.currentTodo = updatedData;
          AsyncStorage.setItem('users', JSON.stringify(users));
        }
      })
      .catch(error => {
        console.error('Error completing todo: ', error);
      });
  };

  useEffect(() => {
    AsyncStorage.getItem('loggedUser').then(p => {
      let user = JSON.parse(p);
      let n = user[0].name;
      setName(n);
      setUserEmail(user[0].email);
    });
    setTimeout(() => {
      getData();
    }, 1500);
  }, []);

  return (
    <SafeAreaView style={[style.main, {backgroundColor: theme.primaryBgColor}]}>
      {/* Language and Theme toggle */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingRight: rw(12),
          marginTop: rh(29),
        }}>
        <View
          style={{
            flexDirection: 'row',
            gap: rw(10),
            alignItems: 'center',
            marginTop: rh(8),
            marginLeft: rw(12),
          }}>
          <Text style={{color: theme.textColor, width: rw(32)}}>
            {languageRedux == 'ENGLISH' ? 'EN' : 'अंग्रेज़ी'}
          </Text>
          <ToggleSwitch
            isOn={languageSwitch}
            onColor="green"
            offColor="grey"
            label=""
            labelStyle={{color: 'black', fontWeight: '900'}}
            size="medium"
            onToggle={isOn => {
              setLanguageSwitch(isOn);
              if (isOn == true) {
                dispatch(setLanguageToHindi());
              } else {
                dispatch(setLanguageToEnglish());
              }
              console.log(languageRedux);
            }}
          />
          <Text style={{color: theme.textColor}}>
            {languageRedux == 'ENGLISH' ? 'HIN' : 'हिंदी'}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            gap: rw(10),
            alignItems: 'center',
            marginTop: rh(8),
            marginLeft: rw(12),
          }}>
          <Text style={{color: theme.textColor}}>
            {languageRedux == 'ENGLISH' ? 'Light' : 'रोशनी'}
          </Text>
          <ToggleSwitch
            isOn={themeSwitch}
            onColor="green"
            offColor="grey"
            label=""
            labelStyle={{color: 'black', fontWeight: '900'}}
            size="medium"
            onToggle={isOn => {
              setThemeSwitch(isOn);
              if (isOn == true) {
                dispatch(setThemeToDark());
              } else {
                dispatch(setThemeToLight());
              }
              console.log(theme?.theme);
            }}
          />
          <Text style={{color: theme.textColor}}>
            {languageRedux == 'ENGLISH' ? 'Dark' : 'अँधेरा'}
          </Text>
        </View>
      </View>

      <View style={style.HeaderView}>
        <Text style={[style.txt, {color: theme.textColor}]}>
          {languageRedux == 'ENGLISH' ? 'Hello' : 'नमस्ते'}, {name}
        </Text>
        <TouchableOpacity
          onPress={() => {
            let k = 'k';
            AsyncStorage.setItem('loggedUser', JSON.stringify(k)).then(() => {
              navigation.dispatch(StackActions.replace('Onboarding'));
            });
          }}>
          <Image style={style.img} source={require('../Images/logout.png')} />
        </TouchableOpacity>
      </View>

      <View style={style.HeadingView}>
        {/*Homepage Heading */}
        <View style={style.logo}>
          <Text style={[style.h1, {color: theme.textColor}]}>Todo App</Text>
        </View>
      </View>
      <ScrollView>
        <View style={{marginBottom: 18}}>
          {/* Button to add new todo */}
          <Btn
            onPress={() =>
              navigation.navigate('AddTodo', {userEmail: userEmail})
            }
            title={languageRedux == 'ENGLISH' ? 'Add Todo' : 'टोडो जोड़ें'}
            width="88%"
            color={theme.textColor == 'white' ? 'black' : 'white'}
            bgColor={theme.secondaryColor}
          />
        </View>

        {/* Todo List  here we are checking if the data is loaded then removing the Activityindicator and showing the data*/}
        {isLoaded ? (
          <ScrollView>
            {data?.map((ele, i) => {
              const expired = isExpired(ele.expiry);
              return (
                <View
                  key={Math.random()}
                  style={[
                    style.todo,
                    {borderColor: theme.textColor, borderWidth: 2},
                  ]}>
                  <Text
                    style={[
                      style.h1,
                      {
                        color: expired ? 'red' : theme.textColor,
                        textDecorationLine: ele?.isCompleted
                          ? 'line-through'
                          : 'none',
                      },
                    ]}>
                    {ele.title}
                    {expired && (
                      <Text style={{fontSize: 18}}> {'(Expired)'} </Text>
                    )}
                  </Text>
                  <Text style={[style.h2, {color: theme.textColor}]}>
                    {ele?.desc}
                  </Text>
                  <Text style={{color: theme.textColor}}>
                    {languageRedux == 'ENGLISH' ? 'Expiry' : 'समाप्ति'} :{' '}
                    {ele?.expiry}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      width: '100%',
                      justifyContent: 'space-between',
                    }}>
                    <Btn
                      onPress={() => {
                        navigation.navigate('EditTodo', {
                          tit: ele?.title,
                          expiry: ele?.expiry,
                          desc: ele?.desc,
                          index: i,
                          isCompleted: ele?.isCompleted,
                          userEmail: userEmail,
                        });
                      }}
                      title={
                        languageRedux == 'ENGLISH' ? 'Edit' : 'संपादित करें'
                      }
                      width="28%"
                      color={theme.textColor == 'white' ? 'black' : 'white'}
                      bgColor={theme.secondaryColor}
                      height={35}
                      mt={10}
                    />
                    <Btn
                      onPress={() => {
                        deleteTodo(i);
                      }}
                      title={languageRedux == 'ENGLISH' ? 'Delete' : 'हटाएं'}
                      width="28%"
                      color={theme.textColor == 'white' ? 'black' : 'white'}
                      bgColor={theme.secondaryColor}
                      height={35}
                      mt={10}
                    />
                    <Btn
                      onPress={() => {
                        completeTodo(i);
                      }}
                      title={
                        ele?.isCompleted
                          ? languageRedux == 'ENGLISH'
                            ? 'UnComplete'
                            : 'अपूर्ण करें'
                          : languageRedux == 'ENGLISH'
                          ? 'Complete'
                          : 'पूर्ण करें'
                      }
                      width="28%"
                      color={theme.textColor == 'white' ? 'black' : 'white'}
                      bgColor={theme.secondaryColor}
                      height={35}
                      mt={10}
                    />
                  </View>
                </View>
              );
            })}
          </ScrollView>
        ) : (
          <ActivityIndicator size={'large'} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const style = StyleSheet.create({
  todo: {
    width: '90%',
    margin: 'auto',
    paddingHorizontal: rw(12),
    paddingVertical: rh(14),
    gap: rh(6),
    borderRadius: rh(8),
    marginBottom: rh(18),
  },
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
  txt: {
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: '700',
    color: 'black',
  },
  HeaderView: {
    marginTop: rh(14),
    height: rh(70),
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: rw(20),
    alignItems: 'center',
    flexDirection: 'row',
  },
  img: {
    height: rh(40),
    width: rh(40),
  },
  HeadingView: {
    paddingHorizontal: rw(20),
    marginTop: rh(14),
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    paddingBottom: rh(10),
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
    height: rh(40),
    width: rh(40),
  },
});
