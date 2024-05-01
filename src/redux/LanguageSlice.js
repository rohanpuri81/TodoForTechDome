import {createSlice} from '@reduxjs/toolkit';
// Import constants for Redux actions
import {REDUX_CONSTANTS} from './ReduxConstants';

const initialState = {
  // Default language set to English
  language: REDUX_CONSTANTS.ENGLISH,
};

// Create a slice for the language
export const LanguageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    // Reducer function to set the language to English
    setLanguageToEnglish(state, action) {
      return {
        ...state,
        language: REDUX_CONSTANTS.ENGLISH,
      };
    },

    // Reducer function to set the language to Hindi
    setLanguageToHindi(state, action) {
      return {
        ...state,
        language: REDUX_CONSTANTS.HINDI,
      };
    },

    // Reducer function to set the language based on the payload
    setLanguage(state, action) {
      return {
        ...state,
        language: action.payload,
      };
    },
  },
});

// Export actions from the language slice
export const {setLanguageToEnglish, setLanguageToHindi, setLanguage} =
  LanguageSlice.actions;

// Export the reducer function
export default LanguageSlice.reducer;
