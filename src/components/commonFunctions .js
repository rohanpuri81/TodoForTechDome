import {Dimensions} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const screenDimensions = Dimensions.get('window');
const screenWidth = screenDimensions.width / 100;
const screenHeight = screenDimensions.height / 100;

export function rw(n) {
  return responsiveWidth(n / screenWidth);
}
export function rh(n) {
  return responsiveHeight(n / screenHeight);
}
