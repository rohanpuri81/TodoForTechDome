import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Btn from '../components/Btn';
import {useSelector} from 'react-redux';

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [expiryDate, setExpiryDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const theme = useSelector(state => state.theme);
  const languageRedux = useSelector(state => state.language.language);

  const saveTodo = () => {
    // Implement save todo logic here
    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Expiry Date:', expiryDate);
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
        onPress={() => saveTodo}
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
