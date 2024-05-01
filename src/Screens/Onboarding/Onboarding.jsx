import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, StyleSheet, StatusBar, Platform} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
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

    fontFamily:
      languageRedux == 'ENGLISH'
        ? 'NotoSans-Medium'
        : 'NotoSansDevanagari-Medium',
    headerLineHeight: languageRedux == 'ENGLISH' ? 4.75 : 4.4,
    paddingTop: 4,
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
        {'\n'}
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
