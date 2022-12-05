import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import MenuLateralBasico from './src/navigator/MenuLateralBasico';
import MenuLateral from './src/navigator/MenuLateral';
import { Tabs } from './src/navigator/Tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import { AuthProvider } from './src/context/AutContext';



const App = () => {
  return (

    <PaperProvider>
      <NavigationContainer>
        <AppState>
          {/* <StackNavigator /> */}
          {/* <MenuLateralBasico /> */}
          <MenuLateral />
          {/* <Tabs /> */}
        </AppState>
      </NavigationContainer>
    </PaperProvider>
  )
}

const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default App