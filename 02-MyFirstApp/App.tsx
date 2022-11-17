import React from 'react';
import { SafeAreaView } from 'react-native';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { DimensionesScreen } from './src/screens/DimensionesScreen';
import { PositionScreen } from './src/screens/PositionScreen';
// import { ContadorScreen } from './src/screens/ContadorScreen';
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';

const App = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* <HolaMundoScreen /> */}
            {/* <ContadorScreen /> */}
            {/* <BoxObjectModelScreen /> */}
            {/* <DimensionesScreen /> */}
            <PositionScreen />
        </SafeAreaView>

    )
};

export default App;
