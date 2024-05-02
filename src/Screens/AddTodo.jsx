import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Btn from '../components/Btn';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
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

  // Handles saving a new todo item to AsyncStorage.
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
          Toast.show({
            type: 'success',
            text1:
              languageRedux == 'ENGLISH'
                ? 'Todo updated successfully!'
                : 'Todo सफलतापूर्वक जोड़ा गया!',
          });
          setTimeout(() => {
            navigation.navigate('Home', {isRefresh: Math.random()});
          }, 1800);
        }
      })
      .catch(error => {
        console.error('Error completing todo: ', error);
      });
  };

  /**
   * Handles user-selected date change from the date picker.
   *
   * @param {Object} event - The date picker event object.
   * @param {Date} selectedDate - The selected date from the date picker.
   */

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || expiryDate;
    setShowDatePicker(Platform.OS === 'ios');
    setExpiryDate(currentDate);
    console.log(expiryDate);
  };

  return (
    <View style={[styles.container, {backgroundColor: theme.primaryBgColor}]}>

       {/* Input box for title */}
      <TextInput
        style={[styles.input, {color: theme.textColor}]}
        placeholder={languageRedux == 'ENGLISH' ? 'Title' : 'शीर्षक'}
        placeholderTextColor={theme.textColor}
        value={title}
        onChangeText={text => setTitle(text)}
      />

      {/* Input box for description */}
      <TextInput
        style={[styles.input, {color: theme.textColor}]}
        placeholder={languageRedux == 'ENGLISH' ? 'Description' : 'विवरण'}
        placeholderTextColor={theme.textColor}
        value={description}
        onChangeText={text => setDescription(text)}
      />

      {/* Date picker */}
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
        title={
          languageRedux == 'ENGLISH'
            ? 'Select Expiry Date'
            : 'समाप्ति तिथि का चयन करें'
        }
        width="80%"
        color={theme.textColor == 'white' ? 'black' : 'white'}
        bgColor={theme.secondaryColor}
      />
      <Btn
        onPress={() => AddTodo()}
        title={languageRedux == 'ENGLISH' ? 'Save Todo' : 'टोडो सहेजें'}
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
