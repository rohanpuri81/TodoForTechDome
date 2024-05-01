import {SafeAreaView} from 'react-native-safe-area-context';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Platform,
  Dimensions,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {useSelector} from 'react-redux';
import {ScreenConstants} from '../../Navigation/NavigationConstants';
import {useNavigation} from '@react-navigation/native';
import {StackActions} from '@react-navigation/native';
import LetsBeginButton from '../../Components/Onboarding/LetsBeginButton';

// Define Onboarding component
const Onboarding = ({handleNextPress}) => {
  // Hooks and constants
  const fontStyle = useSelector(state => state.fontStyle);
  const navigation = useNavigation();
  const windowHeight = Dimensions.get('window').height;
  const theme = useSelector(state => state.theme);
  const languageRedux = useSelector(state => state.language.language);

  // Text content for Onboarding
  const OnboardingText = {
    title1: languageRedux == 'ENGLISH' ? 'Set' : 'सूचना ',
    title2: languageRedux == 'ENGLISH' ? 'Reminder' : 'सेट करें',
    subHeading1:
      languageRedux == 'ENGLISH'
        ? 'Choose a daily time for a single, enriching shloka'
        : 'अपनी दिनचर्या में एक ही बार, समृद्धि से भरपूर श्लोक अधिसूचना ,',

    subHeading2:
      languageRedux == 'ENGLISH'
        ? 'notification in your routine'
        : 'के लिए एक निर्धारित समय चुनें।',
    skip: languageRedux == 'ENGLISH' ? 'Skip' : 'छोड़ दें',
    BeginBtnText: languageRedux == 'ENGLISH' ? 'Lets Begin' : 'आइए शुरुआत करें',
    FooterText1:
      languageRedux == 'ENGLISH'
        ? 'Reminder can be change later from'
        : 'प्रोफ़ाइल विकल्प से सूचना को बाद',
    FooterText2:
      languageRedux == 'ENGLISH' ? 'Profile Option' : 'में बदल सकता है',
    fontFamily:
      languageRedux == 'ENGLISH'
        ? 'NotoSans-Medium'
        : 'NotoSansDevanagari-Medium',
    headerLineHeight: languageRedux == 'ENGLISH' ? 4.75 : 4.4,
    paddingTop: Platform.OS == 'ios' ? 2 : 4,
    borederStyle: Platform.OS == 'ios' ? 'solid' : 'dashed',
    subHeadingMarginBottom: windowHeight < 670 ? 11.33 : 23.33,
  };

  // Translation text for time and sound selection
  const timeTranslation = {
    heading: languageRedux == 'ENGLISH' ? 'Set time' : 'समय सेट करें',
    subHeading:
      languageRedux == 'ENGLISH' ? 'For Daily Shloka' : 'दैनिक श्लोक के लिए',
    footerText:
      languageRedux == 'ENGLISH'
        ? 'Remind yourself with Daily Shloka Of The Day'
        : 'रोज़ाना के श्लोक के साथ अपने आप को याद दिलाएं',
  };
  const soundTranslation = {
    heading: languageRedux == 'ENGLISH' ? 'Set sound' : 'ध्वनि सेट करें।',
    subHeading:
      languageRedux == 'ENGLISH' ? 'For Daily Shloka' : 'दैनिक श्लोक के लिए',
    footerText:
      languageRedux == 'ENGLISH'
        ? 'Select a soothing alert tone'
        : 'एक मिठी आवाज़ चुनें जिससे सूचनाएं मिलें',
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
          navigation.dispatch(StackActions.replace("HOME"));
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
          marginBottom: responsiveHeight(10.376),
          lineHeight: responsiveHeight(2.55),
        }}>
        {OnboardingText.subHeading1}
        {'\n'}
        {OnboardingText.subHeading2}
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
              : responsiveHeight(2.05),
        }}>
        {OnboardingText.FooterText1}
        {'\n'}
        {OnboardingText.FooterText2}
      </Text>

      {/* Let's Begin button */}
      <View
        style={{
          alignItems: 'center',
          width: responsiveWidth(88.8888),
          marginTop: responsiveHeight(11.5),
          justifyContent: 'center',
        }}>
        <LetsBeginButton text={OnboardingText.BeginBtnText} />
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
