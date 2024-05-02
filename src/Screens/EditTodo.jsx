import React, {useState, useEffect} from 'react';
import {View, TextInput, StyleSheet, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Btn from '../components/Btn';
import {useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';

const EditTodo = () => {
  const [data, setData] = useState({});
  const [showDatePicker, setShowDatePicker] = useState(false);
  const theme = useSelector(state => state.theme);
  const navigation = useNavigation();
  const route = useRoute();
  const {tit, desc, index, expiry, isCompleted, userEmail} = route.params;

  // Set initial data
  useEffect(() => {
    setData({
      title: tit,
      desc: desc,
      expiry: new Date(expiry),
      isCompleted: isCompleted,
    });
  }, []);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || data.expiry;
    setShowDatePicker(Platform.OS === 'ios');
    setData({...data, expiry: currentDate});
  };

  const saveTodo = () => {
    AsyncStorage.getItem('users')
      .then(res => {
        const users = JSON.parse(res);
        const loggedUser = users.find(user => user.email === userEmail);
        if (loggedUser) {
          // Find the todo item by index and update it
          loggedUser.currentTodo[index] = {
            title: data.title,
            desc: data.desc,
            expiry: data.expiry,
            isCompleted: data.isCompleted,
          };
          // Update AsyncStorage with the modified user data
          AsyncStorage.setItem('users', JSON.stringify(users))
            .then(() => {
              // Navigate back or perform any necessary actions
              console.log('Todo updated successfully!');
              Toast.show({
                type: 'success',
                text1: 'Todo updated successfully!',
              });
              setTimeout(() => {
                navigation.navigate('Home', {EditRefresh: Math.random()});
              }, 1400);
            })
            .catch(error => {
              console.error('Error updating todo: ', error);
            });
        }
      })
      .catch(error => {
        console.error('Error updating todo: ', error);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={data.title}
        onChangeText={text => setData({...data, title: text})}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={data.desc}
        onChangeText={text => setData({...data, desc: text})}
      />
      <View style={styles.dateContainer}>
        {showDatePicker && (
          <DateTimePicker
            value={data.expiry}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}
      </View>
      <Btn
        onPress={() => setShowDatePicker(true)}
        title={'Select Expiry Date'}
        width="80%"
        color={theme.textColor == 'white' ? 'black' : 'white'}
        bgColor={theme.secondaryColor}
      />
      <Btn
        onPress={() => saveTodo()}
        title={'Save Todo'}
        color={theme.textColor == 'white' ? 'black' : 'white'}
        bgColor={theme.secondaryColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  dateContainer: {
    marginBottom: 20,
  },
});

export default EditTodo;
