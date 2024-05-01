import {StyleSheet, Text, View,Dimensions} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useSelector} from 'react-redux';
import SelectTime from './SelectTime';
import SelectSound from './SelectSound';

const TimeSoundSelector = ({type}) => {
  const theme = useSelector(state => state.theme);
  const screenHeight = Dimensions.get('window').height;
  console.log(screenHeight)
  const languageRedux = useSelector(state => state.language.language);
  const timeTranslation = {
    heading: languageRedux == 'ENGLISH' ? 'Set Time' : 'समय सेट करें',
    subHeading:
      languageRedux == 'ENGLISH' ? 'For Daily Shloka' : 'दैनिक श्लोक के लिए',
    footerText:
      languageRedux == 'ENGLISH'
        ? 'Remind yourself with Daily Shloka Of The Day'
        : 'रोज़ाना के श्लोक के साथ अपने आप को याद दिलाएं',
  };
  const soundTranslation = {
    heading: languageRedux == 'ENGLISH' ? 'Set Sound' : 'ध्वनि सेट करें।',
    subHeading:
      languageRedux == 'ENGLISH' ? 'For Daily Shloka' : 'दैनिक श्लोक के लिए',
    footerText:
      languageRedux == 'ENGLISH'
        ? 'Select a soothing alert tone'
        : 'एक मिठी आवाज़ चुनें जिससे सूचनाएं मिलें',
  };

  const TimeSoundComponentText = {
    title: type == 'time' ? timeTranslation.heading : soundTranslation.heading,
    titleColor: type == 'time' ? theme.accent1 : theme.accent4,
    subHeading:
      type == 'time' ? timeTranslation.subHeading : soundTranslation.subHeading,
    FooterText:
      type == 'time' ? timeTranslation.footerText : soundTranslation.footerText,
  };
  return (
    <View style={[styles.main, {height: responsiveHeight(12)}]}>
      <View
        style={[
          styles.mainTop,
          {height: responsiveHeight(7.7), paddingRight: type == 'time' ? 24 : 14},
        ]}>
        <View style={[styles.topText, {}]}>
          <Text
            style={{
              color: TimeSoundComponentText.titleColor,
              fontFamily: 'NotoSans-Medium',
              fontWeight: 700,
              fontSize: 20,
              paddingBottom: 17,
              position: 'relative',
              top: responsiveHeight(1),
            }}>
            {TimeSoundComponentText.title}
          </Text>
          <Text
            style={{
              fontFamily: 'NotoSans-Medium',
              fontSize: 12,
              fontWeight: 500,
              color: theme.textLayer1,
            }}>
            {TimeSoundComponentText.subHeading}
          </Text>
        </View>
        <View style={[styles.topComponent, {paddingTop: 12}]}>
          {type == 'time' ? <SelectTime /> : <SelectSound />}
        </View>
      </View>
      <View
        style={[
          styles.Footer,
          {
            height: responsiveHeight(5.1),
            width: '100%',
            borderTopWidth: 1,
            // borderStyle: 'dashed',
            paddingVertical: 4,
            paddingLeft: responsiveHeight(1),
          },
        ]}>
        <Text
          style={{
            fontFamily: 'NotoSans-Medium',
            fontSize: 12,
            color: theme.textLayer2,
          }}>
          {TimeSoundComponentText.FooterText}
        </Text>
      </View>
    </View>
  );
};

export default TimeSoundSelector;

const styles = StyleSheet.create({
  main: {
    borderWidth: 1,
    borderRadius: 8,
    paddingTop: 10,
    paddingBottom: 12,
  },
  Footer: {},
  mainTop: {
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topText: {},
  topComponent: {},
});
