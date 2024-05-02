import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

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
