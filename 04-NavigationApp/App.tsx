import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import MenuLateralBasico from './src/navigator/MenuLateralBasico';
import MenuLateral from './src/navigator/MenuLateral';
import { Tabs } from './src/navigator/Tabs';
import { Provider as PaperProvider } from 'react-native-paper';



const App = () => {
  return (

    <PaperProvider>
      <NavigationContainer>
        {/* <StackNavigator /> */}
        {/* <MenuLateralBasico /> */}
        <MenuLateral />

        {/* <Tabs /> */}
      </NavigationContainer>
    </PaperProvider>
  )
}

export default App