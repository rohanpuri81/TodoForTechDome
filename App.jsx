import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/Store';
import Toast from 'react-native-toast-message';

import AppNavigator from './src/AppNavigator';

function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
      <Toast />
    </Provider>
  );
}

export default App;
