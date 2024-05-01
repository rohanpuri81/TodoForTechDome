import {SafeAreaView} from 'react-native-safe-area-context';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {StackActions} from '@react-navigation/native';
import LanguageSelectorBtn from '../../components/Onboarding/LanguageOptionWithoutCarsousal';
// Define Onboarding component
const Onboarding = ({handleNextPress}) => {
  const fontStyle = useSelector(state => state.fontStyle);
  const navigation = useNavigation();
  const theme = useSelector(state => state.theme);
  const languageRedux = useSelector(state => state.language.language);

  // Define text content for Onboarding
  const OnboardingText = {
    title1: languageRedux == 'ENGLISH' ? 'Pick' : 'अपनी ',
    title2: languageRedux == 'ENGLISH' ? 'Your language' : 'भाषा चुनें',
    subHeading1:
      languageRedux == 'ENGLISH'
        ? 'See transliterations, insights, and meanings'
        : 'अपने चयन के अनुसार लिप्यंतरण, अंतरदृष्टि,',

    subHeading2: languageRedux == 'ENGLISH' ? 'your choice' : 'और अर्थ देखें।',
    skip: languageRedux == 'ENGLISH' ? 'Skip' : 'छोड़ दें',
    deafult: languageRedux == 'ENGLISH' ? 'Default' : 'डिफ़ॉल्ट',
    FooterText1:
      languageRedux == 'ENGLISH'
        ? 'Language can be changed later from'
        : 'प्रोफ़ाइल विकल्प से भाषा को बाद',
    FooterText2:
      languageRedux == 'ENGLISH' ? 'Profile Option' : 'में बदला जा सकता है',
    fontFamily:
      languageRedux == 'ENGLISH'
        ? 'NotoSans-Medium'
        : 'NotoSansDevanagari-Medium',
    headerLineHeight: languageRedux == 'ENGLISH' ? 4.75 : 4.4,
    paddingTop: Platform.OS == 'ios' ? 2 : 4,
  };

  return (
    <SafeAreaView
      style={{
        height: responsiveHeight(110),
        backgroundColor: theme.primaryBgColor,
        paddingHorizontal: responsiveWidth(5.55),
        paddingTop: responsiveHeight(OnboardingText.paddingTop),
      }}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={theme.statusBarStyle}
      />

      {/* Skip text with TouchableOpacity */}
      <TouchableOpacity
        onPress={() => {
          navigation.dispatch(StackActions.replace('HOME'));
        }}>
        <Text
          style={{
            color: theme.textLayer2,
            textAlign: 'right',
            paddingBottom: responsiveHeight(3.5),
            fontFamily: OnboardingText.fontFamily,
            fontWeight: 500,
            textDecorationLine: 'underline',
          }}>
          {OnboardingText.skip}
        </Text>
      </TouchableOpacity>

      {/* Title and subtitles */}
      <Text
        style={[
          Styles.Header,
          {
            color: theme.textLayer2,
            lineHeight: responsiveHeight(OnboardingText.headerLineHeight),
          },
        ]}>
        {OnboardingText.title1}
        {'\n'}
        {OnboardingText.title2}
      </Text>
      <Text
        style={{
          ...fontStyle.bodySmall1,
          fontFamily: OnboardingText.fontFamily,
          color: theme.textLayer1,
          marginBottom:
            languageRedux == 'ENGLISH'
              ? responsiveHeight(17.12)
              : responsiveHeight(17.0),
          lineHeight: responsiveHeight(2.55),
        }}>
        {OnboardingText.subHeading1}
        {'\n'}
        {OnboardingText.subHeading2}
      </Text>

      {/* Language options */}
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: responsiveHeight(1),
        }}>
        <LanguageSelectorBtn
          language="ENGLISH"
          handleNextPress={handleNextPress}
        />
        <LanguageSelectorBtn
          language="HINDI"
          handleNextPress={handleNextPress}
        />
      </View>

      {/* Default language text */}
      <Text
        style={{
          fontSize: responsiveWidth(3.8),
          fontWeight: 500,
          color: theme.secondaryColor,
          fontFamily: OnboardingText.fontFamily,
          position: 'relative',
          left: 10,
          marginBottom: responsiveHeight(9.87),
        }}>
        ({OnboardingText.deafult})
      </Text>

      {/* Footer text */}
      <Text
        style={{
          textAlign: 'center',
          width: '100%',
          color: theme.textLayer2,
          fontSize: responsiveWidth(3.4),
          fontFamily: OnboardingText.fontFamily,
          lineHeight:
            languageRedux == 'ENGLISH'
              ? responsiveHeight(2.25)
              : responsiveHeight(2.25),
        }}>
        {OnboardingText.FooterText1}
        {'\n'}
        {OnboardingText.FooterText2}
      </Text>
    </SafeAreaView>
  );
};

export default Onboarding;

const Styles = StyleSheet.create({
  Header: {
    fontSize: responsiveHeight(3.5),
    fontFamily: 'NotoSans-Medium',
    fontWeight: 600,

    marginBottom: responsiveHeight(0.4),
  },
});
