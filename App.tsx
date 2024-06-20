import {View, Text, LogBox} from 'react-native';
import React from 'react';
import Router from './src/Navigation/Router';
import { Provider } from 'react-redux';
import store from './src/redux/store';
LogBox.ignoreLogs(['Invalid prop textStyle of type array supplied to Cell']);

const App = () => {
  return (
   <Provider store={store}>
   <Router/>
   </Provider>
  
  );
};

export default App;
