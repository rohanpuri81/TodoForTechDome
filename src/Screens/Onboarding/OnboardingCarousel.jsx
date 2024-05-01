import React from 'react';
import {View, Text, StyleSheet, Dimensions, Platform} from 'react-native';
import Swiper from 'react-native-swiper';
import Onboarding from './Onboarding';
import OnBoarding2 from './OnBoarding2';
import OnboardingTheme from './OnboardingTheme';
import {useSelector} from 'react-redux';
import SplashScreen from './SplashScreen';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const OnboardingCarousel = () => {
  // Redux state
  const theme = useSelector(state => state.theme);

  const windowHeight = Dimensions.get('window').height;
  const crStyle = {
    positionIosBottom: windowHeight >= 852 ? 12.6 : 10,
    positionAndroidBottom:
      Platform.OS == 'android' && windowHeight >= 747 ? 16 : 10,
  };

  // Create a ref for the Swiper component, using it to redirect to next page
  const swiperRef = React.createRef();

  // Function to handle the next button press
  const handleNextPress = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy(1);
    }
  };
  return (
    <Swiper
      ref={swiperRef}
      style={styles.wrapper}
      showsButtons={false}
      loop={false}
      dotStyle={{
        backgroundColor: theme.primaryBgColor,
        width: responsiveWidth(4.4444),
        height: responsiveWidth(4.4444),
        borderRadius: responsiveWidth(2.222),
        margin: responsiveWidth(0.83333),
        borderWidth: responsiveWidth(0.2777),
        position: 'relative',
        bottom: responsiveHeight(
          Platform.OS == 'ios'
            ? crStyle.positionIosBottom
            : crStyle.positionAndroidBottom,
        ),
        borderColor: theme.textLayer1,
      }}
      activeDotStyle={{
        backgroundColor: theme.secondaryColor,
        width: responsiveWidth(4.4444),
        height: responsiveWidth(4.4444),
        borderRadius: responsiveWidth(2.222),
        margin: responsiveWidth(0.83333),
        borderWidth: responsiveWidth(0.2777),
        position: 'relative',
        bottom: responsiveHeight(
          Platform.OS == 'ios'
            ? crStyle.positionIosBottom
            : crStyle.positionAndroidBottom,
        ),
        borderColor: theme.textLayer1,
      }}>
      {/* First Onboarding Language selection screen  .*/}
      <View>
        <SplashScreen handleNextPress={handleNextPress} />
      </View>
      {/* First Onboarding Language selection screen  .*/}
      <View>
        <Onboarding handleNextPress={handleNextPress} />
      </View>
      {/* First Onboarding Theme selection screen  .*/}
      <View>
        <OnboardingTheme handleNextPress={handleNextPress} />
      </View>
      <View>
        <OnBoarding2 handleNextPress={handleNextPress} />
      </View>
    </Swiper>
  );
};

// Styles
const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: responsiveWidth(8.3333),
    fontWeight: 'bold',
  },
});

export default OnboardingCarousel;
