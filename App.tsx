import React from 'react';
import Navigation from '@/navigation';
import {Provider as ReduxProdiver} from 'react-redux';
import {Platform, UIManager} from 'react-native';
import Store from '@/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface Props {}

const App = ({}: Props) => {
  return (
    <ReduxProdiver store={Store}>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </ReduxProdiver>
  );
};
export default App;
