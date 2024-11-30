import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
//imports local
import store from './src/store';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/store/routes';

const App = () => (
  <SafeAreaView style={{flex: 1}}>
    <NavigationContainer>
      <Provider store={store}>
        <Routes />
      </Provider>
    </NavigationContainer>
  </SafeAreaView>
);
export default App;
