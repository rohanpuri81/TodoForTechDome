import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useSelector, useDispatch} from 'react-redux';
import {setLanguage} from '../../redux/LanguageSlice';
import {useNavigation} from '@react-navigation/native';

const LanguageSelectorBtn = ({language}) => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme);
  const languageRedux = useSelector(state => state.language.language);
  const fontStyle = useSelector(state => state.fontStyle);

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
      }}>
      <View
        style={{
          height: responsiveHeight(13.2),
          width: responsiveWidth(38.8),
          borderColor: theme.textLayer2,
          borderWidth: 1,
          borderRadius: responsiveWidth(2.2222),
          flexDirection: 'row',
          paddingHorizontal: responsiveWidth(3.333),
          paddingVertical: responsiveHeight(1.5),
          justifyContent: 'space-between',
        }}>
        <View style={{position: 'relative'}}>
          <Text
            style={{
              fontSize: responsiveHeight(4.25),
              marginBottom: responsiveHeight(1),
              lineHeight:
                language == 'ENGLISH'
                  ? responsiveHeight(4.1)
                  : responsiveHeight(4.4),
              color: letters.singleLetterColor,
              fontWeight: 700,
            }}>
            {letters.singleLetter}
          </Text>
          <Text
            style={{
              lineHeight:
                language == 'ENGLISH'
                  ? responsiveHeight(3.4)
                  : responsiveHeight(3.1),
              fontSize: responsiveHeight(2.25),
              fontWeight: 700,
              color: theme.textLayer1,
              ...fontStyle.bodyLarge1,
            }}>
            {letters.languageHeading}
          </Text>
          <Text
            style={{
              ...fontStyle.bodySmall1,
              color: theme.textLayer2,
              lineHeight:
                language == 'ENGLISH'
                  ? responsiveHeight(2.1)
                  : responsiveHeight(2),
            }}>
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

export default LanguageSelectorBtn;

const styles = StyleSheet.create({
  isSelect: {
    borderWidth: 1,
    height: responsiveHeight(2),
    width: responsiveHeight(2),
    borderRadius: responsiveHeight(1),
    padding: 1,
  },
});
