import { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { AppNavigation } from './src/navigation/AppNavigation';

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
    <AppNavigation/>
  );
}
