import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, StyleSheet, StatusBar, Dimensions, View} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {StackActions} from '@react-navigation/native';
import Btn from '../../components/Btn';
import {rh} from '../../components/commonFunctions ';

const Onboarding = ({handleNextPress}) => {
  // Hooks and constants
  const navigation = useNavigation();
  const theme = useSelector(state => state.theme);
  const languageRedux = useSelector(state => state.language.language);

  return (
    <SafeAreaView
      style={{
        height: responsiveHeight(110),
        backgroundColor: theme.primaryBgColor,
        paddingHorizontal: responsiveWidth(5.55),
        paddingTop: responsiveHeight(4),
      }}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={theme.statusBarStyle}
      />

      <View
        style={{
          marginTop: rh(170),
        }}>
        <Btn
          color={theme.textColor == 'white' ? 'black' : 'white'}
          bgColor={theme.secondaryColor}
          title={languageRedux == 'ENGLISH' ? 'Login' : 'लॉग इन'}
          onPress={() => {
            navigation.dispatch(StackActions.replace('Login'));
          }}
        />
        <Btn
          color={theme.textColor == 'white' ? 'black' : 'white'}
          bgColor={theme.secondaryColor}
          title={languageRedux == 'ENGLISH' ? 'Sign Up' : 'साइन अप '}
          onPress={() => {
            navigation.dispatch(StackActions.replace('SignUp'));
          }}
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
