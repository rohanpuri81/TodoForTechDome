import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';

const TxtInp = ({value, onChangeText, placeholder, icon, type}) => {
  const [showPassword, setShowPassword] = useState(false);
  const theme = useSelector(state => state.theme);

  return (
    <View style={{...styles.txtInp, borderColor: theme.textColor}}>
      <Image source={icon} style={styles.icon} />
      <TextInput
        style={{...styles.txt, color: theme.textColor}}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={theme.textColor}
        secureTextEntry={!showPassword && type === 'password'}
        onChangeText={onChangeText}
      />
      {type === 'password' && (
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Image
            source={
              showPassword
                ? require('../Images/eye-open.png')
                : require('../Images/eye-close.png')
            }
            style={styles.icon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TxtInp;

const styles = StyleSheet.create({
  txtInp: {
    alignSelf: 'center',
    height: 50,
    width: '85%',
    borderRadius: 10,
    flexDirection: 'row',
    borderWidth: 0.5,
    marginTop: 25,
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  icon: {
    width: 30,
    height: 30,
  },
  txt: {
    marginLeft: 20,
    flex: 1,
  },
});
