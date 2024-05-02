import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

/**
 * A reusable button component for Todo for Techdome assesment round application  By Rohan Puri.
 *
 * @param {Function} onPress - The function to be called when the button is pressed.
 * @param {string} title - The text to display on the button.
 * @param {string} bgColor - The background color of the button (default: '#4CAF50' - green).
 * @param {string} color - The text color of the button (default: 'white').
 * @param {string} width - The width of the button (default: '85%').
 * @param {number} height - The height of the button (default: 50).
 * @param {number} mt - The margin top applied to the button (default: 38).
 *
 *
 *
 */

const Btn = ({
  onPress,
  title,
  bgColor,
  color,
  width = '85%',
  height = 50,
  mt = 38,
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: bgColor,
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        height: height,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: mt,
      }}
      onPress={() => onPress()}>
      <Text style={{color: 'white'}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Btn;
