import {configureStore} from '@reduxjs/toolkit';
import LanguageSlice from './LanguageSlice';

export const store = configureStore({
  reducer: {
    language: LanguageSlice,
  },
});
