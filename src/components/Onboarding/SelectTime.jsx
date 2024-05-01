import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import DateTimePicker from '@react-native-community/datetimepicker';
import {responsiveWidth} from 'react-native-responsive-dimensions';

// Define SelectTime component
const SelectTime = () => {
  // Access the Redux theme state
  const theme = useSelector(state => state.theme);
  const fontStyle = useSelector(state => state.fontStyle);

  // State to manage the visibility of the time picker
  const [showPicker, setShowPicker] = useState(false);

  // State to store the selected time
  const [selectedTime, setSelectedTime] = useState(new Date());

  // Function to show the time picker
  const showTimePicker = () => {
    setShowPicker(true);
  };

  // Function to handle time change in the time picker
  const handleTimeChange = (event, selected) => {
    setShowPicker(false);

    if (selected) {
      setSelectedTime(selected);
    }
  };
  return (
    <View
      style={{
        borderColor: theme.textLayer1,
        borderWidth: responsiveWidth(0.138888),
        borderRadius: responsiveWidth(1.6666),
        justifyContent: 'center',
        alignItems: 'center',
        width: responsiveWidth(28.055),
        height: responsiveWidth(9.4444),
      }}>
      {/* Button to open the time picker */}
      <TouchableOpacity onPress={showTimePicker}>
        {/* Display the selected time */}
        <Text
          style={{
            // fontFamily: 'NotoSans-Medium',
            // fontSize: responsiveWidth(5),
            color: theme.textLayer1,
            // fontWeight: 600,
            ...fontStyle.bodyLarge3,
            // position: 'relative',
            // bottom: 1.2,
          }}>
          {selectedTime.toLocaleTimeString()[4] == ':'
            ? selectedTime.toLocaleTimeString().slice(0, 4)
            : selectedTime.toLocaleTimeString().slice(0, 5)}
          {selectedTime.toLocaleTimeString()[4] == ':' ? ' ' : ''}
          {selectedTime.toLocaleTimeString().slice(8).toUpperCase()}
        </Text>
      </TouchableOpacity>

      {/* Show the time picker modal when needed */}
      {showPicker && (
        <DateTimePicker
          value={selectedTime}
          mode="time"
          is24Hour={false}
          display="default"
          onChange={handleTimeChange}
        />
      )}
    </View>
  );
};

export default SelectTime;

const styles = StyleSheet.create({});
