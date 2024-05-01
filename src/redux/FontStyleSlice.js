import {createSlice} from '@reduxjs/toolkit';
import {REDUX_CONSTANTS} from './ReduxConstants';
import {responsiveWidth} from 'react-native-responsive-dimensions';

// Define the initial state for the theme slice
const initialState = {
  fontStyle: REDUX_CONSTANTS.ENGLISH_FONT,
  h1: {
    fontFamily: 'NotoSans-Medium',
    fontWeight: '900',
    fontSize: responsiveWidth(9.4444),
  },
  h2: {
    fontFamily: 'NotoSans-Medium',
    fontWeight: '600',
    fontSize: responsiveWidth(8.8888),
  },
  h3: {
    fontFamily: 'NotoSans-Medium',
    fontWeight: '600',
    fontSize: responsiveWidth(7.7777),
  },
  bodyLarge1: {
    fontFamily: 'NotoSans-Medium',
    fontWeight: 'bold',
    fontSize: responsiveWidth(5),
  },
  bodyLarge2: {
    fontFamily: 'NotoSans-Medium',
    fontWeight: '600',
    fontSize: responsiveWidth(5),
  },
  bodyLarge3: {
    fontFamily: 'NotoSans-Medium',
    fontWeight: '500',
    fontSize: responsiveWidth(5),
  },
  bodyLarge4: {
    fontFamily: 'NotoSans-Medium',
    fontWeight: 'normal',
    fontSize: responsiveWidth(5),
  },
  bodyMedium1: {
    fontFamily: 'NotoSans-Medium',
    fontWeight: '600',
    fontSize: responsiveWidth(3.8888),
  },
  bodyMedium2: {
    fontFamily: 'NotoSans-Medium',
    fontWeight: '500',
    fontSize: responsiveWidth(3.8888),
  },
  bodySmall1: {
    fontFamily: 'NotoSans-Medium',
    fontWeight: '500',
    fontSize: responsiveWidth(3.3333),
  },
  bodySmall2: {
    fontFamily: 'NotoSans-Medium',
    fontWeight: 'normal',
    fontSize: responsiveWidth(3.3333),
  },
};

// Create the ThemeSlice using createSlice
export const FontStyleSlice = createSlice({
  name: 'fontStyle',
  initialState,
  reducers: {
    // Reducer to set the theme to dark
    setFontToHindi(state, action) {
      return {
        ...state,
        fontStyle: REDUX_CONSTANTS.HINDI_FONT,
        h1: {
          fontFamily: 'NotoSansDevanagari-Medium',
          fontWeight: '900',
          fontSize: responsiveWidth(9.4444),
        },
        h2: {
          fontFamily: 'NotoSansDevanagari-Medium',
          fontWeight: '600',
          fontSize: responsiveWidth(8.8888),
        },
        h3: {
          fontFamily: 'NotoSansDevanagari-Medium',
          fontWeight: '600',
          fontSize: responsiveWidth(7.7777),
        },
        bodyLarge1: {
          fontFamily: 'NotoSansDevanagari-Medium',
          fontWeight: 'bold',
          fontSize: responsiveWidth(5),
        },
        bodyLarge2: {
          fontFamily: 'NotoSansDevanagari-Medium',
          fontWeight: '600',
          fontSize: responsiveWidth(5),
        },
        bodyLarge3: {
          fontFamily: 'NotoSansDevanagari-Medium',
          fontWeight: '500',
          fontSize: responsiveWidth(5),
        },
        bodyLarge4: {
          fontFamily: 'NotoSansDevanagari-Medium',
          fontWeight: 'normal',
          fontSize: responsiveWidth(5),
        },
        bodyMedium1: {
          fontFamily: 'NotoSansDevanagari-Medium',
          fontWeight: '600',
          fontSize: responsiveWidth(3.8888),
        },
        bodyMedium2: {
          fontFamily: 'NotoSansDevanagari-Medium',
          fontWeight: '500',
          fontSize: responsiveWidth(3.8888),
        },
        bodySmall1: {
          fontFamily: 'NotoSansDevanagari-Medium',
          fontWeight: '500',
          fontSize: responsiveWidth(3.3333),
        },
        bodySmall2: {
          fontFamily: 'NotoSansDevanagari-Medium',
          fontWeight: 'normal',
          fontSize: responsiveWidth(3.3333),
        },
      };
    },

    // Reducer to set the theme to light
    setFontToEnglish(state, action) {
      return {
        ...state,
        fontStyle: REDUX_CONSTANTS.ENGLISH_FONT,
        fontStyle: REDUX_CONSTANTS.ENGLISH_FONT,
        h1: {
          fontFamily: 'NotoSans-Medium',
          fontWeight: '900',
          fontSize: responsiveWidth(9.4444),
        },
        h2: {
          fontFamily: 'NotoSans-Medium',
          fontWeight: '600',
          fontSize: responsiveWidth(8.8888),
        },
        h3: {
          fontFamily: 'NotoSans-Medium',
          fontWeight: '600',
          fontSize: responsiveWidth(7.7777),
        },
        bodyLarge1: {
          fontFamily: 'NotoSans-Medium',
          fontWeight: 'bold',
          fontSize: responsiveWidth(5),
        },
        bodyLarge2: {
          fontFamily: 'NotoSans-Medium',
          fontWeight: '600',
          fontSize: responsiveWidth(5),
        },
        bodyLarge3: {
          fontFamily: 'NotoSans-Medium',
          fontWeight: '500',
          fontSize: responsiveWidth(5),
        },
        bodyLarge4: {
          fontFamily: 'NotoSans-Medium',
          fontWeight: 'normal',
          fontSize: responsiveWidth(5),
        },
        bodyMedium1: {
          fontFamily: 'NotoSans-Medium',
          fontWeight: '600',
          fontSize: responsiveWidth(3.8888),
        },
        bodyMedium2: {
          fontFamily: 'NotoSans-Medium',
          fontWeight: '500',
          fontSize: responsiveWidth(3.8888),
        },
        bodySmall1: {
          fontFamily: 'NotoSans-Medium',
          fontWeight: '500',
          fontSize: responsiveWidth(3.3333),
        },
        bodySmall2: {
          fontFamily: 'NotoSans-Medium',
          fontWeight: 'normal',
          fontSize: responsiveWidth(3.3333),
        },
      };
    },
  },
});

// Extract the actions from the ThemeSlice
export const {setFontToHindi, setFontToEnglish} = FontStyleSlice.actions;

// Export the reducer function for the ThemeSlice
export default FontStyleSlice.reducer;
