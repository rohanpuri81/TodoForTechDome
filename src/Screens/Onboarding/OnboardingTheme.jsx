import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Appearance,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import {StackActions} from '@react-navigation/native';
import {setThemeToDark, setThemeToLight} from '../../redux/ThemeSlice';

const OnboardingTheme = ({handleNextPress}) => {
  const colorScheme = Appearance.getColorScheme();
  const navigation = useNavigation();
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();
  const [themeActiveBtn, setThemeActiveBtn] = useState('LIGHT');
  const languageRedux = useSelector(state => state.language.language);
  const fontStyle = useSelector(state => state.fontStyle);
  const LangText = {
    fontFamily:
      languageRedux == 'ENGLISH'
        ? 'NotoSans-Medium'
        : 'NotoSansDevanagari-Medium',
    topBarHeading: languageRedux == 'ENGLISH' ? 'Theme' : 'थीम',
    title1: languageRedux == 'ENGLISH' ? 'Pick' : 'अपनी ',
    title2: languageRedux == 'ENGLISH' ? 'Your Theme' : 'थीम चुनें',
    headerLineHeight: languageRedux == 'ENGLISH' ? 4.75 : 4.6,
    subHeadingDark:
      languageRedux == 'ENGLISH'
        ? 'Darkness is the absence of lights'
        : 'अंधकार प्रकाश की अभावना है।',
    subHeadingLight:
      languageRedux == 'ENGLISH'
        ? 'Light is the absence of darkness'
        : 'प्रकाश अंधकार की अभावना है।',

    deafult:
      languageRedux == 'ENGLISH' ? '(System default)' : '(सिस्टम डिफ़ॉल्ट)',
    defaultFontSize: languageRedux == 'ENGLISH' ? 1.5 : 1.7,
    autoBtnText: languageRedux == 'ENGLISH' ? 'Auto' : 'ऑटो',
    darkBtnText: languageRedux == 'ENGLISH' ? 'Dark' : 'डार्क',
    lightBtnText: languageRedux == 'ENGLISH' ? 'Light' : 'लाइट',

    paddingTop: Platform.OS == 'ios' ? 2 : 4,
  };
  const tgBg = colorScheme == 'light' ? '#F9F9F9' : '#172B42';
  const AutoButtonAppearance = {
    bgColor: colorScheme == 'light' ? '#F9F9F9' : '#172B42',
    textColor: colorScheme == 'light' ? '#172B42' : '#F9F9F9',
    toggleBorderColor: colorScheme == 'light' ? 'Black' : '#F9F9F9',

    toggleBackgroundColor:
      colorScheme == theme.theme ? theme.secondaryColor : tgBg,
  };

  const Auto = {
    themeFunc: colorScheme == 'light' ? setThemeToLight : setThemeToDark,
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: theme.primaryBgColor,
        height: responsiveHeight(110),
        paddingTop: responsiveHeight(LangText.paddingTop),
      }}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={theme.statusBarStyle}
      />
      {/* <TopBar
        heading={LangText.topBarHeading}
        backLocation={ScreenConstants.PROFILE}
      /> */}
      <View
        style={{
          paddingHorizontal: responsiveWidth(5.555),
          backgroundColor: theme.primaryBgColor,
        }}>
        <Text
          style={[
            {
              ...fontStyle.h3,
              color: theme.textLayer2,
              lineHeight: responsiveHeight(LangText.headerLineHeight),
              //   marginTop: responsiveHeight(5),
              marginBottom: responsiveHeight(1),
              fontSize: responsiveHeight(3.5),
            },
          ]}>
          {LangText.title1}
          {'\n'}
          {LangText.title2}
        </Text>
        <Text
          style={{
            ...fontStyle.bodySmall1,
            color: theme.textLayer1,
            marginBottom:
              languageRedux == 'ENGLISH'
                ? responsiveHeight(14.12)
                : responsiveHeight(14.22),
            lineHeight: responsiveHeight(2.55),
          }}>
          {theme.theme == 'LIGHT'
            ? LangText.subHeadingLight
            : LangText.subHeadingDark}
        </Text>
        <View style={{gap: 22}}>
          <TouchableOpacity
            onPress={() => {
              dispatch(Auto.themeFunc());
              setThemeActiveBtn('AUTO');
              // handleNextPress();
            }}>
            <View
              style={[
                styles.button,
                {
                  width: '100%',
                  borderColor: theme.textLayer2,
                  backgroundColor: AutoButtonAppearance.bgColor,
                },
              ]}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: responsiveWidth(3),
                }}>
                <Text
                  style={{
                    ...fontStyle.bodyLarge2,
                    color: AutoButtonAppearance.textColor,
                  }}>
                  {LangText.autoBtnText}
                </Text>
                <Text
                  style={{
                    fontWeight: 500,
                    color: theme.secondaryColor,
                    fontFamily: LangText.fontFamily,
                    fontSize: responsiveHeight(LangText.defaultFontSize),
                    position: 'relative',
                    top: 1.5,
                  }}>
                  {LangText.deafult}
                </Text>
              </View>
              <View
                style={[
                  styles.isSelect,
                  {
                    backgroundColor:
                      themeActiveBtn == 'AUTO'
                        ? theme.secondaryColor
                        : AutoButtonAppearance.toggleBackgroundColor,
                    borderColor: AutoButtonAppearance.toggleBorderColor,
                  },
                ]}></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              dispatch(setThemeToDark());
              setThemeActiveBtn('DARK');
              // handleNextPress();
            }}>
            <View
              style={[
                styles.button,
                {
                  width: '100%',
                  borderColor: theme.textLayer2,
                  backgroundColor: '#121E2A',
                },
              ]}>
              <Text style={{...fontStyle.bodyLarge2, color: '#F9F9F9'}}>
                {LangText.darkBtnText}
              </Text>
              <View
                style={[
                  styles.isSelect,
                  {
                    backgroundColor:
                      themeActiveBtn == 'DARK'
                        ? theme.secondaryColor
                        : '#121E2A',
                    borderColor: '#F9F9F9',
                  },
                ]}></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              dispatch(setThemeToLight());
              setThemeActiveBtn('LIGHT');
              // handleNextPress();
            }}>
            <View
              style={[
                styles.button,
                {
                  width: '100%',
                  borderColor: theme.textLayer2,
                  backgroundColor: '#F9F9F9',
                },
              ]}>
              <Text style={{...fontStyle.bodyLarge2, color: '#172B42'}}>
                {LangText.lightBtnText}
              </Text>
              <View
                style={[
                  styles.isSelect,
                  {
                    backgroundColor:
                      themeActiveBtn == 'LIGHT'
                        ? theme.secondaryColor
                        : '#F9F9F9',
                    borderColor: 'black',
                  },
                ]}></View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingTheme;

const styles = StyleSheet.create({
  isSelect: {
    borderWidth: 1,
    height: responsiveHeight(2),
    width: responsiveHeight(2),
    borderRadius: responsiveHeight(1),
    padding: 1,
  },
  button: {
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: responsiveWidth(8.333),
    paddingVertical: responsiveHeight(2.25),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
