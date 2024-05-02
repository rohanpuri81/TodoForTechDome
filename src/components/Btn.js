import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const Btn = ({onPress, title, bgColor, color, width = '85%'}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: bgColor,
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        height: 50,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 38,
      }}
      onPress={() => onPress()}>
      <Text style={{color: color}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Btn;
