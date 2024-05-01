import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useSelector, useDispatch} from 'react-redux';
import {setLanguage} from '../../redux/LanguageSlice';
import {useNavigation} from '@react-navigation/native';

const LanguageOption = ({language, handleNextPress}) => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme);
  const languageRedux = useSelector(state => state.language.language);
  
  
  const letters = {
    singleLetter: language == 'ENGLISH' ? 'A' : 'अ',
    singleLetterColor: language == 'ENGLISH' ? theme.accent1 : theme.accent4,
    languageHeading: language == 'ENGLISH' ? 'English' : 'हिन्दी',
    languageHeadingFontWeight: 700,
    languageSubHeading: language == 'ENGLISH' ? 'English' : 'Hindi',
  };
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(setLanguage(language));
        handleNextPress();
      }}>
      <View
        style={[
          styles.container,
          {
            height: responsiveHeight(12.5),
            width: responsiveWidth(38.8),
            borderColor: theme.textLayer2,
          },
        ]}>
        <View style={{position: 'relative', bottom: responsiveHeight(1.15)}}>
          <Text
            style={{
              color: letters.singleLetterColor,
              fontSize: responsiveHeight(4),
              fontFamily: 'NotoSans-Medium',
              fontWeight: 700,
              marginBottom:
                language == 'ENGLISH'
                  ? responsiveHeight(1.7)
                  : responsiveHeight(0.5),
            }}>
            {letters.singleLetter}
          </Text>
          <Text
            style={[
              {
                fontFamily: 'NotoSans-Medium',
                fontWeight: letters.languageHeadingFontWeight,
                color: theme.textLayer1,
                fontSize: responsiveHeight(2.25),
                position: 'relative',
                top: 2,
                marginBottom: 2,
              },
            ]}>
            {letters.languageHeading}
          </Text>
          <Text
            style={[
              {
                fontFamily: 'NotoSans-Medium',
                fontWeight: 500,
                color: theme.textLayer2,
                fontSize: responsiveHeight(1.5),
              },
            ]}>
            {letters.languageSubHeading}
          </Text>
        </View>
        <View
          style={[
            styles.isSelect,
            {
              backgroundColor:
                language == languageRedux
                  ? theme.secondaryColor
                  : theme.primaryBgColor,
              borderColor: theme.textLayer2,
            },
          ]}></View>
      </View>
    </TouchableOpacity>
  );
};

export default LanguageOption;

const styles = StyleSheet.create({
  container: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: responsiveWidth(2.2222),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(2.7777),
    paddingVertical: responsiveWidth(3.3333),
  },
  isSelect: {
    borderWidth: 1,
    height: 16,
    width: 16,
    borderRadius: 8,
    padding: 1,
  },
  singleLetter: {
    fontFamily: 'NotoSans-Medium',
    fontWeight: 700,
  },
});
