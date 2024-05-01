import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, StyleSheet, StatusBar, Image, Platform} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {useSelector, useDispatch} from 'react-redux';
import {rh, rw} from '../../components/commonFunctions ';
// import {ScreenConstants} from '../../Navigation/NavigationConstants';
import {useNavigation} from '@react-navigation/native';
import {StackActions} from '@react-navigation/native';
import {useEffect} from 'react';

// import {fetchUserDetails} from '../../redux/userSlice';
// import AsyncStorage from '@react-native-async-storage/async-storage';
const SplashScreen = ({handleNextPress}) => {
  const dispatch = useDispatch();
  const fontStyle = useSelector(state => state.fontStyle);
  const navigation = useNavigation();
  const theme = useSelector(state => state.theme);
  const languageRedux = useSelector(state => state.language.language);
  const LangText = {
    fontFamily:
      languageRedux == 'ENGLISH'
        ? 'NotoSans-Medium'
        : 'NotoSansDevanagari-Medium',
    topBarHeading: languageRedux == 'ENGLISH' ? 'Theme' : 'थीम',
    title1: languageRedux == 'ENGLISH' ? 'Namaste' : 'नमस्ते',

    headerLineHeight: languageRedux == 'ENGLISH' ? 4.75 : 4.7,

    deafult:
      languageRedux == 'ENGLISH' ? '(System default)' : '(सिस्टम डिफ़ॉल्ट)',
    defaultFontSize: languageRedux == 'ENGLISH' ? 1.5 : 1.7,

    skip: languageRedux == 'ENGLISH' ? 'Skip' : 'छोड़ दें',
    paddingTop: Platform.OS == 'ios' ? 8 : 6,
  };
  useEffect(() => {}, []);
  return (
    <SafeAreaView
      style={{
        backgroundColor: theme.primaryBgColor,
        height: responsiveHeight(110),
        paddingTop: responsiveHeight(LangText.paddingTop),
        paddingHorizontal: responsiveWidth(5.55),
      }}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={theme.statusBarStyle}
      />
      <Text
        style={[
          {
            ...fontStyle.h3,
            color: theme.textLayer2,
            lineHeight: responsiveHeight(LangText.headerLineHeight),
            //   marginTop: responsiveHeight(5),
            marginBottom: responsiveHeight(13),
            fontSize: responsiveHeight(4),
          },
        ]}>
        {LangText.title1}
      </Text>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          gap: responsiveHeight(3.75),
        }}>
        <Image style={styles.Img} source={require('../../Images/loggo.png')} />
        <View style={{flexDirection: 'row'}}>
          <Text style={{...fontStyle.h1, color: theme.accent1}}>
            TODO for Techdome
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  Img: {
    width: rw(160),
    height: rw(160),
    alignSelf: 'center',

    borderRadius: rh(50),
  },
});
