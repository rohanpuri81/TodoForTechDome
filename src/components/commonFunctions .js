import {Dimensions} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

// Get screen dimensions
const screenDimensions = Dimensions.get('window');
const screenWidth = screenDimensions.width / 100;
const screenHeight = screenDimensions.height / 100;

// Function to calculate responsive width
export function rw(n) {
  return responsiveWidth(n / screenWidth);
}

// Function to calculate responsive height
export function rh(n) {
  return responsiveHeight(n / screenHeight);
}
