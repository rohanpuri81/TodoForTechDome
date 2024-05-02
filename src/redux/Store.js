import {configureStore} from '@reduxjs/toolkit';
import LanguageSlice from './LanguageSlice';
import ThemeSlice from './ThemeSlice';
import FontStyleSlice from './FontStyleSlice';
import todoSlice from './todoSlice';

export const store = configureStore({
  reducer: {
    language: LanguageSlice,
    theme: ThemeSlice,
    fontStyle: FontStyleSlice,
    todo: todoSlice,
  },
});
