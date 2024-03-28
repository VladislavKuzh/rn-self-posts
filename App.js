import 'react-native-gesture-handler';
import { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { AppNavigation } from './src/navigation/AppNavigation';
import { Provider } from 'react-redux';
import store from './src/store'

import { bootstrap } from './src/bootstrap'

export default function App() {

  const [isReady, setIsReady] = useState(false)

  if(!isReady) {
    return (
      <AppLoading 
        startAsync={bootstrap} 
        onError={err => console.log(err)}
        onFinish={() => setIsReady(true)}
      />
    )
  }
  return (
    <Provider store={store}>
      <AppNavigation/>
    </Provider>
  );
}
