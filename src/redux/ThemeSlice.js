import {createSlice} from '@reduxjs/toolkit';
import {REDUX_CONSTANTS} from './ReduxConstants';

// Define the initial state for the theme slice
const initialState = {
  theme: REDUX_CONSTANTS.LIGHT_THEME,
  textColor: 'black',
  statusBarStyle: 'dark-content',
  textLayer1: '#121E2A',
  textLayer2: '#172B42',
  primaryBgColor: 'white',
  secondaryColor: '#DE2821',
  accent1: '#F5876A',
  accent2: '#EBBA8D',
  accent3: '#B5BEE0',
  accent4: '#C8E1A7',
  homeBg: 'white',
};

// Create the ThemeSlice using createSlice
export const ThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    // Reducer to set the theme to dark
    setThemeToDark(state, action) {
      return {
        ...state,
        theme: REDUX_CONSTANTS.DARK_THEME,
        textColor: 'white',
        statusBarStyle: 'light-content',
        textLayer1: '#FDFDFD',
        textLayer2: '#F0F0F0',
        primaryBgColor: '#121E2A',
        secondaryColor: '#4CB7EF',
        accent1: '#E07A5F',
        accent2: '#D4A87F',
        accent3: '#9299B6',
        accent4: '#B0C692',
        homeBg: 'black',
      };
    },

    // Reducer to set the theme to light
    setThemeToLight(state, action) {
      return {
        ...state,
        theme: REDUX_CONSTANTS.LIGHT_THEME,
        textColor: 'black',
        statusBarStyle: 'dark-content',
        textLayer1: '#121E2A',
        textLayer2: '#172B42',
        primaryBgColor: 'white',
        secondaryColor: '#DE2821',
        accent1: '#F5876A',
        accent2: '#EBBA8D',
        accent3: '#B5BEE0',
        accent4: '#C8E1A7',
        homeBg: 'white',
      };
    },
  },
});

// Extract the actions from the ThemeSlice
export const {setThemeToDark, setThemeToLight} = ThemeSlice.actions;

// Export the reducer function for the ThemeSlice
export default ThemeSlice.reducer;
