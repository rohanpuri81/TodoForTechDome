import {Text, TouchableOpacity} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import {ScreenConstants} from '../../Navigation/NavigationConstants';
import {StackActions} from '@react-navigation/native';

// Component for a button to navigate to the home screen
const LetsBeginButton = ({text}) => {
  // Access the navigation object
  const navigation = useNavigation();

  return (
    // TouchableOpacity for a clickable button
    <TouchableOpacity
      style={{
        backgroundColor: '#68c0ee',
        height: responsiveHeight(5),
        width: responsiveHeight(18),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: responsiveHeight(1),
      }}
      onPress={() => {
        // Use navigation to replace the current screen with the home screen
        navigation.dispatch(StackActions.replace(ScreenConstants.HOME));
      }}>
      {/* Text component for the button label */}
      <Text
        style={{
          fontSize: responsiveWidth(5),
          color: 'black',
          fontWeight: 500,
          fontFamily: 'NotoSans-Medium',
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default LetsBeginButton;
