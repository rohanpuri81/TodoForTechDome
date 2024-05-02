import {configureStore} from '@reduxjs/toolkit';
import LanguageSlice from './LanguageSlice';
import ThemeSlice from './ThemeSlice';
import FontStyleSlice from './FontStyleSlice';
// Create Redux store with combined reducers
export const store = configureStore({
  reducer: {
    language: LanguageSlice, // LanguageSlice reducer for language state
    theme: ThemeSlice, // ThemeSlice reducer for theme state
    fontStyle: FontStyleSlice, // FontStyleSlice reducer for font style state
  },
});
