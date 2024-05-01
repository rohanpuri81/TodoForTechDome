import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import SvgLeft from './SvgLeft';
import SvgRight from './SvgRight';
import Sound from 'react-native-sound';
import {responsiveWidth} from 'react-native-responsive-dimensions';
// import { useSelector } from 'react-redux';

// Define SelectSound component
const SelectSound = () => {
  // Access the Redux theme state
  const theme = useSelector(state => state.theme);
  const fontStyle = useSelector(state => state.fontStyle);

  // Array of available sounds
  soundsArr = ['Default', 'Mandir bell', 'bird chirp'];

  // State to track the current selected sound
  const [currSound, setCurrSound] = useState({curr: soundsArr[0], index: 0});
  const [soundState, setSoundState] = useState('');

  const handleSoundChange = () => {
    switch (currSound.curr) {
      case 'Default':
        setSoundState('default');
        break;
      case 'Mandir bell':
        setSoundState('tbelll');
        break;
      case 'bird chirp':
        setSoundState('birdcc');
        break;

      default:
        // Handle default case
        break;
    }
  };
  useEffect(() => {
    handleSoundChange();
  }, [currSound]);
  // Function to select the previous sound
  function prev() {
    if (currSound.index != 0) {
      setCurrSound({
        ...currSound,
        curr: soundsArr[currSound.index - 1],
        index: currSound.index - 1,
      });
    }
  }

  // Function to select the next sound
  function next() {
    if (currSound.index != 2) {
      setCurrSound({
        ...currSound,
        curr: soundsArr[currSound.index + 1],
        index: currSound.index + 1,
      });
    }
  }
  const PlaySound = () => {
    var tbell = new Sound(`${soundState}.mp3`, Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // loaded successfully
      console.log(
        'duration in seconds: ' +
          tbell.getDuration() +
          'number of channels: ' +
          tbell.getNumberOfChannels(),
      );

      // Play the sound with an onEnd callback
      tbell.play(success => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
    });
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        // backgroundColor:'red',
        justifyContent: 'center',
        alignItems: 'center',
        gap: responsiveWidth(1.6666),
        width: responsiveWidth(43.3333),
        height: responsiveWidth(8.3333),
      }}>
      {/* Button to select previous sound */}
      <TouchableOpacity
        onPress={() => {
          prev();
        }}>
        <SvgLeft />
      </TouchableOpacity>

      {/* Display current selected sound */}
      <View
        style={{
          borderColor: theme.textLayer1,
          borderWidth: responsiveWidth(0.138888),
          borderRadius: responsiveWidth(1.6666),
          justifyContent: 'center',
          alignItems: 'center',
          width: responsiveWidth(32.2222),
          height: responsiveWidth(8.3333),
        }}>
        <TouchableOpacity onPress={PlaySound}>
          <Text
            style={{
              // fontFamily: 'NotoSans-Medium',
              // fontSize: responsiveWidth(3.8888),
              color: theme.textLayer1,
              // fontWeight: 500,
              ...fontStyle.bodyMedium2,
            }}>
            {currSound.curr}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Button to select next sound */}
      <TouchableOpacity onPress={next}>
        <SvgRight />
      </TouchableOpacity>
    </View>
  );
};

export default SelectSound;

const styles = StyleSheet.create({});
