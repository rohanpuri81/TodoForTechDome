import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Btn from '../components/Btn';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const route = useRoute();
  const userEmail = route.params.userEmail;
  const [description, setDescription] = useState('');
  const [expiryDate, setExpiryDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const theme = useSelector(state => state.theme);
  const languageRedux = useSelector(state => state.language.language);
  const navigation = useNavigation();

  const AddTodo = () => {
    // Update AsyncStorage to persist the changes
    AsyncStorage.getItem('users')
      .then(res => {
        const users = JSON.parse(res);
        const loggedUser = users.find(user => user.email === userEmail);
        const currentUserIndex = users.findIndex(
          user => user.email === userEmail,
        );
        if (loggedUser) {
          users[currentUserIndex].currentTodo.push({
            title: title,
            desc: description,
            expiry: expiryDate,
            isCompleted: false,
          });
          setExpiryDate(new Date());
          setTitle('');
          setDescription('');
          AsyncStorage.setItem('users', JSON.stringify(users));
          setTimeout(() => {
            navigation.navigate('Home', {isRefresh: Math.random()});
          }, 1800);
        }
      })
      .catch(error => {
        console.error('Error completing todo: ', error);
      });
  };
  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || expiryDate;
    setShowDatePicker(Platform.OS === 'ios');
    setExpiryDate(currentDate);
    console.log(expiryDate);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={text => setDescription(text)}
      />
      <View style={styles.dateContainer}>
        {showDatePicker && (
          <DateTimePicker
            value={expiryDate}
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
        onPress={() => AddTodo()}
        title={'Save Todo'}
        // width="42%"
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

export default AddTodo;
